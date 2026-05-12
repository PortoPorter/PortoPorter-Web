import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Artisan Bundles",
  description: "Explore our curated collection of flight-friendly Porto artisan gifts. From essential ceramics to ultimate legacy collections.",
};

const bundles = [
  {
    id: 'gesto',
    name: 'The Gesto',
    subtitle: 'The Thoughtful Introduction',
    price: 50,
    description: "A curated selection of Porto’s essential artisan crafts. Perfect for those looking to take home a piece of the city's soul without the weight. Minimalist in design, premium in quality.",
    vibe: 'Modern, authentic, essential.',
    image: '/assets/images/craft-ceramics.png',
    items: ['Hand-painted ceramic tile', 'Traditional soap from Claus Porto', 'Artisanal notepad']
  },
  {
    id: 'tradicao',
    name: 'The Tradição',
    subtitle: 'The Heritage Collection',
    price: 100,
    description: "A deeper dive into the textures and traditions of Northern Portugal. This bundle features premium hand-painted ceramics and artisan goods that tell the story of Porto’s enduring craft heritage.",
    vibe: 'Timeless, handcrafted, sophisticated.',
    image: '/assets/images/craft-cork-soap.png',
    items: ['Everything in The Gesto', 'Premium cork wallet', 'Embroidered linen tea towel', 'Local honey (100ml)']
  },
  {
    id: 'legado',
    name: 'The Legado',
    subtitle: 'The Ultimate Legacy',
    price: 200,
    description: "Our most prestigious collection. The Legado represents the pinnacle of Portuguese craftsmanship—heirloom-quality pieces designed to last a lifetime. For the traveler who demands the absolute best of Porto.",
    vibe: 'Exclusive, heirloom, unparalleled.',
    image: '/assets/images/bundle-legado.png',
    items: ['Everything in The Tradição', 'Hand-woven wool scarf', 'Exclusive filigree silver charm', 'Hardcover book on Porto artisanry']
  }
];

export default function BundlesPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentBanner />
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-porto-blue text-center mb-4">Our Curated Bundles</h1>
        <p className="text-center text-foreground font-sans max-w-2xl mx-auto mb-12 italic">
          Purely flight-friendly treasures for the discerning traveler.
        </p>

        <div className="bg-white border-l-4 border-terracotta p-6 mb-16 text-center shadow-sm">
          <p className="text-lg font-serif text-porto-blue font-bold uppercase tracking-widest">
            No Alcohol Included — 100% Flight-Friendly
          </p>
          <p className="text-sm text-foreground/60 font-sans mt-1">
            Safe for carry-on or checked luggage. No liquid restrictions exceeded.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
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
