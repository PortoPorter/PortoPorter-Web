'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';

const bundles = {
  gesto: { name: 'The Gesto', price: 50 },
  tradicao: { name: 'The Tradição', price: 100 },
  legado: { name: 'The Legado', price: 200 },
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const bundleId = (searchParams.get('bundle') || 'gesto') as keyof typeof bundles;
  const bundle = bundles[bundleId] || bundles.gesto;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    accommodation: '',
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
    router.push(`/success?orderId=${Math.floor(Math.random() * 100000)}&bundle=${bundleId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-3xl font-serif text-porto-blue mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">Full Name</label>
            <input 
              required
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">Email Address</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">Accommodation Name & Address</label>
            <input 
              required
              type="text" 
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder="Hotel name or Airbnb street address"
            />
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">Google Maps Link</label>
            <input 
              required
              type="url" 
              name="mapsLink"
              value={formData.mapsLink}
              onChange={handleChange}
              className="w-full border-b border-porto-blue/10 bg-transparent py-2 focus:border-terracotta outline-none font-sans transition-colors"
              placeholder="https://maps.google.com/..."
            />
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">Entry Code or Reception Instructions</label>
            <textarea 
              required
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows={3}
              className="w-full border border-porto-blue/10 bg-white/50 p-3 focus:border-terracotta outline-none font-sans resize-none transition-colors"
              placeholder="Instructions for the porter (e.g., door code, leave at reception, etc.)"
            ></textarea>
          </div>

          <div>
            <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-2">Date of Departure</label>
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
            {isSubmitting ? 'Processing...' : `Pay €${bundle.price}`}
          </button>
        </form>
      </div>

      <div className="bg-white p-8 border border-black/5 shadow-sm self-start rounded-sm">
        <h2 className="text-xl font-serif mb-6 text-porto-blue">Order Summary</h2>
        <div className="flex justify-between items-center pb-4 border-b border-background mb-4">
          <span className="font-sans text-foreground/60">{bundle.name} Bundle</span>
          <span className="font-sans font-bold text-porto-blue">€{bundle.price}</span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-background mb-4 text-sm">
          <span className="font-sans text-foreground/60">Delivery (Next Day)</span>
          <span className="font-sans text-terracotta uppercase font-bold tracking-widest text-[10px]">Included</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="font-serif text-lg text-porto-blue">Total</span>
          <span className="font-sans text-2xl font-bold text-terracotta">€{bundle.price}</span>
        </div>
        
        <div className="mt-8 p-4 bg-background/50 text-[10px] text-foreground/60 font-sans leading-relaxed border-l-2 border-terracotta">
          <p className="mb-2 font-bold uppercase tracking-widest text-terracotta">Our Delivery Guarantee</p>
          <p>Orders placed before 6:00 PM are delivered tomorrow after 2:00 PM. We will notify you via WhatsApp once delivered.</p>
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
