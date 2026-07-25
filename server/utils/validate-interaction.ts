import { verifyKey } from "discord-interactions";
import { H3Event } from "h3";

export async function validateDiscordInteraction<
  T = Maybe<DiscordInteraction.Request>,
>(event: H3Event) {
  const { discord: config } = useRuntimeConfig();

  const body = await readRawBody(event);
  const signature = getHeader(event, "X-Signature-Ed25519");
  const timestamp = getHeader(event, "X-Signature-Timestamp");

  const isVerified = await verifyKey(
    body ?? "",
    signature ?? "",
    timestamp ?? "",
    config.publicKey,
  );

  if (import.meta.dev) console.log({ body, signature, timestamp, isVerified });

  if (!isVerified) {
    throw createError({
      statusCode: 401,
      message: "invalid request signature",
    });
  }

  return await readBody<T>(event);
}
