export default defineEventHandler(async (event) => {
  // auth guard
  if (
    !import.meta.dev &&
    event.node.req.headers.authorization !=
      `Bearer ${process.env.OPENAI_API_KEY}`
  ) {
    throw createError({ statusCode: 403, statusMessage: "Invalid API key" });
  }

  const system = `You are an inspirational quote generator. Keep your response less than 400 characters and include only the quote, nothing else. Use the following format: "the quote"`;
  const prompt = `provide a random quote that has the word Dong in it`;

  const errorMessage = "Unable to generate a quote at this time";

  try {
    const data = await event.$fetch<IGptResponse | null>(
      `https://api.openai.com/v1/chat/completions`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },

        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: system },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
        }),
      }
    );

    return data?.choices?.[0]?.message?.content ?? errorMessage;
  } catch (error) {
    console.log(error);
    return `Error: ${errorMessage}`;
  }
});
