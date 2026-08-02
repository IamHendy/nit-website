export default function PageBanner({ title }) {
  return (
    <div className="relative bg-navy-dark h-40 md:h-52 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-network.svg')" }}
      />
      <h1 className="relative text-white text-2xl md:text-4xl font-bold text-center px-6">
        {title}
      </h1>
    </div>
  );
}
