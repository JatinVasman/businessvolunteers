import { notFound } from "next/navigation";
import LocationPageRoute from "../../../components/pages/LocationPage";
import { LOCATIONS } from "../../../lib/data";
export function generateStaticParams(){ return LOCATIONS.map(l=>({ loc: l.id })); }
export async function generateMetadata({ params }: { params: Promise<{ loc: string }> }){
  const { loc } = await params;
  const l = LOCATIONS.find(x=>x.id===loc);
  return {
    title: l ? `Digital Marketing in ${l.name} | Business Volunteers` : "Locations | Business Volunteers",
    description: l ? `Digital marketing services in ${l.name} — SEO, ads, social and web from Business Volunteers.` : "",
    alternates: { canonical: `/locations/${loc}/` },
  };
}
export default async function Page({ params }: { params: Promise<{ loc: string }> }){
  const { loc } = await params;
  const l = LOCATIONS.find(x=>x.id===loc);
  if(!l) notFound();
  return <LocationPageRoute loc={l} />;
}
