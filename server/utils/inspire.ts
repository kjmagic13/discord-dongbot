import OpenAi from "openai";

export const fetchInspirationalQuote = defineCachedFunction(
  async () => {
    const system = `"You are an inspirational quote generator that always has the word Dong in the quote. For example: "the Dong is mightier than the sword" is a great phallic pun. Return ONLY the quote, nothing else.`;
    const prompt = `come up with a random quote that has the word Dong in it.`;

    const errorMessage = "Unable to generate a quote at this time";

    const { openaiApiKey, openaiApiBaseUrl, openaiModel } = useRuntimeConfig();

    const client = new OpenAi({
      apiKey: openaiApiKey,
      baseURL: openaiApiBaseUrl,
    });

    try {
      const chatCompletion = await client.chat.completions.create({
        model: openaiModel,

        messages: [
          // { role: "system", content: `Today is ${new Date().toString()}.` },
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
  },
  {
    maxAge: 1,
    shouldInvalidateCache: () => true,
  },
);
