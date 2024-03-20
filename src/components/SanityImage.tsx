import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

export function SanityImage({ value }: { value: any }) {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder().projectId("m1mxia92").dataset("production").image(value).width(800).fit("max").auto("format").url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
}
