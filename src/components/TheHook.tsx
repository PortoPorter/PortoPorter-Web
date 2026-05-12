import Link from 'next/link';

export default function TheHook() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/hero-porto.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-white">
          The best of Porto, hand-picked and delivered to your Airbnb or Hotel.
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-terracotta font-bold max-w-2xl mx-auto drop-shadow-sm">
          No tourist traps. Just authentic craft. Purely flight-friendly treasures for the discerning traveler.
        </p>
        <Link 
          href="/bundles" 
          className="inline-block bg-terracotta text-white px-10 py-4 rounded-sm font-bold hover:bg-white hover:text-terracotta transition-all uppercase tracking-widest text-sm"
        >
          View Our Bundles
        </Link>
      </div>
    </section>
  );
}
