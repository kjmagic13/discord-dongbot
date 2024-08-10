type InteractionRequest = {
  type: number;
};

export default defineEventHandler(async (event) => {
  const { error, body, signature, timestamp } =
    await validateDiscordInteraction<Maybe<InteractionRequest>>(event);

  console.log("ping", { body, signature, timestamp });

  if (!!error) return error;

  /**
   * ping
   */
  if (body?.type == 1) {
    console.log("pong");
    return {
      type: 1,
    };
  }

  return {
    type: 4,
    data: {
      content: "Hello world!",
    },
  };
});
