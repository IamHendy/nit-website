import Link from "next/link";

export default function SolutionCard({
  title,
  text,
  href = "/contact",
  goldButton = false,
}) {
  return (
    <div className="text-left h-full flex flex-col">
      <h3 className="font-bold text-lg text-navy mb-3 uppercase">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{text}</p>
      {goldButton ? (
        <Link
          href={href}
          className="inline-block self-start mt-auto border-2 border-gold text-gray-900 text-xs font-bold tracking-wider px-5 py-2 hover:bg-gold active:bg-gold-dark active:border-gold-dark transition-colors"
        >
          READ MORE
        </Link>
      ) : (
        <Link
          href={href}
          className="text-navy font-semibold text-sm hover:text-gold transition-colors mt-auto self-start"
        >
          Read More
        </Link>
      )}
    </div>
  );
}