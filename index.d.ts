declare module "@navigraph/pkce" {
  export default function pkce(): {
    code_challenge: string;
    code_verifier: string;
  };
}
