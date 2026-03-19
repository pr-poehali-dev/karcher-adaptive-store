import { useState } from 'react';
import Icon from '@/components/ui/icon';

const allProducts = [
  { id: 1, name: 'K 7 Premium Full Control', category: 'pressure', price: 34990, oldPrice: 41990, badge: 'Хит', rating: 4.9, reviews: 234, power: '3000 Вт', pressure: '160 бар', flow: '600 л/ч', weight: '15.3 кг', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/8cba5148-e580-48c3-acf8-7d119fdfa1a5.jpg' },
  { id: 2, name: 'K 5 Compact', category: 'pressure', price: 16490, oldPrice: null, badge: null, rating: 4.7, reviews: 189, power: '2000 Вт', pressure: '145 бар', flow: '500 л/ч', weight: '9.8 кг', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/bucket/8693aa7d-2976-403e-a161-64d3aaf54371.jpg' },
  { id: 3, name: 'FC 5 Premium', category: 'floor', price: 24990, oldPrice: null, badge: 'Новинка', rating: 4.8, reviews: 76, power: '900 Вт', pressure: null, flow: null, weight: '4.2 кг', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg' },
  { id: 4, name: 'SC 4 EasyFix Premium', category: 'steam', price: 19490, oldPrice: 22990, badge: '-15%', rating: 4.6, reviews: 145, power: '2000 Вт', pressure: null, flow: null, weight: '3.9 кг', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/05d6cf7e-de6d-466c-9e39-3a54cb90b1d6.jpg' },
  { id: 5, name: 'WD 5 P Premium', category: 'vacuum', price: 12990, oldPrice: null, badge: null, rating: 4.5, reviews: 312, power: '1100 Вт', pressure: null, flow: null, weight: '7.1 кг', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg' },
  { id: 6, name: 'HD 5/15 CX', category: 'pro', price: 89990, oldPrice: null, badge: 'Проф.', rating: 5.0, reviews: 43, power: '2800 Вт', pressure: '150 бар', flow: '900 л/ч', weight: '31 кг', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/92a22fbf-0ff6-4ba0-955c-e79c8e541dc0.jpg' },
];

const categoryFilters = [
  { id: 'all', label: 'Все товары' },
  { id: 'pressure', label: 'Мойки высокого давления' },
  { id: 'vacuum', label: 'Пылесосы' },
  { id: 'steam', label: 'Паровые очистители' },
  { id: 'floor', label: 'Поломоечные машины' },
  { id: 'pro', label: 'Профессиональные' },
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [cartItems, setCartItems] = useState<number[]>([]);

  const filtered = allProducts
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  const addToCart = (id: number) => {
    setCartItems(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  return (
    <div className="min-h-screen pt-20 bg-karcher-dark">
      {/* Header */}
      <div className="bg-karcher-dark2 border-b border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">КАТАЛОГ</p>
          <h1 className="font-rajdhani font-black text-4xl md:text-5xl text-white">
            ТЕХНИКА <span className="text-gradient-yellow">KÄRCHER</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="glass rounded-xl p-6 sticky top-24">
              <h3 className="font-rajdhani font-bold text-white text-lg mb-4 flex items-center gap-2">
                <Icon name="Filter" size={18} className="text-karcher-yellow" />
                Фильтры
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <p className="text-white/40 text-xs tracking-widest mb-3 font-rajdhani">КАТЕГОРИЯ</p>
                <div className="space-y-1">
                  {categoryFilters.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-sm text-sm transition-all duration-200 font-golos ${
                        activeCategory === cat.id
                          ? 'bg-karcher-yellow/10 text-karcher-yellow border-l-2 border-karcher-yellow pl-4'
                          : 'text-white/60 hover:text-white hover:pl-4'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-white/40 text-xs tracking-widest mb-3 font-rajdhani">ЦЕНА, ₽</p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="От"
                    className="w-full bg-karcher-dark3 border border-white/10 text-white text-sm px-3 py-2 rounded-sm focus:border-karcher-yellow outline-none"
                    onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                  />
                  <input
                    type="number"
                    placeholder="До"
                    className="w-full bg-karcher-dark3 border border-white/10 text-white text-sm px-3 py-2 rounded-sm focus:border-karcher-yellow outline-none"
                    onChange={e => setPriceRange([priceRange[0], Number(e.target.value) || 100000])}
                  />
                </div>
              </div>

              <button className="w-full bg-karcher-yellow text-karcher-dark font-rajdhani font-bold py-2.5 hover:bg-yellow-300 transition-colors text-sm tracking-wide">
                Применить
              </button>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-white/50 text-sm font-golos">
                Найдено: <span className="text-white font-bold">{filtered.length}</span> товаров
              </p>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-sm">Сортировка:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-karcher-dark2 border border-white/10 text-white text-sm px-4 py-2 rounded-sm focus:border-karcher-yellow outline-none cursor-pointer"
                >
                  <option value="popular">По популярности</option>
                  <option value="price-asc">Цена: по возрастанию</option>
                  <option value="price-desc">Цена: по убыванию</option>
                  <option value="rating">По рейтингу</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product, idx) => (
                <div
                  key={product.id}
                  className="group relative bg-karcher-dark2 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-karcher-yellow/40 hover:shadow-[0_0_40px_rgba(255,215,0,0.08)] hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {/* Image block */}
                  <div className="relative h-56 overflow-hidden bg-karcher-dark3">
                    <div className="absolute inset-0 bg-gradient-to-br from-karcher-yellow/5 to-karcher-cyan/5" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Top gradient fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-karcher-dark2 via-transparent to-transparent" />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 font-rajdhani font-black text-xs tracking-widest px-3 py-1.5 bg-karcher-yellow text-karcher-dark rounded-sm shadow-[0_0_12px_rgba(255,215,0,0.6)]">
                        {product.badge}
                      </div>
                    )}

                    {/* Wishlist */}
                    <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500/20 hover:border-red-500/40">
                      <Icon name="Heart" size={15} className="text-white/70" />
                    </button>

                    {/* Rating pill */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-karcher-yellow/20 px-2.5 py-1 rounded-full">
                      <Icon name="Star" size={11} className="text-karcher-yellow fill-karcher-yellow" />
                      <span className="text-karcher-yellow font-rajdhani font-bold text-sm">{product.rating}</span>
                      <span className="text-white/30 text-xs">·{product.reviews}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="font-rajdhani font-bold text-white text-xl leading-tight mb-3 group-hover:text-karcher-yellow transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.pressure && (
                        <div className="flex items-center gap-2 bg-karcher-yellow/5 border border-karcher-yellow/15 rounded-lg px-3 py-2">
                          <Icon name="Gauge" size={13} className="text-karcher-yellow flex-shrink-0" />
                          <div>
                            <div className="text-karcher-yellow font-rajdhani font-bold text-sm leading-none">{product.pressure}</div>
                            <div className="text-white/30 text-[10px] mt-0.5">давление</div>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2 bg-karcher-cyan/5 border border-karcher-cyan/15 rounded-lg px-3 py-2">
                        <Icon name="Zap" size={13} className="text-karcher-cyan flex-shrink-0" />
                        <div>
                          <div className="text-karcher-cyan font-rajdhani font-bold text-sm leading-none">{product.power}</div>
                          <div className="text-white/30 text-[10px] mt-0.5">мощность</div>
                        </div>
                      </div>
                      {(product as { flow?: string | null }).flow && (
                        <div className="flex items-center gap-2 bg-white/3 border border-white/8 rounded-lg px-3 py-2">
                          <Icon name="Droplets" size={13} className="text-blue-400 flex-shrink-0" />
                          <div>
                            <div className="text-white/80 font-rajdhani font-bold text-sm leading-none">{(product as { flow?: string | null }).flow}</div>
                            <div className="text-white/30 text-[10px] mt-0.5">расход</div>
                          </div>
                        </div>
                      )}
                      {(product as { weight?: string | null }).weight && (
                        <div className="flex items-center gap-2 bg-white/3 border border-white/8 rounded-lg px-3 py-2">
                          <Icon name="Weight" size={13} className="text-white/40 flex-shrink-0" />
                          <div>
                            <div className="text-white/80 font-rajdhani font-bold text-sm leading-none">{(product as { weight?: string | null }).weight}</div>
                            <div className="text-white/30 text-[10px] mt-0.5">вес</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-4" />

                    {/* Price + CTA */}
                    <div className="flex items-end justify-between">
                      <div>
                        {product.oldPrice && (
                          <div className="text-white/25 text-xs line-through font-golos mb-0.5">
                            {product.oldPrice.toLocaleString()} ₽
                          </div>
                        )}
                        <div className="font-rajdhani font-black text-2xl text-karcher-yellow leading-none">
                          {product.price.toLocaleString()} <span className="text-lg">₽</span>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        className={`flex items-center gap-2 font-rajdhani font-bold px-5 py-2.5 text-sm rounded-lg transition-all duration-300 ${
                          cartItems.includes(product.id)
                            ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                            : 'bg-karcher-yellow text-karcher-dark hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105'
                        }`}
                      >
                        <Icon name={cartItems.includes(product.id) ? "Check" : "ShoppingCart"} size={15} />
                        {cartItems.includes(product.id) ? 'В корзине' : 'В корзину'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}