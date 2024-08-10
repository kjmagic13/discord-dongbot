import { verifyKey } from "discord-interactions";
import { H3Event } from "h3";

const { DISCORD_PUBLIC_KEY } = process.env;

export async function validateDiscordInteraction<T = any>(event: H3Event) {
  const body = await readRawBody(event);
  const signature = getHeader(event, "X-Signature-Ed25519");
  const timestamp = getHeader(event, "X-Signature-Timestamp");

  const isVerified = await verifyKey(
    body ?? "",
    signature ?? "",
    timestamp ?? "",
    DISCORD_PUBLIC_KEY ?? ""
  );

  console.log({ body, signature, timestamp, isVerified });

  if (!isVerified) {
    throw createError({
      statusCode: 401,
      message: "invalid request signature",
    });
  }
}
