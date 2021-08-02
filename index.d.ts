// Type definitions for navigr
declare module 'pkce' {
  export default function pkce(): {
    code_challenge: string;
    code_verifier: string;
  };
}