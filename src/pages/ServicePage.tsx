import { useState } from 'react';
import Icon from '@/components/ui/icon';

const services = [
  { icon: 'Wrench', title: 'Техническое обслуживание', desc: 'Плановое ТО и профилактика вашей техники Kärcher по регламенту производителя.', price: 'от 1 500 ₽', time: '1–2 часа' },
  { icon: 'Zap', title: 'Диагностика', desc: 'Профессиональная диагностика неисправностей с помощью фирменного оборудования.', price: 'Бесплатно', time: '30 мин' },
  { icon: 'Settings', title: 'Ремонт', desc: 'Гарантийный и постгарантийный ремонт. Оригинальные запасные части.', price: 'от 2 000 ₽', time: '1–5 дней' },
  { icon: 'Package', title: 'Замена деталей', desc: 'Установка оригинальных деталей и расходных материалов с гарантией.', price: 'по прайсу', time: '1–3 часа' },
  { icon: 'BookOpen', title: 'Обучение', desc: 'Обучение персонала правильной эксплуатации профессионального оборудования.', price: 'от 3 000 ₽', time: '4 часа' },
  { icon: 'Truck', title: 'Выезд мастера', desc: 'Ремонт крупногабаритного оборудования непосредственно на вашем объекте.', price: 'от 2 500 ₽', time: 'по договору' },
];

export default function ServicePage() {
  const [form, setForm] = useState({ name: '', phone: '', device: '', problem: '' });
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
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-karcher-cyan/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-3">ПРОФЕССИОНАЛЬНЫЙ УХОД</p>
          <h1 className="font-rajdhani font-black text-5xl md:text-6xl text-white mb-4">
            СЕРВИСНЫЙ<br /><span className="text-gradient-yellow">ЦЕНТР KÄRCHER</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Авторизованный сервисный центр Kärcher. Квалифицированные мастера, оригинальные запасные части, гарантия на все виды работ.
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: 'Award', label: 'Авторизованный центр', val: 'Kärcher' },
              { icon: 'Clock', label: 'Время работы', val: 'Пн–Сб 9:00–19:00' },
              { icon: 'Shield', label: 'Гарантия на работы', val: 'до 12 месяцев' },
            ].map((item, i) => (
              <div key={i} className="glass-yellow px-4 py-3 rounded-lg flex items-center gap-3">
                <Icon name={item.icon as 'Award'} size={18} className="text-karcher-yellow" />
                <div>
                  <div className="text-white/40 text-xs">{item.label}</div>
                  <div className="text-karcher-yellow font-rajdhani font-bold">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-rajdhani font-black text-4xl text-white mb-2">
              ВИДЫ <span className="text-gradient-cyan">УСЛУГ</span>
            </h2>
            <p className="text-white/50">Комплексный сервис для всех видов техники Kärcher</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="glass rounded-xl p-6 border border-white/5 hover:border-karcher-cyan/30 transition-all duration-300 group hover-glow-cyan">
                <div className="w-12 h-12 glass-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as 'Wrench'} size={22} className="text-karcher-cyan" />
                </div>
                <h3 className="font-rajdhani font-bold text-white text-xl mb-2">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="text-karcher-yellow font-rajdhani font-bold">{service.price}</div>
                    <div className="text-white/30 text-xs">{service.time}</div>
                  </div>
                  <button className="text-karcher-cyan font-rajdhani font-600 text-sm hover:text-white transition-colors flex items-center gap-1">
                    Подробнее <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="py-20 bg-karcher-dark2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-karcher-yellow font-rajdhani tracking-widest text-sm mb-3">ЗАПИСЬ НА СЕРВИС</p>
              <h2 className="font-rajdhani font-black text-4xl text-white mb-4">
                ОСТАВЬТЕ ЗАЯВКУ<br /><span className="text-gradient-cyan">МЫ ПЕРЕЗВОНИМ</span>
              </h2>
              <p className="text-white/50 mb-8">
                Заполните форму и наш специалист свяжется с вами в течение 15 минут для уточнения деталей.
              </p>
              <img
                src="https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/05d6cf7e-de6d-466c-9e39-3a54cb90b1d6.jpg"
                alt="Сервисный центр"
                className="rounded-xl border border-white/10"
              />
            </div>

            <div className="glass rounded-2xl p-8 border border-white/5">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-rajdhani font-bold text-white text-2xl mb-2">Заявка принята!</h3>
                  <p className="text-white/50">Мы перезвоним вам в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">ИМЯ *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Введите ваше имя"
                      className="w-full bg-karcher-dark3 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">ТЕЛЕФОН *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-karcher-dark3 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">МОДЕЛЬ ТЕХНИКИ</label>
                    <input
                      type="text"
                      value={form.device}
                      onChange={e => setForm({...form, device: e.target.value})}
                      placeholder="Например: K 7 Premium"
                      className="w-full bg-karcher-dark3 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs font-rajdhani tracking-widest mb-2 block">ОПИСАНИЕ ПРОБЛЕМЫ</label>
                    <textarea
                      value={form.problem}
                      onChange={e => setForm({...form, problem: e.target.value})}
                      placeholder="Опишите неисправность или необходимые работы..."
                      rows={4}
                      className="w-full bg-karcher-dark3 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none transition-colors placeholder:text-white/20 font-golos resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-karcher-yellow text-karcher-dark font-rajdhani font-bold py-4 hover:bg-yellow-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] tracking-wide text-lg"
                  >
                    Записаться на сервис
                  </button>
                  <p className="text-white/30 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
