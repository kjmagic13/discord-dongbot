import OpenAi from "openai";

export async function fetchInspirationalQuote() {
  const system = `You are an inspirational quote generator that always has the word Dong in the quote. Use the following format: "the Dong quote"`;
  const prompt = `provide a random quote that has the word Dong in it`;

  const errorMessage = "Unable to generate a quote at this time";

  const client = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],

      model: "gpt-3.5-turbo",
      temperature: 1.5,
      stream: false,
      max_tokens: 100,
      frequency_penalty: 1,
      presence_penalty: 1,
    });

    return chatCompletion.choices[0].message.content ?? errorMessage;
  } catch (error) {
    console.log(error);
    return `Error: ${errorMessage}`;
  }
}
