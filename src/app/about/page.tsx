import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Philosophy",
  description: "Learn about Porto Porter's personal shopper philosophy. We curate authentic Porto artisan crafts for luxury travelers.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <UrgentBanner />
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-porto-blue mb-12 text-center">The Personal Shopper Philosophy</h1>
        
        <div className="bg-white p-10 md:p-16 shadow-sm border border-gray-50 font-sans leading-loose text-gray-700 space-y-8">
          <p className="text-xl md:text-2xl font-serif italic text-porto-blue leading-relaxed">
            "In a city as rich in heritage as Porto, it's easy to get lost in the noise of mass-produced souvenirs."
          </p>
          
          <p>
            At Porto Porter, we act as your personal curator and concierge. We bypass the tourist traps to find the authentic heartbeat of the city—the artisan workshops, the family-owned studios, and the master craftspeople who define Portuguese culture.
          </p>
          
          <p>
            Our mission is simple: to bring the true soul of Porto directly to your door, allowing you to spend your time experiencing the city while we handle the discovery and delivery of its finest treasures. Minimalist, premium, and 100% flight-friendly.
          </p>
          
          <div className="pt-10 flex justify-center">
            <Link 
              href="/bundles" 
              className="inline-block bg-porto-blue text-white px-10 py-4 rounded-sm font-bold hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
            >
              Explore Our Curation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
