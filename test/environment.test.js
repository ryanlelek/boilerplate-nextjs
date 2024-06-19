describe("Environment Variables", () => {
  it("should load environment variables", () => {
    expect(process.env.API_URI).toEqual("CHANGEME");
  });
  it("should load environment variables", () => {
    expect(process.env.API_TOKEN).toEqual("BEARER");
  });
});
