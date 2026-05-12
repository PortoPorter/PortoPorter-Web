import Image from 'next/image';
import content from '@/config/content';

export default function TheProcess() {
  const { process } = content.home;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-20 text-porto-blue">{process.title}</h2>
        <div className="grid md:grid-cols-3 gap-16">
          {process.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-8 relative w-32 h-32 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src={step.icon} 
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-serif mb-4 text-porto-blue font-bold tracking-tight">{step.title}</h3>
              <p className="text-foreground font-sans leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
