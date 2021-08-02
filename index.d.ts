declare module "@navigraph/pkce" {
  /**
   * Generates a Proof Key for Code Exchange (PKCE) challenge pair.
   * @see https://datatracker.ietf.org/doc/html/rfc7636
   */
  export default function pkce(): {
    code_challenge: string;
    code_verifier: string;
  };
}
