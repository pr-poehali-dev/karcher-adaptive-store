import Icon from '@/components/ui/icon';

const timeline = [
  { year: '1935', title: 'Основание компании', desc: 'Альфред Кёрхер основал компанию в Штутгарте и разработал первый бытовой нагреватель.' },
  { year: '1950', title: 'Первая мойка высокого давления', desc: 'Kärcher выпускает первую в Европе горячеструйную мойку высокого давления.' },
  { year: '1984', title: 'Легендарный жёлтый цвет', desc: 'Уникальный жёлтый цвет стал фирменным знаком Kärcher — его видно даже с воздуха.' },
  { year: '2000', title: 'Выход на российский рынок', desc: 'Открытие официального представительства Kärcher в России.' },
  { year: '2024', title: 'Сегодня', desc: 'Более 150 стран, 15 000+ продуктов и миллионы довольных клиентов по всему миру.' },
];

const team = [
  { name: 'Алексей Петров', role: 'Директор по продажам', avatar: '👨‍💼' },
  { name: 'Мария Иванова', role: 'Главный технолог', avatar: '👩‍🔧' },
  { name: 'Дмитрий Сидоров', role: 'Руководитель сервиса', avatar: '👨‍🔧' },
  { name: 'Анна Козлова', role: 'Менеджер по работе с клиентами', avatar: '👩‍💼' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-karcher-dark">
      {/* Hero */}
      <div className="relative py-24 bg-karcher-dark2 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-karcher-yellow/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-3">С 1935 ГОДА</p>
            <h1 className="font-rajdhani font-black text-5xl md:text-6xl text-white mb-6">
              О КОМПАНИИ<br /><span className="text-gradient-yellow">KÄRCHER</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Более 85 лет мы создаём технику, которая делает мир чище. От первой мойки высокого давления до умных роботов-уборщиков — Kärcher всегда на шаг впереди.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-rajdhani font-black text-4xl text-white mb-6">
                НАША <span className="text-gradient-cyan">МИССИЯ</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Kärcher — мировой лидер в производстве техники для уборки. Наша миссия — создавать инновационные продукты, которые помогают людям поддерживать чистоту эффективно, экономично и экологично.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Мы не просто продаём технику — мы обеспечиваем полный цикл обслуживания: от консультации при выборе до профессионального ремонта и обучения персонала.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'Globe', label: '150+ стран', sub: 'Присутствие' },
                  { icon: 'Users', label: '14 000+', sub: 'Сотрудников' },
                  { icon: 'Package', label: '15 000+', sub: 'Продуктов' },
                  { icon: 'Award', label: '500+', sub: 'Патентов' },
                ].map((item, i) => (
                  <div key={i} className="glass p-4 rounded-xl border border-white/5">
                    <Icon name={item.icon as 'Globe'} size={20} className="text-karcher-yellow mb-2" />
                    <div className="font-rajdhani font-black text-xl text-karcher-yellow">{item.label}</div>
                    <div className="text-white/40 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-karcher-yellow/10 rounded-2xl blur-xl scale-95" />
              <img
                src="https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg"
                alt="О компании"
                className="relative rounded-2xl w-full border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-karcher-dark2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">ИСТОРИЯ</p>
            <h2 className="font-rajdhani font-black text-4xl text-white">
              85 ЛЕТ <span className="text-gradient-yellow">ИННОВАЦИЙ</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-karcher-yellow via-karcher-cyan to-transparent hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? '' : 'md:[direction:rtl]'}`}>
                  <div className={`glass p-6 rounded-xl border border-white/5 hover:border-karcher-yellow/30 transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:[direction:ltr]'}`}>
                    <div className="text-karcher-yellow font-rajdhani font-black text-3xl mb-2">{item.year}</div>
                    <h3 className="font-rajdhani font-bold text-white text-xl mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center md:[direction:ltr]">
                    <div className="w-4 h-4 bg-karcher-yellow rounded-full animate-pulse-yellow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-karcher-yellow font-rajdhani tracking-widest text-sm mb-2">ПРОФЕССИОНАЛЫ</p>
            <h2 className="font-rajdhani font-black text-4xl text-white">
              НАША <span className="text-gradient-cyan">КОМАНДА</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass p-6 rounded-xl text-center border border-white/5 hover:border-karcher-yellow/30 transition-all group">
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3 className="font-rajdhani font-bold text-white text-lg mb-1">{member.name}</h3>
                <p className="text-white/40 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-karcher-yellow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-rajdhani font-black text-4xl md:text-5xl text-karcher-dark mb-4">
            ГОТОВЫ НАЧАТЬ СОТРУДНИЧЕСТВО?
          </h2>
          <p className="text-karcher-dark/60 text-lg mb-8">
            Станьте частью экосистемы Kärcher — официальным партнёром или дистрибьютором
          </p>
          <button className="bg-karcher-dark text-karcher-yellow font-rajdhani font-bold px-10 py-4 hover:bg-karcher-dark2 transition-colors tracking-wide text-lg">
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
}
