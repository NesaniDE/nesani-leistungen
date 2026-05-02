import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ArrowUpRightIcon } from "@/components/icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Sechs Leistungen, mit denen Ihr Unternehmen sichtbarer, effizienter und autonomer wird – Websites, KI-Workflows, autonome Agenten, Social Media, KI-Assistenten und Systemarchitektur.",
};

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white text-[#050505] pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/60">
              Leistungen
            </div>
            <h1 className="mt-4 font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.03] tracking-[-0.02em] max-w-[18ch]">
              Sichtbarer. Effizienter. Autonomer.
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-[#050505]/80 max-w-[58ch]">
              Sechs Module, die für sich greifen – und im Zusammenspiel den
              größten Hebel entfalten. Von der Website bis zur eigenen
              Architektur, alles aus einer Hand.
            </p>
          </div>
        </section>

        <section className="bg-white text-[#050505] pb-16 md:pb-24 lg:pb-32">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/leistungen/${service.slug}`}
                  className="group rounded-2xl md:rounded-3xl border border-black/10 bg-white overflow-hidden hover:border-black/40 transition flex flex-col"
                >
                  <div className="relative aspect-[16/9] bg-[#F5F2EB] overflow-hidden">
                    <Image
                      src={service.hero.image}
                      alt={service.hero.imageAlt}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                    <h2 className="font-sans font-semibold text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.01em]">
                      {service.navName}
                    </h2>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/75 max-w-[44ch]">
                      {service.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#050505] group-hover:gap-2 transition-all">
                      Details ansehen
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
