import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const products = [
  {
    id: 1,
    name: 'K 7 Premium Full Control',
    category: 'Мойки высокого давления',
    price: 34990,
    oldPrice: 41990,
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/35e972bc-b6ad-46f4-97e9-ab2b174a2f1c.jpg',
    badge: 'Хит продаж',
    badgeColor: 'karcher-yellow',
    pressure: '160 бар',
    power: '3000 Вт',
  },
  {
    id: 2,
    name: 'FC 5 Premium',
    category: 'Роботы-пылесосы',
    price: 24990,
    oldPrice: null,
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg',
    badge: 'Новинка',
    badgeColor: 'karcher-cyan',
    pressure: null,
    power: '900 Вт',
  },
  {
    id: 3,
    name: 'SC 4 EasyFix Premium',
    category: 'Паровые очистители',
    price: 19490,
    oldPrice: 22990,
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/05d6cf7e-de6d-466c-9e39-3a54cb90b1d6.jpg',
    badge: '-15%',
    badgeColor: 'red-500',
    pressure: null,
    power: '2000 Вт',
  },
];

const categories = [
  { id: 'pressure', label: 'Мойки высокого давления', icon: 'Droplets', count: 48 },
  { id: 'vacuum', label: 'Пылесосы', icon: 'Wind', count: 34 },
  { id: 'steam', label: 'Паровые очистители', icon: 'Flame', count: 22 },
  { id: 'pro', label: 'Профессиональные', icon: 'Wrench', count: 67 },
  { id: 'floor', label: 'Поломоечные машины', icon: 'RotateCcw', count: 19 },
  { id: 'parts', label: 'Аксессуары', icon: 'Package', count: 120 },
];

