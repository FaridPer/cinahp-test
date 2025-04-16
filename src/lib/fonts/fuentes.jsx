import { getPayload } from 'payload'
import config from '@payload-config'


export async function getFonts() {
  const payload = await getPayload({ config });
  const fuentes = await payload.findGlobal({ slug: "fuentes", depth: 2 });

  return {
    primaryFont: fuentes.primaryFont || "sans-serif",
    primaryFontUrl: typeof fuentes.primaryFontFile === "object" ? fuentes.primaryFontFile?.url : "",
    secondaryFont: fuentes.secondaryFont || "serif",
    secondaryFontUrl: typeof fuentes.secondaryFontFile === "object" ? fuentes.secondaryFontFile?.url : "",
  };
}

