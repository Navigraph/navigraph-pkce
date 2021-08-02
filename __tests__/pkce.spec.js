const pkce = require("../index");
const crypto = require("crypto");

Object.defineProperty(global.self, "crypto", {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

describe("@navigraph/pkce", () => {
  test("verifier length is 43", () => {
    expect(pkce().code_verifier.length).toEqual(43);
  });

  test("challenge length is 43", () => {
    expect(pkce().code_challenge.length).toEqual(43);
  });

  test("code_verifier pattern matches", () => {
    const pattern = /^[A-Za-z\d\-._~]{43,128}$/;
    const challengePair = pkce();
    expect(challengePair.code_verifier).toMatch(pattern);
  });

  test("code_verifier doesn't have [=+/]", () => {
    const challengePair = pkce();
    expect(challengePair.code_verifier).toEqual(
      expect.not.stringContaining("=")
    );
    expect(challengePair.code_verifier).toEqual(
      expect.not.stringContaining("+")
    );
    expect(challengePair.code_verifier).toEqual(
      expect.not.stringContaining("/")
    );
  });

  test("code_challenge doesn't have [=+/]", () => {
    const challengePair = pkce();
    expect(challengePair.code_verifier).toEqual(
      expect.not.stringContaining("=")
    );
    expect(challengePair.code_verifier).toEqual(
      expect.not.stringContaining("+")
    );
    expect(challengePair.code_verifier).toEqual(
      expect.not.stringContaining("/")
    );
  });

  test("code_challenge to be base64 uri-encoded sha256(code_verifier)", () => {
    function base64UrlEncode(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }

    function generateChallenge(verifier) {
      const hash = crypto
        .createHash("sha256")
        .update(verifier)
        .digest("base64");
      return base64UrlEncode(hash);
    }

    const challengePair = pkce();
    expect(challengePair.code_challenge).toEqual(
      generateChallenge(challengePair.code_verifier)
    );
  });

  test("throws when invoked in non-browser environment", () => {
    windowSpy = jest.spyOn(window, "window", "get");
    windowSpy.mockImplementation(() => undefined);

    expect(pkce).toThrowError(
      "This code is only meant to run in a browser environment."
    );
  });
});
