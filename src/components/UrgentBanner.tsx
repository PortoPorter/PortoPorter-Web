'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function UrgentBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const now = new Date();
  const currentHour = now.getHours();
  
  let message = "Order by 6:00 PM for delivery tomorrow after 2:00 PM.";
  
  if (currentHour >= 18) {
    message = "Next delivery available after 2:00 PM the day after tomorrow.";
  }

  return (
    <div className="bg-porto-blue text-white py-2 px-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest">
      <Clock size={14} />
      <span>{message}</span>
    </div>
  );
}
