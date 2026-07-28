import type { Config } from "@netlify/functions";

export default async (request: Request) => {
  const body = await request.json();
  const { origin } = new URL(request.url);

  await fetch(`${origin}/api/v1/interactions/deferred`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const config: Config = {
  background: true,
  // path: "/process",
};
