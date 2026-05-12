import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import { Metadata } from 'next';
import content from '@/config/content';

export const metadata: Metadata = {
  title: content.metadata.bundles.title,
  description: content.metadata.bundles.description,
};

export default function BundlesPage() {
  const { bundles } = content;

  return (
    <main className="min-h-screen bg-background">
      <UrgentBanner />
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-porto-blue text-center mb-4">{bundles.title}</h1>
        <p className="text-center text-foreground font-sans max-w-2xl mx-auto mb-12 italic">
          {bundles.subtitle}
        </p>

        <div className="bg-white border-l-4 border-terracotta p-6 mb-16 text-center shadow-sm">
          <p className="text-lg font-serif text-porto-blue font-bold uppercase tracking-widest">
            {bundles.constraint.title}
          </p>
          <p className="text-sm text-foreground/60 font-sans mt-1">
            {bundles.constraint.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.list.map((bundle) => (
            <div key={bundle.id} className="bg-white border border-black/5 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={bundle.image} 
                  alt={bundle.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <h2 className="text-2xl font-serif text-porto-blue">{bundle.name}</h2>
                    <span className="text-xl font-sans font-bold text-terracotta">€{bundle.price}</span>
                  </div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta/60">{bundle.subtitle}</p>
                </div>
                
                <p className="text-foreground/80 font-sans mb-4 text-sm leading-relaxed">{bundle.description}</p>
                <p className="text-[10px] font-sans italic text-foreground/40 mb-6">Vibe: {bundle.vibe}</p>
                
                <div className="mb-8 flex-grow">
                  <h3 className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/20 mb-4 border-b pb-2">Includes:</h3>
                  <ul className="space-y-2">
                    {bundle.items.map((item, i) => (
                      <li key={i} className="text-sm font-sans text-foreground/70 flex items-start gap-2">
                        <span className="text-terracotta mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/checkout?bundle=${bundle.id}`}
                  className="block w-full bg-terracotta text-white text-center py-4 font-sans font-bold hover:bg-porto-blue transition-all uppercase tracking-widest text-sm shadow-md"
                >
                  Pick This Bundle
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
