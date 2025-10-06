export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-bold mb-4">Darsheel D</p>
          <p className="text-slate-400 mb-8">
            Graphic Designer for YouTubers
          </p>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              {currentYear} Darsheel D. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
