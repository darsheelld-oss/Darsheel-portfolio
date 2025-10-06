import { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

const placeholderThumbnails = [
  { id: 1, title: 'Minecraft Adventure', color: 'from-green-400 to-emerald-600' },
  { id: 2, title: 'Epic PvP Battle', color: 'from-red-400 to-rose-600' },
  { id: 3, title: 'Building Challenge', color: 'from-blue-400 to-cyan-600' },
  { id: 4, title: 'Survival Series', color: 'from-amber-400 to-orange-600' },
  { id: 5, title: 'Modded Gameplay', color: 'from-purple-400 to-pink-600' },
  { id: 6, title: 'Redstone Tutorial', color: 'from-slate-400 to-gray-600' },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 text-center">
            My Work
          </h2>
          <p className="text-xl text-slate-600 mb-16 text-center">
            More projects coming soon
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderThumbnails.map((thumbnail) => (
              <div
                key={thumbnail.id}
                onClick={() => setSelectedImage(thumbnail.id)}
                className="group relative aspect-video bg-gradient-to-br rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${thumbnail.color} opacity-90`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">{thumbnail.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <ImageIcon className="w-24 h-24 mx-auto mb-6 opacity-60" />
              <p className="text-2xl font-semibold">
                {placeholderThumbnails.find(t => t.id === selectedImage)?.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
