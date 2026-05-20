import Link from 'next/link';
import Image from 'next/image';
import content from '@/config/content';

export default function Footer() {
  const { footer, site } = content;

  return (
    <footer className="py-20 bg-porto-blue text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <Image 
              src={site.logo} 
              alt={`${site.name} Logo`} 
              width={50} 
              height={50} 
              className="rounded-full brightness-0 invert"
            />
            <h4 className="text-xl font-serif uppercase tracking-tight font-bold">{site.name.toUpperCase()}</h4>
          </div>
          <p className="text-blue-100 font-sans leading-relaxed text-xs">
            {footer.philosophy}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-sans font-bold uppercase mb-6 tracking-widest text-terracotta">{footer.links}</h4>
          <ul className="space-y-3 font-sans text-blue-100 text-sm">
            <li><Link href="/bundles" className="hover:text-white transition-colors">The Bundles</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Philosophy</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Delivery FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-sans font-bold uppercase mb-6 tracking-widest text-terracotta">{footer.contact}</h4>
          <p className="text-blue-100 font-sans text-sm leading-loose">
            Email: {site.email}<br />
            WhatsApp: {site.whatsappNumber}<br />
            <span className="italic mt-4 block text-blue-200 text-xs">
              {footer.legal}
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-[10px] text-blue-300 font-sans tracking-widest uppercase">
        &copy; {new Date().getFullYear()} {site.name}. Hand-picked in Porto.
      </div>
    </footer>
  );
}
