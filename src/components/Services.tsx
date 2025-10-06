import { Palette, Zap, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Custom Minecraft Thumbnails',
    description: 'Unique designs tailored to your content and brand identity',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality',
  },
  {
    icon: Sparkles,
    title: 'Unique Designs',
    description: 'Every thumbnail is crafted specifically for your video style',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-center">
            What I Offer
          </h2>
          <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
            I design personalized, high-quality thumbnails tailored to each YouTuber's brand and audience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
