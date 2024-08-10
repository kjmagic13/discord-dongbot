import { H3Event, H3Error } from "h3";
import nacl from "tweetnacl";

const { DISCORD_PUBLIC_KEY } = process.env;

export async function validateDiscordInteraction<T = any>(event: H3Event) {
  const body = await readRawBody(event);
  const signature = getHeader(event, "X-Signature-Ed25519");
  const timestamp = getHeader(event, "X-Signature-Timestamp");

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp ?? "" + body),
    Buffer.from(signature ?? "", "hex"),
    Buffer.from(DISCORD_PUBLIC_KEY ?? "", "hex")
  );

  console.log({ body, signature, timestamp, isVerified });

  if (!isVerified) {
    throw createError({
      statusCode: 401,
      message: "invalid request signature",
    });
  }
}
