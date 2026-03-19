import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20 bg-karcher-dark">
      {/* Header */}
      <div className="relative py-20 bg-karcher-dark2 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">СВЯЗЬ С НАМИ</p>
          <h1 className="font-rajdhani font-black text-5xl text-white">
            КОНТАКТЫ <span className="text-gradient-yellow">KÄRCHER</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {[
            {
              icon: 'Phone',
              title: 'Телефон',
              value: '8 800 123-45-67',
              sub: 'Бесплатно по России',
              href: 'tel:+78001234567',
              color: 'yellow',
            },
            {
              icon: 'Mail',
              title: 'Email',
              value: 'info@karcher.ru',
              sub: 'Ответим в течение 2 часов',
              href: 'mailto:info@karcher.ru',
              color: 'cyan',
            },
            {
              icon: 'MapPin',
              title: 'Адрес',
              value: 'Москва, ул. Промышленная, 15',
              sub: 'ТЦ ПромТехника, 2 этаж',
              href: '#',
              color: 'yellow',
            },
            {
              icon: 'Clock',
              title: 'Режим работы',
              value: 'Пн–Пт: 9:00–18:00',
              sub: 'Сб: 10:00–16:00',
              href: '#',
              color: 'cyan',
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`glass p-6 rounded-xl border border-white/5 hover:border-${item.color === 'yellow' ? 'karcher-yellow' : 'karcher-cyan'}/30 transition-all duration-300 group block`}
            >
              <div className={`w-12 h-12 ${item.color === 'yellow' ? 'glass-yellow' : 'glass-cyan'} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={item.icon as 'Phone'} size={22} className={item.color === 'yellow' ? 'text-karcher-yellow' : 'text-karcher-cyan'} />
              </div>
              <p className="text-white/40 text-xs font-rajdhani tracking-widest mb-1">{item.title}</p>
              <p className="text-white font-rajdhani font-bold text-lg mb-1">{item.value}</p>
              <p className="text-white/40 text-sm">{item.sub}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-rajdhani font-black text-3xl text-white mb-2">
              НАПИШИТЕ <span className="text-gradient-yellow">НАМ</span>
            </h2>
            <p className="text-white/50 mb-8">Задайте вопрос или оставьте заявку — ответим максимально быстро</p>

            {submitted ? (
              <div className="glass rounded-2xl p-12 text-center border border-green-500/20">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-400" />
                </div>
                <h3 className="font-rajdhani font-bold text-white text-2xl mb-2">Сообщение отправлено!</h3>
                <p className="text-white/50">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">ИМЯ *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Ваше имя"
                      className="w-full bg-karcher-dark2 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">ТЕЛЕФОН</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-karcher-dark2 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">EMAIL *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="your@email.com"
                    className="w-full bg-karcher-dark2 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">ТЕМА</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full bg-karcher-dark2 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors font-golos cursor-pointer"
                  >
                    <option value="">Выберите тему</option>
                    <option value="purchase">Покупка техники</option>
                    <option value="service">Сервисное обслуживание</option>
                    <option value="return">Возврат и обмен</option>
                    <option value="partnership">Партнёрство</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">СООБЩЕНИЕ *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Опишите ваш вопрос подробно..."
                    rows={5}
                    className="w-full bg-karcher-dark2 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-karcher-yellow text-karcher-dark font-rajdhani font-bold py-4 hover:bg-yellow-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] tracking-wide text-lg"
                >
                  Отправить сообщение
                </button>
                <p className="text-white/30 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Offices + Quick contacts */}
          <div>
            <h2 className="font-rajdhani font-black text-3xl text-white mb-8">
              НАШИ <span className="text-gradient-cyan">ОФИСЫ</span>
            </h2>
            <div className="space-y-4 mb-10">
              {[
                { city: 'Москва (Главный офис)', addr: 'ул. Промышленная, 15', phone: '+7 (495) 123-45-67', metro: 'м. Технопарк' },
                { city: 'Санкт-Петербург', addr: 'пр. Обуховской Обороны, 88', phone: '+7 (812) 123-45-67', metro: 'м. Обухово' },
                { city: 'Екатеринбург', addr: 'ул. Машиностроителей, 22', phone: '+7 (343) 123-45-67', metro: null },
              ].map((office, i) => (
                <div key={i} className="glass p-5 rounded-xl border border-white/5 hover:border-karcher-yellow/20 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 glass-yellow rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Building2" size={18} className="text-karcher-yellow" />
                    </div>
                    <div>
                      <h3 className="font-rajdhani font-bold text-white text-lg">{office.city}</h3>
                      <p className="text-white/50 text-sm">{office.addr}</p>
                      {office.metro && <p className="text-karcher-cyan text-xs mt-1">{office.metro}</p>}
                      <a href={`tel:${office.phone}`} className="text-karcher-yellow text-sm font-rajdhani font-600 mt-2 inline-block hover:text-yellow-300 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick contacts */}
            <div className="glass-yellow rounded-xl p-6">
              <h3 className="font-rajdhani font-bold text-karcher-yellow text-xl mb-4">Горячая линия</h3>
              <a href="tel:+78001234567" className="flex items-center gap-3 group mb-3">
                <Icon name="Phone" size={24} className="text-karcher-yellow" />
                <div>
                  <div className="font-rajdhani font-black text-white text-2xl group-hover:text-karcher-yellow transition-colors">8 800 123-45-67</div>
                  <div className="text-white/40 text-xs">Бесплатно по России, Пн–Вс 8:00–22:00</div>
                </div>
              </a>
              <div className="flex gap-3 mt-4">
                <a href="https://t.me/karcher" className="flex items-center gap-2 glass text-white/60 hover:text-white px-4 py-2 rounded-sm text-sm font-rajdhani transition-colors">
                  <Icon name="MessageCircle" size={16} />
                  Telegram
                </a>
                <a href="https://wa.me/78001234567" className="flex items-center gap-2 glass text-white/60 hover:text-white px-4 py-2 rounded-sm text-sm font-rajdhani transition-colors">
                  <Icon name="MessageSquare" size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
