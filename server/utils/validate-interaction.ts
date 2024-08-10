import { H3Event, H3Error } from "h3";
import nacl from "tweetnacl";

const { DISCORD_PUBLIC_KEY } = process.env;

export async function validateDiscordInteraction<T = any>(event: H3Event) {
  let error: H3Error<unknown> | undefined = undefined;
  const body: T = await readBody(event);
  const signature = getHeader(event, "X-Signature-Ed25519");
  const timestamp = getHeader(event, "X-Signature-Timestamp");

  try {
    const isVerified = nacl.sign.detached.verify(
      Buffer.from(timestamp ?? "" + body),
      Buffer.from(signature ?? "", "hex"),
      Buffer.from(DISCORD_PUBLIC_KEY ?? "", "hex")
    );

    if (!isVerified) {
      throw {};
    }
  } catch (_error) {
    error = createError({
      statusCode: 401,
      message: "invalid request signature",
    });
  } finally {
    return { error, body, timestamp, signature };
  }
}
