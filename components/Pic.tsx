// <img> for a /art/*.webp that serves the .avif twin (~half the size) where supported.
// <picture> is display:contents (globals.css), so layout and CSS still see only the <img>.
export function Pic({ src, ...img }: { src: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <picture>
      <source srcSet={src.replace(/\.webp$/, ".avif")} type="image/avif" />
      <img src={src} {...img} />
    </picture>
  );
}
