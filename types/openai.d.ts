interface IGptResponse {
  id: string;
  created: number;
  model: string;
  choices?: [
    {
      index: number;
      message?: {
        role: string;
        content?: string;
      };
      logprobs: null;
      finish_reason: string;
    }
  ];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  system_fingerprint: null;
}
