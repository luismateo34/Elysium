interface ImportMetaEnv {
  readonly PUBLIC_NEXT_JS_URL: string;
  readonly PUBLIC_PORFOLIO_URL: string;
  readonly PUBLIC_GITHUB_URL: string;
  readonly PUBLIC_LINKEDIN: string;
  readonly PUBLIC_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
