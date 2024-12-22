export class ChatAPIError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = 'ChatAPIError';
  }
}

export class NetworkError extends Error {
  constructor(message: string = 'Network request failed') {
    super(message);
    this.name = 'NetworkError';
  }
}