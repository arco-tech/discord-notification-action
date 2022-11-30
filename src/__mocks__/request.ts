interface RequestOptions {
  body?: string | object;
  headers?: {[name: string]: string};
}

export async function request(
  method: string,
  url: string,
  options: RequestOptions,
): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify({method, url, options}));
    });
  });
}
