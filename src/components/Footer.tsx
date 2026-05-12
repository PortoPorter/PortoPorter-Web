import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-20 bg-porto-blue text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <Image 
              src="/assets/images/logo.jpeg" 
              alt="Porto Porter Logo" 
              width={30} 
              height={30} 
              className="rounded-full brightness-0 invert"
            />
            <h4 className="text-xl font-serif uppercase tracking-tight font-bold">PORTO PORTER</h4>
          </div>
          <p className="text-blue-100 font-sans leading-relaxed text-xs">
            We act as your personal curator and concierge, bypassing the tourist traps 
            to find the authentic heartbeat of Porto. Minimalist, premium, and 100% flight-friendly.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-sans font-bold uppercase mb-6 tracking-widest text-terracotta">Information</h4>
          <ul className="space-y-3 font-sans text-blue-100 text-sm">
            <li><Link href="/bundles" className="hover:text-white transition-colors">The Bundles</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Philosophy</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Delivery FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-sans font-bold uppercase mb-6 tracking-widest text-terracotta">Contact</h4>
          <p className="text-blue-100 font-sans text-sm leading-loose">
            Email: hello@portoporter.com<br />
            WhatsApp: +351 912 345 678<br />
            <span className="italic mt-4 block text-blue-200 text-xs">
              Official AT-Certified Invoice will be sent via email within 24 - 72 hours of delivery.
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-[10px] text-blue-300 font-sans tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Porto Porter. Hand-picked in Porto.
      </div>
    </footer>
  );
}
