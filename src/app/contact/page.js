import PageBanner from "@/components/PageBanner";
import ConsultationSection from "@/components/ConsultationSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Network Intelligence Technologies",
};

const DETAILS = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Morrison House, 4th Floor", "Mombasa Road, Nairobi-Kenya."],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["0772-378393", "020-3504199"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["nit.intelligence@gmail.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["8.00 am to 4.00 pm"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />

      <section className="py-16 bg-gray-50">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {DETAILS.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="bg-white shadow-sm px-6 py-8">
              <Icon className="mx-auto text-gold mb-4" size={28} />
              <h3 className="font-bold text-navy mb-2">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="text-sm text-gray-600">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ConsultationSection />

      <section className="h-80">
        <iframe
          title="Network Intelligence Technologies map"
          src="https://www.google.com/maps?q=Morrison+House+Mombasa+Road+Nairobi&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
