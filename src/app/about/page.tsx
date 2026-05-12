import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import Link from 'next/link';
import { Metadata } from 'next';
import content from '@/config/content';

export const metadata: Metadata = {
  title: content.metadata.about.title,
  description: content.metadata.about.description,
};

export default function AboutPage() {
  const { about } = content;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <UrgentBanner />
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-porto-blue mb-12 text-center">{about.title}</h1>
        
        <div className="bg-white p-10 md:p-16 shadow-sm border border-gray-50 font-sans leading-loose text-gray-700 space-y-8">
          <p className="text-xl md:text-2xl font-serif italic text-porto-blue leading-relaxed">
            "{about.quote}"
          </p>
          
          {about.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          
          <div className="pt-10 flex justify-center">
            <Link 
              href="/bundles" 
              className="inline-block bg-porto-blue text-white px-10 py-4 rounded-sm font-bold hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
            >
              {about.cta}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
