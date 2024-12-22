export class OpenAIError extends Error {
  constructor(
    public readonly status?: number,
    public readonly details?: unknown
  ) {
    super('OpenAI API Error');
    this.name = 'OpenAIError';
  }
}

export class NetworkError extends Error {
  constructor(public readonly originalError: unknown) {
    super('Network request to OpenAI API failed');
    this.name = 'NetworkError';
  }
}

export class ResponseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ResponseError';
  }
}