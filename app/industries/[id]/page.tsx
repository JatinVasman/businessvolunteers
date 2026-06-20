import { notFound } from "next/navigation";
import IndustryPageRoute from "../../../components/pages/IndustryPage";
import { INDUSTRY_DATA } from "../../../lib/data";

const BASE = "https://businessvolunteers.online";

export function generateStaticParams(){ return Object.keys(INDUSTRY_DATA).map(id=>({ id })); }
export function generateMetadata({ params }){
  const d = INDUSTRY_DATA[params.id];
  return {
    title: d ? `${d.name} Digital Marketing Services | Business Volunteers` : "Industries | Business Volunteers",
    description: d ? `Digital marketing for ${d.name.toLowerCase()} — SEO, Google & Meta ads, social media and web, tuned to ${d.name.toLowerCase()} buyers. Transparent pricing, measurable ROI.` : "",
    alternates: { canonical: `/industries/${params.id}/` },
    openGraph: { type: "website", title: d?.name, url: `${BASE}/industries/${params.id}/` },
  };
}
export default function Page({ params }){
  const d = INDUSTRY_DATA[params.id];
  if(!d) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", serviceType: `Digital Marketing for ${d.name}`,
        provider: { "@id": `${BASE}/#org` }, areaServed: "IN",
        url: `${BASE}/industries/${params.id}/` },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries/` },
        { "@type": "ListItem", position: 3, name: d.name, item: `${BASE}/industries/${params.id}/` },
      ]},
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <IndustryPageRoute id={params.id} />
  </>);
}
