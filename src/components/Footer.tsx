import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-karcher-dark2 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-karcher-yellow to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-karcher-yellow rounded-sm flex items-center justify-center font-rajdhani font-black text-karcher-dark text-lg">
                K
              </div>
              <div>
                <div className="font-rajdhani font-bold text-xl text-white tracking-widest">KÄRCHER</div>
                <div className="text-xs text-karcher-cyan tracking-[0.3em] -mt-1">PROFESSIONAL</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Более 85 лет лидерства в профессиональной и бытовой технике для уборки. Технологии будущего — уже сегодня.
            </p>
            <div className="flex gap-3">
              {['vk', 'youtube', 'telegram'].map((social) => (
                <button
                  key={social}
                  className="w-9 h-9 glass-yellow flex items-center justify-center hover:bg-karcher-yellow/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon name="Link" size={14} className="text-karcher-yellow" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-rajdhani font-bold text-white text-lg tracking-wide mb-4 neon-yellow">Навигация</h4>
            <ul className="space-y-2">
              {[
                { id: 'catalog', label: 'Каталог товаров' },
                { id: 'service', label: 'Сервис Kärcher' },
                { id: 'news', label: 'Новости' },
                { id: 'about', label: 'О компании' },
                { id: 'reviews', label: 'Отзывы' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-white/50 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-rajdhani font-bold text-white text-lg tracking-wide mb-4 neon-yellow">Покупателям</h4>
            <ul className="space-y-2">
              {[
                { id: 'payment', label: 'Оплата и возврат' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'contacts', label: 'Контакты' },
                { id: 'service', label: 'Гарантия' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-white/50 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-rajdhani font-bold text-white text-lg tracking-wide mb-4 neon-yellow">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={16} className="text-karcher-cyan flex-shrink-0" />
                <div>
                  <a href="tel:+78001234567" className="text-white text-sm hover:text-karcher-yellow transition-colors font-rajdhani font-600">
                    8 800 123-45-67
                  </a>
                  <p className="text-white/40 text-xs">Бесплатно по России</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={16} className="text-karcher-cyan flex-shrink-0" />
                <a href="mailto:info@karcher.ru" className="text-white/60 text-sm hover:text-white transition-colors">
                  info@karcher.ru
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={16} className="text-karcher-cyan flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  Москва, ул. Промышленная, 15
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={16} className="text-karcher-cyan flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Пн–Пт: 9:00–18:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Kärcher. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Политика конфиденциальности
            </button>
            <button className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Пользовательское соглашение
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
