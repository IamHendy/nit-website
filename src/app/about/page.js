import PageBanner from "@/components/PageBanner";
import AboutBlock from "@/components/AboutBlock";

export const metadata = {
  title: "About Us | Network Intelligence Technologies",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Network Intelligence Technologies, Ltd (NIT)" />
      <AboutBlock heading={false} />
    </>
  );
}
