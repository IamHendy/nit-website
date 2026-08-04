import Image from "next/image";
import Link from "next/link";

export default function ServiceCardSimple({
  image,
  title,
  text,
  href = "/services",
  dark = false,
}) {
  return (
    <div className="text-left h-full flex flex-col">
      {image && (
        <div className="relative w-full h-56 md:h-60 mb-6 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <h3
        className={`font-bold text-lg mb-3 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-6 ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {text}
      </p>
      <Link
        href={href}
        className={`inline-block self-start mt-auto border-2 border-gold text-xs font-bold tracking-wider px-5 py-2 transition-colors ${
          dark
            ? "text-white hover:bg-gold hover:text-navy active:bg-gold-dark active:border-gold-dark active:text-navy"
            : "text-gray-900 hover:bg-gold active:bg-gold-dark active:border-gold-dark"
        }`}
      >
        READ MORE
      </Link>
    </div>
  );
}
