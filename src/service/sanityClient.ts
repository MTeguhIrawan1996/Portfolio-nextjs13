import { type ClientConfig, createClient } from '@sanity/client';

const config: ClientConfig = {
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: 'production',
  apiVersion: '2022-11-18',
  useCdn: true,
  token: `${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
  ignoreBrowserTokenWarning: true,
};
export const client = createClient(config);
