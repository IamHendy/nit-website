import Image from "next/image";
import Link from "next/link";

export default function ServiceCardSimple({ image, title, text, href = "/services" }) {
  return (
    <div className="text-left">
      {image && (
        <div className="relative w-full h-48 mb-5 rounded overflow-hidden bg-gray-50 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-3"
          />
        </div>
      )}
      <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">{text}</p>
      <Link
        href={href}
        className="inline-block border-2 border-gold text-gray-900 text-xs font-bold tracking-wider px-5 py-2 hover:bg-gold active:bg-gold-dark active:border-gold-dark transition-colors"
      >
        READ MORE
      </Link>
    </div>
  );
}
