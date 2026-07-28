import type { Config } from "@netlify/functions";
import { $fetch } from "ofetch";

export default async (request: Request) => {
  const body = await request.json();
  const { origin } = new URL(request.url);

  await $fetch(`/api/v1/interactions/deferred`, {
    baseURL: origin,
    method: "POST",
    body,
  });
};

export const config: Config = {
  background: true,
  // path: "/process",
};
