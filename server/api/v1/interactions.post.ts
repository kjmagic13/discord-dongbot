type InteractionRequest = {
  request: {
    json: { type: number };
  };
};

export default defineEventHandler(async (event) => {
  const _body = await readBody(event);
  console.log("ping", _body);

  const { body } = await validateDiscordInteraction<Maybe<InteractionRequest>>(
    event
  );

  /**
   * ping
   */
  if (body?.request?.json?.type == 1) {
    console.log("pong");
    return {
      type: 1,
    };
  }
});
