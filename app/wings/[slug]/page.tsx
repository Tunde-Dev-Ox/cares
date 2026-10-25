import Image from "next/image";
import { BLOCKS, type Block, type Document, type Inline } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HeroPattern } from "@/app/components/hero-pattern";
import { getWingBySlug, type ContentfulAsset } from "@/lib/contentful";

type WingPageProps = {
    params: Promise<{ slug: string }>;
};

const sections = [
    { field: "challenge", heading: "The Challenge" },
    { field: "approach", heading: "Our Approach" },
    { field: "flagshipProgram", heading: "Flagship Programme" },
    { field: "programmes", heading: "Programmes" },
    { field: "keyPartners", heading: "Key Partners" },
    { field: "safeguards", heading: "Safeguards" },
    { field: "change", heading: "The Change We Seek" },
] as const;

export async function generateMetadata({ params }: WingPageProps): Promise<Metadata> {
    const { slug } = await params;
    const wing = await getWingBySlug(slug);

    return {
        title: wing ? `${wing.title} | APC CARES` : "Wing | APC CARES",
        alternates: { canonical: `/wings/${slug}` },
        openGraph: wing ? { title: `${wing.title} | APC CARES`, type: "article" } : undefined,
    };
}

type ContentfulFile = NonNullable<ContentfulAsset["fields"]>["file"];

function renderRichText(document: Document, assets: ContentfulAsset[]) {
    return documentToReactComponents(document, {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
                const target = node.data.target as
                    | { sys?: { id?: string }; fields?: { title?: string; file?: ContentfulFile } }
                    | undefined;
                const assetId = target?.sys?.id;
                const linkedAsset = assets.find((asset) => asset.sys?.id === assetId);
                const file = linkedAsset?.fields?.file ?? target?.fields?.file;
                const url = file?.url;

                if (!url) {
                    return null;
                }

                return (
                    <figure className="my-8">
                        <Image
                            src={url.startsWith("//") ? `https:${url}` : url}
                            alt={linkedAsset?.fields?.title ?? target?.fields?.title ?? ""}
                            width={file.details?.image?.width ?? 1200}
                            height={file.details?.image?.height ?? 800}
                            className="h-auto max-h-140 w-full object-contain"
                        />
                    </figure>
                );
            },
        },
    });
}

export default async function WingPage({ params }: WingPageProps) {
    const { slug } = await params;
    const wing = await getWingBySlug(slug);

    if (!wing) {
        notFound();
    }

    return (
        <main className="overflow-x-hidden bg-[#f7f8f3]">
            <section className="relative overflow-hidden bg-[#0e2726] text-white">
                <HeroPattern />
                <div className="relative mx-auto grid max-w-310 gap-10 px-6 py-14 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] md:items-center md:py-20">
                    <div className="relative z-10 max-w-175">
                        {/* <Link href="/wings" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#d5e3de] hover:text-white">
                            <span aria-hidden="true"><IoMdArrowBack size={24}/></span> All Wings
                        </Link> */}
                        <span className="mb-4 block h-1 w-12 bg-[#de232b]" />
                        <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
                            APC CARES Wing
                        </p>
                        <h1 className="text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.98] text-white">
                            {wing.title.charAt(0).toUpperCase() + wing.title.slice(1)} wing
                        </h1>
                        {wing.heroText && (
                            <div className="mt-6 max-w-145 text-[.9rem] leading-[1.8] text-[#d5e3de] [&_p+p]:mt-3 [&_a]:font-semibold [&_a]:text-white [&_a]:underline">
                                {renderRichText(wing.heroText, wing.assets)}
                            </div>
                        )}
                    </div>
                    {wing.image && (
                        <div className="relative aspect-4/3 overflow-hidden rounded-md border border-white/15">
                            <Image
                                src={wing.image.url}
                                alt={wing.image.description || wing.image.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 42vw"
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </section>

            <div className="mx-auto max-w-225 px-6 py-10 md:py-16">
                {sections.map(({ field, heading }) => {
                    const document = wing[field];
                    if (!document) {
                        return null;
                    }

                    return (
                        <section key={field} className="border-b border-[#c9d8d1] py-8 first:pt-0 last:border-b-0">
                            <h2 className="mb-5 text-2xl font-extrabold text-[#1e4544] md:text-3xl">
                                {heading}
                            </h2>
                            <div className="space-y-4 text-[0.96rem] leading-[1.8] text-[#425b55] [&_blockquote]:border-l-2 [&_blockquote]:border-[#de232b] [&_blockquote]:pl-5 [&_h1]:mb-3 [&_h1]:text-2xl [&_h1]:font-extrabold [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-extrabold [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_hr]:my-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:font-semibold [&_a]:text-[#1e4544] [&_a]:underline">
                                {renderRichText(document, wing.assets)}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}