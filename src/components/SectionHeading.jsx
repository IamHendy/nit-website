export default function SectionHeading({ children, light = false }) {
  return (
    <div className="text-center mb-10">
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
      </h2>
      <div className="section-divider mt-4">
        <span className={light ? "!bg-white" : ""}></span>
        <span className="dot"></span>
        <span className={light ? "!bg-white" : ""}></span>
      </div>
    </div>
  );
}
