export default defineEventHandler(async (event) => {
  const body = await readBody<Maybe<InteractionRequest>>(event);

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
