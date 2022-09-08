declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SERVICE_ID: string;
    readonly NEXT_PUBLIC_TEMPLATE_ID: string;
    readonly NEXT_PUBLIC_PUBLIC_KEY: string;
  }
}
