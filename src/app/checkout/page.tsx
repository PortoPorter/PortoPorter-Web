'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import content from '@/config/content';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { checkout, bundles } = content;
  
  const bundleId = searchParams.get('bundle') || 'gesto';
  const bundle = bundles.list.find(b => b.id === bundleId) || bundles.list[0];
  const deliveryFee = (checkout.summary as any).deliveryFee || 0;
  const totalPrice = bundle.price + deliveryFee;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    mapsLink: '',
    instructions: '',
    departureDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mocking a payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Redirect to success page
    router.push(`/success?orderId=${Math.floor(Math.random() * 100000)}&bundle=${bundleId}&total=${totalPrice}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-3xl font-serif text-porto-blue mb-8">{checkout.title}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">{checkout.form.fullName}</label>
            <input 
              required
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder={checkout.form.fullNamePlaceholder}
            />
          </div>
          
          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">{checkout.form.email}</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder={checkout.form.emailPlaceholder}
            />
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">{checkout.form.location}</label>
            <input 
              required
              type="text" 
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder={checkout.form.locationPlaceholder}
            />
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">{checkout.form.mapsLink}</label>
            <input 
              required
              type="url" 
              name="mapsLink"
              value={formData.mapsLink}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder={checkout.form.mapsLinkPlaceholder}
            />
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">{checkout.form.instructions}</label>
            <textarea 
              required
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows={3}
              className="w-full border border-porto-blue/10 bg-white/50 p-3 focus:border-terracotta outline-none font-sans resize-none transition-colors"
              placeholder={checkout.form.instructionsPlaceholder}
            ></textarea>
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">{checkout.form.departureDate}</label>
            <input 
              required
              type="date" 
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
            />
          </div>

          <button 
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-terracotta text-white py-5 font-sans font-bold uppercase tracking-widest hover:bg-porto-blue transition-all disabled:bg-gray-300 shadow-md"
          >
            {isSubmitting ? 'Processing...' : `${checkout.form.submit} €${totalPrice}`}
          </button>
        </form>
      </div>

      <div className="bg-white p-8 border border-black/5 shadow-sm self-start rounded-sm">
        <h2 className="text-xl font-serif mb-6 text-porto-blue">{checkout.summary.title}</h2>
        <div className="flex justify-between items-center pb-4 border-b border-background mb-4">
          <span className="font-sans text-foreground/60">{bundle.name} Bundle</span>
          <span className="font-sans font-bold text-porto-blue">€{bundle.price}</span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-background mb-4 text-sm">
          <span className="font-sans text-foreground/60">{checkout.summary.deliveryLabel}</span>
          <span className="font-sans text-terracotta uppercase font-bold tracking-widest text-[10px]">{checkout.summary.deliveryValue}</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="font-serif text-lg text-porto-blue">{checkout.summary.totalLabel}</span>
          <span className="font-sans text-2xl font-bold text-terracotta">€{totalPrice}</span>
        </div>
        
        <div className="mt-8 p-4 bg-background/50 text-[10px] text-foreground/60 font-sans leading-relaxed border-l-2 border-terracotta">
          <p className="mb-2 font-bold uppercase tracking-widest text-terracotta">{checkout.summary.guaranteeTitle}</p>
          <p>{checkout.summary.guaranteeText}</p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentBanner />
      <Navbar />
      <Suspense fallback={<div className="flex justify-center py-20 font-serif text-porto-blue">Loading...</div>}>
        <CheckoutContent />
      </Suspense>
    </main>
  );
}
