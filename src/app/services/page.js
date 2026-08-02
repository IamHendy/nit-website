import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ServiceCardImage from "@/components/ServiceCardImage";
import { SERVICES } from "@/data/services";

export const metadata = {
  title: "Services | Network Intelligence Technologies",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />
      <section className="bg-gray-100 py-20">
        <div className="container">
          <SectionHeading>Our Services</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {SERVICES.map((s) => (
              <ServiceCardImage
                key={s.slug}
                image={s.image}
                title={s.title}
                text={s.cardText}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
