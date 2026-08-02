import Image from "next/image";
import Link from "next/link";

export default function ServiceCardImage({ image, title, text, href = "/contact" }) {
  return (
    <div className="text-left">
      <div className="relative w-full h-40 mb-5 bg-navy-light rounded overflow-hidden">
        {image && (
          <Image src={image} alt={title} fill className="object-cover" />
        )}
      </div>
      <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">{text}</p>
      <Link
        href={href}
        className="inline-block border-2 border-gold text-gray-900 text-xs font-bold tracking-wider px-5 py-2 hover:bg-gold transition-colors"
      >
        READ MORE
      </Link>
    </div>
  );
}
