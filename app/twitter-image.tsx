import { ogImageAlt, ogImageContentType, ogImageSize, renderOgImage } from "@/components/OgImage";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function TwitterImage() {
  return renderOgImage();
}
