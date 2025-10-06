export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-16 text-center">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed">
                I'm a high school student and graphic designer who creates personalized thumbnails for YouTubers, especially in the Minecraft niche.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                I focus on crafting visually appealing designs that help videos attract more clicks and engagement. Each thumbnail is unique and tailored to match the creator's brand and style.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">My Journey</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-lg font-medium text-slate-900">Started Design Journey</p>
                      <p className="text-slate-600">Discovered passion for graphic design and visual storytelling</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-lg font-medium text-slate-900">Specialized in Gaming Content</p>
                      <p className="text-slate-600">Focused on Minecraft thumbnails and YouTube branding</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 bg-slate-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-lg font-medium text-slate-900">Building Portfolio</p>
                      <p className="text-slate-600">Working with creators to bring their content to life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