const stats = [
  { value: '85+', label: 'Лет на рынке' },
  { value: '15 000+', label: 'Товаров в каталоге' },
  { value: '50 000+', label: 'Довольных клиентов' },
  { value: '98%', label: 'Рекомендуют нас' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden cyber-grid">
        {/* Background effects */}
        <div className="absolute inset-0 bg-karcher-dark" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-karcher-yellow/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-karcher-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-karcher-cyan/3 rounded-full blur-[150px]" />

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-karcher-cyan/40 to-transparent w-full"
              style={{
                top: `${25 + i * 25}%`,
                animation: `shimmer ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 glass-yellow px-4 py-2 rounded-sm mb-6">
              <div className="w-2 h-2 bg-karcher-yellow rounded-full animate-pulse" />
              <span className="text-karcher-yellow font-rajdhani text-sm tracking-widest">ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР</span>
            </div>

            <h1 className="font-rajdhani font-black text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
              <span className="text-white">МОЩЬ</span><br />
              <span className="text-gradient-yellow">ТЕХНОЛОГИЙ</span><br />
              <span className="text-white">В ВАШИХ РУКАХ</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              Профессиональная техника Kärcher для уборки дома, офиса и производства.
              Гарантия качества с 1935 года.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNav('catalog')}
                className="flex items-center gap-2 bg-karcher-yellow text-karcher-dark font-rajdhani font-bold text-lg px-8 py-4 hover:bg-yellow-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 tracking-wide"
              >
                <Icon name="ShoppingBag" size={20} />
                Каталог товаров
              </button>
              <button
                onClick={() => handleNav('service')}
                className="flex items-center gap-2 border border-karcher-cyan text-karcher-cyan font-rajdhani font-bold text-lg px-8 py-4 hover:bg-karcher-cyan/10 transition-all duration-300 tracking-wide"
              >
                <Icon name="Settings" size={20} />
                Сервис
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12">
              {stats.slice(0, 3).map((stat, i) => (
                <div key={i} className={`transition-all duration-700 delay-${(i + 2) * 100} ${visible ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="font-rajdhani font-black text-3xl text-karcher-yellow">{stat.value}</div>
                  <div className="text-white/40 text-xs tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-karcher-yellow/20 to-karcher-cyan/10 rounded-lg blur-xl scale-95" />
              <img
                src="https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/3fdb0396-4220-4bd0-a6a6-c3022a3e09d3.jpg"
                alt="Kärcher K7"
                className="relative rounded-lg w-full object-cover aspect-square max-w-lg mx-auto border border-karcher-yellow/20"
              />
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-yellow px-4 py-2 rounded-sm border border-karcher-yellow/30">
                <div className="text-karcher-yellow font-rajdhani font-black text-2xl">K7</div>
                <div className="text-white/60 text-xs">Premium</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-cyan px-4 py-2 rounded-sm">
                <div className="text-karcher-cyan font-rajdhani font-bold text-sm">160 бар</div>
                <div className="text-white/40 text-xs">Макс. давление</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs tracking-widest">SCROLL</span>
          <Icon name="ChevronDown" size={20} className="text-karcher-yellow/50" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-karcher-dark2 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-karcher-cyan/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">АССОРТИМЕНТ</p>
              <h2 className="font-rajdhani font-black text-4xl md:text-5xl text-white">
                КАТЕГОРИИ<br /><span className="text-gradient-yellow">ТОВАРОВ</span>
              </h2>
            </div>
            <button
              onClick={() => handleNav('catalog')}
              className="hidden md:flex items-center gap-2 text-karcher-yellow font-rajdhani font-600 hover:gap-4 transition-all"
            >
              Все категории <Icon name="ArrowRight" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => handleNav('catalog')}
                className="glass p-5 rounded-lg hover-glow-cyan group transition-all duration-300 text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 glass-cyan rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon name={cat.icon as any} size={22} className="text-karcher-cyan" />
                </div>
                <p className="text-white/80 text-xs font-golos leading-tight mb-1">{cat.label}</p>
                <p className="text-karcher-yellow font-rajdhani text-sm font-bold">{cat.count} товаров</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-karcher-dark relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-karcher-yellow font-rajdhani tracking-widest text-sm mb-2">РЕКОМЕНДУЕМ</p>
              <h2 className="font-rajdhani font-black text-4xl md:text-5xl text-white">
                ПОПУЛЯРНЫЕ<br /><span className="text-gradient-cyan">МОДЕЛИ</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="glass rounded-xl overflow-hidden group hover-glow-yellow transition-all duration-300 cursor-pointer"
                onClick={() => handleNav('catalog')}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-karcher-dark via-transparent to-transparent" />

                  {/* Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 font-rajdhani font-bold text-sm ${
                    product.badgeColor === 'karcher-yellow' ? 'bg-karcher-yellow text-karcher-dark' :
                    product.badgeColor === 'karcher-cyan' ? 'bg-karcher-cyan text-karcher-dark' :
                    'bg-red-500 text-white'
                  }`}>
                    {product.badge}
                  </div>

                  {/* Quick add */}
                  <button className="absolute top-4 right-4 w-9 h-9 glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-karcher-yellow/20">
                    <Icon name="Heart" size={16} className="text-white" />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-karcher-cyan text-xs font-rajdhani tracking-wide mb-1">{product.category}</p>
                  <h3 className="font-rajdhani font-bold text-white text-xl mb-3">{product.name}</h3>

                  <div className="flex items-center gap-3 mb-4">
                    {product.pressure && (
                      <span className="flex items-center gap-1 text-white/50 text-xs">
                        <Icon name="Droplets" size={12} />
                        {product.pressure}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-white/50 text-xs">
                      <Icon name="Zap" size={12} />
                      {product.power}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-rajdhani font-black text-2xl text-karcher-yellow">
                        {product.price.toLocaleString()} ₽
                      </div>
                      {product.oldPrice && (
                        <div className="text-white/30 text-sm line-through">
                          {product.oldPrice.toLocaleString()} ₽
                        </div>
                      )}
                    </div>
                    <button className="flex items-center gap-2 bg-karcher-yellow text-karcher-dark font-rajdhani font-bold px-4 py-2 hover:bg-yellow-300 transition-colors text-sm">
                      <Icon name="ShoppingCart" size={16} />
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => handleNav('catalog')}
              className="border border-karcher-yellow text-karcher-yellow font-rajdhani font-bold px-10 py-4 hover:bg-karcher-yellow hover:text-karcher-dark transition-all duration-300 tracking-wide"
            >
              Смотреть весь каталог
            </button>
          </div>
        </div>
      </section>

      {/* BANNER PROMO */}
      <section className="py-20 bg-karcher-dark2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-karcher-yellow/20">
            <div className="absolute inset-0 bg-gradient-to-r from-karcher-dark3 via-karcher-dark2 to-karcher-dark3" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-karcher-yellow/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-karcher-cyan/10 rounded-full blur-[80px]" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center p-10 md:p-16">
              <div>
                <p className="text-karcher-yellow font-rajdhani tracking-widest text-sm mb-3">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</p>
                <h2 className="font-rajdhani font-black text-4xl md:text-5xl text-white mb-4">
                  СЕРВИСНОЕ<br />ОБСЛУЖИВАНИЕ<br /><span className="text-gradient-yellow">-20%</span>
                </h2>
                <p className="text-white/60 mb-8">
                  Запишитесь на профессиональное ТО техники Kärcher и получите скидку 20% на все виды работ до конца месяца.
                </p>
                <button
                  onClick={() => handleNav('service')}
                  className="flex items-center gap-2 bg-karcher-yellow text-karcher-dark font-rajdhani font-bold px-8 py-4 hover:bg-yellow-300 transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] tracking-wide"
                >
                  Записаться на сервис
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
              <div className="text-center">
                <img
                  src="https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/05d6cf7e-de6d-466c-9e39-3a54cb90b1d6.jpg"
                  alt="Сервисный центр"
                  className="rounded-xl max-w-sm mx-auto border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-karcher-dark relative">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">НАШИ ПРЕИМУЩЕСТВА</p>
            <h2 className="font-rajdhani font-black text-4xl md:text-5xl text-white">
              ПОЧЕМУ <span className="text-gradient-yellow">KÄRCHER</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', title: 'Официальная гарантия', desc: 'Гарантия производителя на всю технику. Сервис в авторизованных центрах.' },
              { icon: 'Truck', title: 'Быстрая доставка', desc: 'Доставка по всей России от 1 дня. Бесплатно от 5 000 рублей.' },
              { icon: 'CreditCard', title: 'Удобная оплата', desc: 'Банковские карты, рассрочка 0%, наличные. Без скрытых комиссий.' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Персональный менеджер и техническая поддержка в любое время.' },
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-xl border border-white/5 hover:border-karcher-yellow/30 transition-all duration-300 group">
                <div className="w-12 h-12 glass-yellow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-pulse-yellow">
                  <Icon name={item.icon as any} size={22} className="text-karcher-yellow" />
                </div>
                <h3 className="font-rajdhani font-bold text-white text-xl mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-karcher-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-rajdhani font-black text-4xl md:text-5xl text-karcher-dark">{stat.value}</div>
                <div className="text-karcher-dark/60 text-sm mt-1 font-golos">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}