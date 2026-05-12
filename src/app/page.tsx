import Link from 'next/link';
import UrgentBanner from '@/components/UrgentBanner';
import Navbar from '@/components/Navbar';
import TheHook from '@/components/TheHook';
import TheProcess from '@/components/TheProcess';

export default function Home() {
  return (
    <main className="min-h-screen">
      <UrgentBanner />
      <Navbar />
      <TheHook />
      <TheProcess />
    </main>
  );
}
