import { useState } from 'react';
import Icon from '@/components/ui/icon';

const allProducts = [
  { id: 1, name: 'K 7 Premium Full Control', category: 'pressure', price: 34990, oldPrice: 41990, badge: 'Хит', rating: 4.9, reviews: 234, power: '3000 Вт', pressure: '160 бар', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/35e972bc-b6ad-46f4-97e9-ab2b174a2f1c.jpg' },
  { id: 2, name: 'K 5 Compact', category: 'pressure', price: 16490, oldPrice: null, badge: null, rating: 4.7, reviews: 189, power: '1400 Вт', pressure: '145 бар', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/35e972bc-b6ad-46f4-97e9-ab2b174a2f1c.jpg' },
  { id: 3, name: 'FC 5 Premium', category: 'floor', price: 24990, oldPrice: null, badge: 'Новинка', rating: 4.8, reviews: 76, power: '900 Вт', pressure: null, image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg' },
  { id: 4, name: 'SC 4 EasyFix Premium', category: 'steam', price: 19490, oldPrice: 22990, badge: '-15%', rating: 4.6, reviews: 145, power: '2000 Вт', pressure: null, image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/05d6cf7e-de6d-466c-9e39-3a54cb90b1d6.jpg' },
  { id: 5, name: 'WD 5 P Premium', category: 'vacuum', price: 12990, oldPrice: null, badge: null, rating: 4.5, reviews: 312, power: '1100 Вт', pressure: null, image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg' },
  { id: 6, name: 'HD 5/15 CX', category: 'pro', price: 89990, oldPrice: null, badge: 'Проф.', rating: 5.0, reviews: 43, power: '2800 Вт', pressure: '150 бар', image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/35e972bc-b6ad-46f4-97e9-ab2b174a2f1c.jpg' },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <div key={product.id} className="glass rounded-xl overflow-hidden group hover-glow-yellow transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-karcher-dark via-transparent to-transparent" />

                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-karcher-yellow text-karcher-dark font-rajdhani font-bold text-xs px-2 py-1">
                        {product.badge}
                      </div>
                    )}

                    <button className="absolute top-3 right-3 w-8 h-8 glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="Heart" size={14} className="text-white" />
                    </button>

                    {/* Rating overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 glass-yellow px-2 py-1 rounded-sm">
                      <Icon name="Star" size={12} className="text-karcher-yellow" />
                      <span className="text-karcher-yellow font-rajdhani font-bold text-sm">{product.rating}</span>
                      <span className="text-white/40 text-xs">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-rajdhani font-bold text-white text-lg mb-2 leading-tight">{product.name}</h3>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.pressure && (
                        <span className="glass-yellow px-2 py-0.5 text-xs text-karcher-yellow font-rajdhani">
                          {product.pressure}
                        </span>
                      )}
                      <span className="glass-cyan px-2 py-0.5 text-xs text-karcher-cyan font-rajdhani">
                        {product.power}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-rajdhani font-black text-xl text-karcher-yellow">
                          {product.price.toLocaleString()} ₽
                        </div>
                        {product.oldPrice && (
                          <div className="text-white/30 text-xs line-through">
                            {product.oldPrice.toLocaleString()} ₽
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(product.id)}
                        className={`flex items-center gap-1 font-rajdhani font-bold px-3 py-2 text-sm transition-all ${
                          cartItems.includes(product.id)
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-karcher-yellow text-karcher-dark hover:bg-yellow-300'
                        }`}
                      >
                        <Icon name={cartItems.includes(product.id) ? "Check" : "ShoppingCart"} size={14} />
                        {cartItems.includes(product.id) ? 'В корзине' : 'Купить'}
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
