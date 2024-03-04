import { injectScript, getModule } from '@module-federation/nextjs-mf/utilities'

export const importModule = async (remoteContainer, modulePath) => {
  const sample = await getModule({ remoteContainer, modulePath });
  console.log(sample);
  return sample;
}