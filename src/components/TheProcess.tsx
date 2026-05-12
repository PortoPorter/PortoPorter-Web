import Image from 'next/image';

const steps = [
  {
    icon: "/assets/icons/step-1-pick.png",
    title: "Pick your bundle",
    description: "Choose between our three tiers of curated Porto excellence."
  },
  {
    icon: "/assets/icons/step-2-details.png",
    title: "Provide your details",
    description: "Tell us your accommodation and departure date. We handle the logistics."
  },
  {
    icon: "/assets/icons/step-3-receive.png",
    title: "Receive your gifts",
    description: "Your hand-picked treasures arrive at your door tomorrow after 2:00 PM."
  }
];

export default function TheProcess() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-20 text-porto-blue">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
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
