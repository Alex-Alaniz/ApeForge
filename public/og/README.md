# OpenGraph Image Guidelines

This directory contains OpenGraph (OG) images used for social media previews when sharing links to the ApeForge website.

## Image Requirements

- **Main OG Image:** `apeforge.jpg`
  - Dimensions: 1200×630 pixels (optimized for social sharing)
  - Format: JPG
  - Features: ApeForge branding with the iconic ape blacksmith imagery
  - Purpose: Used as the default sharing image for the website across all social platforms

## Design Guidelines

For the best appearance across social media platforms:

1. Ensure any text is large and readable
2. Use the ApeForge color scheme (black background, metallic/gray accents)
3. Keep important elements in the center of the image
4. Include the ApeForge branding elements
5. Consider that some platforms may crop the edges of the image

## Creating New OG Images

When creating page-specific OG images:
1. Follow the naming convention: `page-name.jpg`
2. Maintain the 1200×630 pixel dimensions
3. Update the corresponding page's metadata to reference the new image

## Example Image

```tsx
// In your page metadata:
openGraph: {
  images: [
    {
      url: "/og/apeforge.jpg",
      width: 1200,
      height: 630,
      alt: "ApeForge",
    },
  ],
}
``` 