import { notFound } from "next/navigation";
import BlogArticlePageRoute from "../../../components/pages/BlogArticlePage";
import { getAllBlogs, getBlogBySlug, slugify, blogMeta } from "../../../lib/data";

const BASE = "https://businessvolunteers.online";

export function generateStaticParams(){
  const seen = new Set(); const out = [];
  for (const b of getAllBlogs()){ const slug = slugify(b.title); if(!seen.has(slug)){ seen.add(slug); out.push({ slug }); } }
  return out;
}
export function generateMetadata({ params }){
  const b = getBlogBySlug(params.slug);
  return {
    title: b ? `${b.title} | Business Volunteers` : "Blog | Business Volunteers",
    description: b?.desc || "",
    alternates: { canonical: `/blog/${params.slug}/` },
    openGraph: { type: "article", title: b?.title, description: b?.desc, url: `${BASE}/blog/${params.slug}/` },
  };
}
export default function Page({ params }){
  const b = getBlogBySlug(params.slug);
  if(!b) notFound();
  const mt = blogMeta(b);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: b.title, description: b.desc || "",
        author: { "@type": "Organization", name: "Business Volunteers" },
        publisher: { "@id": `${BASE}/#org` }, mainEntityOfPage: `${BASE}/blog/${params.slug}/`,
        articleSection: b.tag || "Digital Marketing" },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog/` },
        { "@type": "ListItem", position: 3, name: b.title, item: `${BASE}/blog/${params.slug}/` },
      ]},
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <BlogArticlePageRoute blog={b} />
  </>);
}
