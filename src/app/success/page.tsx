'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import { CheckCircle, FileText } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const bundleId = searchParams.get('bundle');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate generation delay
    setTimeout(() => {
      setIsDownloading(false);
      alert('Mock PDF "Order_Summary_' + orderId + '.pdf" has been generated and sent to your email. (Simulated Download)');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center">
      <div className="flex justify-center mb-8">
        <CheckCircle className="w-20 h-20 text-terracotta animate-pulse" />
      </div>
      <h1 className="text-4xl font-serif text-porto-blue mb-4">Obrigado!</h1>
      <p className="text-xl text-foreground/60 font-sans mb-8 italic">Your order has been placed successfully.</p>
      
      <div className="bg-white border border-black/5 p-8 rounded-sm shadow-sm text-left mb-10">
        <h2 className="text-[10px] font-sans font-bold uppercase tracking-widest text-terracotta mb-6 border-b border-background pb-2 flex items-center justify-between">
          Order Details
          <span className="text-porto-blue">#PP-{orderId}</span>
        </h2>
        <div className="space-y-4 font-sans text-sm">
          <div className="flex justify-between">
            <span className="text-foreground/40 uppercase tracking-widest text-[10px] font-bold">Bundle</span>
            <span className="font-bold capitalize text-porto-blue">{bundleId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground/40 uppercase tracking-widest text-[10px] font-bold">Delivery Status</span>
            <span className="text-terracotta font-bold">Scheduled for Tomorrow</span>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleDownload}
            className="flex-1 border border-porto-blue text-porto-blue py-3 px-4 font-sans font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-porto-blue hover:text-white transition-all disabled:opacity-50"
            disabled={isDownloading}
          >
            {isDownloading ? 'Generating...' : (
              <>
                <FileText size={16} />
                Download Order Summary (PDF)
              </>
            )}
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-background">
          <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/30 italic">
            "Official AT-Certified Invoice will be sent via email within 24 - 72 hours of delivery."
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-sans text-foreground/40 text-sm mb-6">
          An email confirmation with your order summary has been sent to your inbox.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-terracotta text-white px-8 py-4 font-sans font-bold uppercase tracking-widest text-[10px] hover:bg-porto-blue transition-all shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentBanner />
      <Navbar />
      <Suspense fallback={<div className="flex justify-center py-20 font-serif text-porto-blue">Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
