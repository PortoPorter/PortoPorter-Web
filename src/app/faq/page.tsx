import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import { Metadata } from 'next';
import content from '@/config/content';

export const metadata: Metadata = {
  title: content.metadata.faq.title,
  description: content.metadata.faq.description,
};

export default function FAQPage() {
  const { faq } = content;

  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <UrgentBanner />
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-serif text-porto-blue mb-16 text-center">{faq.title}</h1>
        
        <div className="space-y-12">
          {faq.list.map((item, index) => (
            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-serif text-porto-blue mb-4 font-bold">{item.q}</h3>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
