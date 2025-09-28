const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjEzNTYwOTIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgxN0NEMDg5YWZBZjg3ODZlZUIzRDMxMzNBNzlmNTc2MGVCZDVmMjE3In0",
    payload: "eyJkb21haW4iOiJtaW5pa2l0LWJhc2UudmVyY2VsLmFwcCJ9",
    signature: "MHgzMzk0MzRiMjg4MjcxYWJhMmU0NzQ5OWQwYjZmODFmNjE4NzRmM2IyMTlmN2JmMjQwMTc1NTcyNDcxMzJkMTZmMDY1ODNkNGFlMDgxZTJhY2M4Y2Q2MzE2OWNhNTU5MWFiZGRiOTYxNjkxNmQ1MDhkMThkNmRjNDQ4YTU3ZTI2ZDFi"
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
