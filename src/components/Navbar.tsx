import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'service', label: 'Сервис' },
  { id: 'news', label: 'Новости' },
  { id: 'about', label: 'О компании' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
  { id: 'payment', label: 'Оплата и возврат' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center group">
              <img
                src="https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/bucket/073e2a20-0f5e-4800-89ed-64b7f7cda159.jpg"
                alt="Ньюком Тула"
                className="h-10 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-4 py-2 font-rajdhani font-600 text-sm tracking-wide transition-all duration-300 rounded-sm relative group ${
                    currentPage === item.id
                      ? 'text-karcher-yellow'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-karcher-yellow transition-all duration-300 ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 text-white/60 hover:text-karcher-cyan transition-colors">
                <Icon name="Search" size={18} />
              </button>

              <button
                onClick={() => handleNav('cart')}
                className="relative p-2 text-white/70 hover:text-karcher-yellow transition-colors"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-karcher-yellow text-karcher-dark text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => handleNav('contacts')}
                className="hidden sm:flex items-center gap-2 border border-karcher-yellow text-karcher-yellow px-4 py-1.5 font-rajdhani font-600 text-sm tracking-wide hover:bg-karcher-yellow hover:text-karcher-dark transition-all duration-300"
              >
                <Icon name="Phone" size={14} />
                Позвонить
              </button>

              {/* Burger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              >
                <Icon name={menuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-karcher-dark/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 glass border-y border-white/5 transition-all duration-500 ${
          menuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          <div className="py-4 px-4">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3 font-rajdhani font-600 text-lg tracking-wide transition-all duration-300 border-b border-white/5 last:border-0 ${
                  currentPage === item.id
                    ? 'text-karcher-yellow'
                    : 'text-white/70 hover:text-white hover:pl-6'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <a href="tel:+78001234567" className="flex items-center gap-3 text-karcher-cyan font-rajdhani font-600 text-lg">
                <Icon name="Phone" size={20} />
                8 800 123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}