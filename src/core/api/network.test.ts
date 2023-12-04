import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Network } from "./network";
import { POLYGON_API_KEY } from "@env";

describe("Fetch sample", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock.restore();
  });

  it("should make a successful request", async () => {
    const url = "https://example.com/api";
    const responseData = { data: "mocked data" };

    mock.onAny(url).reply(200, responseData);

    const response = await Network.fetch(url, {});

    expect(response.data).toEqual(responseData);
  });

  it("should add Authorization header", async () => {
    const url = "https://example.com/api";
    const responseData = { data: "mocked data" };

    mock.onAny(url).reply(200, responseData);

    const response = await Network.fetch(url, {});

    expect(response.config.headers.Authorization).toBe(
      `Bearer ${POLYGON_API_KEY}`
    );
  });
});
