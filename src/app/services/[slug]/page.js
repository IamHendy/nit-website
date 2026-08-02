import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/data/services";
import ServicesSidebar from "@/components/ServicesSidebar";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: `${service.title} | Network Intelligence Technologies` };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const { detail, image, title } = service;

  return (
    <section className="border-t-4 border-navy py-14">
      <div className="container grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-10 items-start">
        <div className="relative w-full aspect-square bg-navy-light rounded overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div>
          <h1 className="font-bold text-xl text-gray-900 mb-5">
            {detail.heading}
          </h1>

          {detail.intro?.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {detail.blocks?.map((b, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              <span className="font-bold text-gray-900">{b.lead} </span>
              {b.text}
            </p>
          ))}

          {detail.closing && (
            <p className="text-gray-700 leading-relaxed mb-4">
              {detail.closing}
            </p>
          )}

          {detail.subheading && (
            <h2 className="font-bold text-gray-900 mt-6 mb-4">
              {detail.subheading}
            </h2>
          )}

          {detail.list && (
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              {detail.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          )}
        </div>

        <ServicesSidebar activeSlug={service.slug} />
      </div>
    </section>
  );
}
