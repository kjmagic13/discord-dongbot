import OpenAi from "openai";

export async function fetchInspirationalQuote() {
  const system = `"You are an inspirational quote generator that always has the word Dong in the quote. For example: "the Dong is mightier than the sword"`;
  const prompt = `provide a random quote that has the word Dong in it. Return ONLY the quote, nothing else.`;

  const errorMessage = "Unable to generate a quote at this time";

  const { openAi: config } = useRuntimeConfig();

  const client = new OpenAi({
    apiKey: config.apiKey,
    baseURL: config.apiBaseUrl,
  });

  try {
    const chatCompletion = await client.chat.completions.create({
      model: config.model,

      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],

      stream: false,
      max_tokens: 100,
      temperature: 0.5,
    });

    return chatCompletion.choices[0]?.message.content ?? errorMessage;
  } catch (error) {
    console.log(error);
    return `Error: ${errorMessage}`;
  }
}
