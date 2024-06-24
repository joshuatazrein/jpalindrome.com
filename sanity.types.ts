/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};
export declare const internalGroqTypeReferenceTo: unique symbol;

// Source: ../app/layout.tsx
// Variable: ROOT_QUERY
// Query: *[_type == 'settings'][0]
export type ROOT_QUERYResult = null;

// Source: ../app/about/page.tsx
// Variable: bioQuery
// Query: *[_type == 'bio'][0] {  ...,   'bioURL': cv.asset->url}
export type BioQueryResult = null;

// Source: ../app/site-design/layout.tsx
// Variable: ServiceQuery
// Query: *[_type == 'service' && slug.current == $service][0]{   ...,   'scenes': scenes[]{    title, subtitle,    'highlightedWorks': highlightedWorks[]->  }}
export type ServiceQueryResult = null;

// Source: ../app/site-design/banner/page.tsx
// Variable: bannersQuery
// Query: *[_type == 'demo' && slug.current == 'banners'][0].files[]{'source': uploadSource.asset->{url, mimeType, _id}}
export type BannersQueryResult = null;

// Source: ../app/work/[role]/layout.tsx
// Variable: WorksQuery
// Query: *[_type == 'work' && type->slug.current == $role]{..., 'videoBannerURL': videoBanner.asset->url, 'imageBannerURL': imageBanner.asset->url}
export type WorksQueryResult = Array<never>;
// Variable: RoleQuery
// Query: *[_type == 'category' && slug.current == $role][0]
export type RoleQueryResult = null;

// Source: ../app/work/[role]/[slug]/page.tsx
// Variable: WorkQuery
// Query: *[_type == "work" && slug.current == $slug][0]{..., 'imageBannerURL': imageBanner.asset->url, 'filePreviews': documentPreviews[]{..., 'fileSource': uploadSource.asset->}}
export type WorkQueryResult = null;

// Source: ../app/works/zettelkablooey/[[...path]]/(services)/data.ts
// Variable: demoDataQuery
// Query: *[_type == 'demo' && slug.current == $id][0].files[]{'source': uploadSource.asset->url}
export type DemoDataQueryResult = null;

