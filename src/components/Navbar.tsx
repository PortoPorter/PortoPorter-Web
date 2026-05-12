import Link from 'next/link';
import Image from 'next/image';
import content from '@/config/content';

export default function Navbar() {
  const { site } = content;

  return (
    <nav className="py-6 px-6 max-w-6xl mx-auto flex justify-between items-center bg-transparent">
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src={site.logo} 
          alt={`${site.name} Logo`} 
          width={40} 
          height={40} 
          className="rounded-full"
        />
        <span className="text-2xl font-serif font-bold text-porto-blue tracking-tight">
          {site.name.toUpperCase()}
        </span>
      </Link>
      <div className="space-x-8 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-porto-blue">
        <Link href="/bundles" className="hover:text-terracotta transition-colors">Bundles</Link>
        <Link href="/about" className="hover:text-terracotta transition-colors">Philosophy</Link>
        <Link href="/faq" className="hover:text-terracotta transition-colors">FAQ</Link>
      </div>
    </nav>
  );
}
