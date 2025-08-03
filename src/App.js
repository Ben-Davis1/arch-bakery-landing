import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-25 to-amber-50">
      {/* Header with Logo */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/images/arch-logo.jpg" 
                alt="Arch Bakery Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-serif font-bold text-stone-800">Arch Bakery</h1>
                <p className="text-xs text-stone-600">Hand-crafted with care</p>
              </div>
            </div>
            <a
              href="https://instagram.com/archbakeryy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-700 hover:to-amber-900 transition-all transform hover:scale-105 shadow-lg"
            >
              📱 Order Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-100 via-blue-50 to-amber-100 py-20 lg:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="text-center lg:text-left">
                <img 
                  src="/images/arch-logo.jpg" 
                  alt="Arch Bakery Logo" 
                  className="h-16 w-auto mx-auto lg:mx-0 mb-6"
                />
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-stone-800 leading-tight bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent">
                  Arch Bakery
                </h1>
                <p className="text-2xl lg:text-3xl text-stone-700 mt-4 font-medium">
                  Hand‑crafted with care, made to be cherished.
                </p>
                <p className="text-lg lg:text-xl text-stone-600 mt-2">
                  A small‑batch home bakery
                </p>
              </div>
              
              <div className="space-y-6 text-center lg:text-left">
                <a
                  href="https://instagram.com/archbakeryy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl"
                >
                  <span className="text-2xl">📱</span>
                  DM on Instagram to order →
                </a>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-stone-600">
                  <span className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
                    ✨ Made to order
                  </span>
                  <span className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
                    🏠 Small-batch bakery
                  </span>
                  <span className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
                    💖 Artisan quality
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-float">
              {/* Hero image - Melonpan */}
              <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/melonpan.png" 
                  alt="Golden Melonpan with crosshatch pattern" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                Fresh Daily! ✨
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-bold transform -rotate-6 shadow-lg">
                Handmade 🤍
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Here Section */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-8 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              🎯 Why We're Here
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              At Arch Bakery, each creation—whether crispy‑shelled Melonpan or silky Cocostar Cheesecake—is 
              <span className="font-bold text-amber-600"> "made to be cherished."</span> We focus on small‑batch sweetness, mindful ingredients, and visual desserts 
              that taste as enchanting as they look.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-24 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              Featured Menu Items
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Melonpan */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/melonpan.png" 
                  alt="Melonpan - crispy outside, soft inside" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">Melonpan</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Crispy outside, soft inside. A sweet bread you'll fall in love with in one bite!
                </p>
                <a
                  href="https://instagram.com/archbakeryy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-lg group-hover:translate-x-2 transition-all"
                >
                  ⚡ DM to order your Melonpan
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Cocostar Cheesecake */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/cheesecake.png" 
                  alt="Cocostar Cheesecake with strawberries" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">Cocostar Cheesecake</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  A bold twist on an unforgettable classic—rich, creamy coconut takes centre stage.
                </p>
                <a
                  href="https://instagram.com/archbakeryy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-lg group-hover:translate-x-2 transition-all"
                >
                  ⚡ DM to preorder Cocostar
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* The Duchess */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/duchess.png" 
                  alt="The Duchess - elegant dessert with soft cream" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">The Duchess</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Elegant dessert filled with soft cream and fresh … (taste and appearance praised)
                </p>
                <a
                  href="https://instagram.com/archbakeryy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-lg group-hover:translate-x-2 transition-all"
                >
                  ⚡ DM to ask about The Duchess
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Vegan Pistachio Baklava */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/baklava.png" 
                  alt="Vegan pistachio baklava with pistachio garnish" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3">Baklava by Arch</h3>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs px-3 py-1 rounded-full font-bold">100% Plant-Based</span>
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white text-xs px-3 py-1 rounded-full font-bold">Additive-Free</span>
                </div>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  100% plant‑based, additive‑free, irresistibly delicious!
                </p>
                <div className="text-sm text-stone-500 mb-6 italic">
                  Note: some weekends hazelnut baklava appears too.
                </div>
                <a
                  href="https://instagram.com/archbakeryy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-lg group-hover:translate-x-2 transition-all"
                >
                  ⚡ DM to reserve your baklava
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Details & Logistics */}
      <section className="py-24 bg-gradient-to-b from-white to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              Order Details & Logistics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">Ordering</h3>
              <p className="text-stone-600 leading-relaxed">All items are made to order—please DM us on Instagram.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">Delivery & Pickup</h3>
              <p className="text-stone-600 leading-relaxed">Gallery & product details updated weekly.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://instagram.com/archbakeryy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              <span className="text-2xl">📱</span>
              DM on Instagram to order →
            </a>
          </div>
        </div>
      </section>

      {/* Gallery / Instagram Preview */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-serif font-bold text-stone-800 mb-12 bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
            Gallery / Instagram Preview
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img src="/images/gallery1.png" alt="Arch Bakery creations" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img src="/images/gallery2.png" alt="Arch Bakery creations" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img src="/images/gallery3.png" alt="Arch Bakery creations" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img src="/images/gallery4.png" alt="Arch Bakery creations" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <img src="/images/gallery5.png" alt="Arch Bakery creations" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <a
            href="https://instagram.com/archbakeryy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-amber-700 hover:text-amber-800 font-bold text-xl bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span className="text-2xl">📸</span>
            Follow @archbakeryy on Instagram →
          </a>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300">
            <p className="text-2xl text-stone-600 mb-8 font-medium">
              As seen on Instagram—<span className="font-bold text-amber-700">700+ followers</span> · <span className="font-bold text-amber-700">33 posts</span>
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-amber-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-stone-700 font-medium">
              <span className="text-2xl">🏺</span> Hand‑painted ceramics + walnut baklava = weekend favorites. <span className="text-2xl">🥜</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-stone-800 via-stone-900 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img 
                src="/images/arch-logo.jpg" 
                alt="Arch Bakery Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <h3 className="text-3xl font-serif font-bold">Arch Bakery</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <a
                href="https://instagram.com/archbakeryy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-amber-300 hover:text-amber-200 font-bold text-lg bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all"
              >
                <span className="text-xl">📱</span>
                @archbakeryy
              </a>
              <span className="hidden sm:inline text-stone-500">•</span>
              <span className="text-stone-300 font-medium">DM to order</span>
            </div>
            
            <div className="border-t border-stone-700 pt-8">
              <p className="text-stone-400">
                © 2024 Arch Bakery • Hand-crafted with care, made to be cherished
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;