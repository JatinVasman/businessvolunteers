import { notFound } from "next/navigation";
import CaseStudyArticlePageRoute from "../../../components/pages/CaseStudyArticlePage";
import { getAllCaseStudies, getCaseStudyBySlug, slugify } from "../../../lib/data";

const BASE = "https://businessvolunteers.online";

export function generateStaticParams(){
  const seen = new Set(); const out = [];
  for (const cs of getAllCaseStudies()){ const slug = slugify(cs.title); if(!seen.has(slug)){ seen.add(slug); out.push({ slug }); } }
  return out;
}
export function generateMetadata({ params }){
  const cs = getCaseStudyBySlug(params.slug);
  return {
    title: cs ? `${cs.title} — ${cs.ind} Case Study | Business Volunteers` : "Case Study | Business Volunteers",
    description: cs ? `${cs.ind} case study: ${cs.challenge} Our strategy delivered ${cs.roi} ROI.`.slice(0,160) : "",
    alternates: { canonical: `/case-studies/${params.slug}/` },
    openGraph: { type: "article", title: cs?.title, url: `${BASE}/case-studies/${params.slug}/` },
  };
}
export default function Page({ params }){
  const cs = getCaseStudyBySlug(params.slug);
  if(!cs) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: cs.title,
        description: `${cs.ind} case study delivering ${cs.roi} ROI.`,
        author: { "@type": "Organization", name: "Business Volunteers" },
        publisher: { "@id": `${BASE}/#org` }, mainEntityOfPage: `${BASE}/case-studies/${params.slug}/`,
        articleSection: cs.ind },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${BASE}/case-studies/` },
        { "@type": "ListItem", position: 3, name: cs.title, item: `${BASE}/case-studies/${params.slug}/` },
      ]},
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <CaseStudyArticlePageRoute cs={cs} />
  </>);
}
