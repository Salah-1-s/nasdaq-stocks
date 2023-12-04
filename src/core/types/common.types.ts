export type Payload<D = unknown> = {
  results: D;
  count: number;
  next_url?: string;
};
