import { notFound } from "next/navigation";
import LocationPageRoute from "../../../components/pages/LocationPage";
import { LOCATIONS } from "../../../lib/data";
export function generateStaticParams(){ return LOCATIONS.map(l=>({ loc: l.id })); }
export function generateMetadata({ params }){
  const l = LOCATIONS.find(x=>x.id===params.loc);
  return {
    title: l ? `Digital Marketing in ${l.name} | Business Volunteers` : "Locations | Business Volunteers",
    description: l ? `Digital marketing services in ${l.name} — SEO, ads, social and web from Business Volunteers.` : "",
    alternates: { canonical: `/locations/${params.loc}/` },
  };
}
export default function Page({ params }){
  const l = LOCATIONS.find(x=>x.id===params.loc);
  if(!l) notFound();
  return <LocationPageRoute loc={l} />;
}
