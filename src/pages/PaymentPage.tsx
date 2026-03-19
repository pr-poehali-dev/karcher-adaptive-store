import Icon from '@/components/ui/icon';

const paymentMethods = [
  { icon: 'CreditCard', title: 'Банковская карта', desc: 'Visa, Mastercard, Мир. Оплата онлайн или при получении.', badge: 'Безопасно' },
  { icon: 'Smartphone', title: 'SBP / СБП', desc: 'Мгновенный перевод через Систему Быстрых Платежей.', badge: 'Без комиссии' },
  { icon: 'Banknote', title: 'Наличные', desc: 'При получении в пункте выдачи или курьеру.', badge: null },
  { icon: 'Building', title: 'Безналичный расчёт', desc: 'Для юридических лиц с НДС. Счёт, накладная, акт.', badge: 'Для бизнеса' },
  { icon: 'Percent', title: 'Рассрочка 0%', desc: 'Рассрочка на 6, 12, 24 месяца через банки-партнёры.', badge: '0%' },
  { icon: 'Wallet', title: 'Электронные кошельки', desc: 'YooMoney, QIWI, WebMoney и другие платёжные системы.', badge: null },
];

const deliveryOptions = [
  { icon: 'Truck', title: 'Курьером', time: '1–3 дня', price: 'от 350 ₽', desc: 'Доставка по Москве, МО и в города России транспортными компаниями.', free: 'Бесплатно от 5 000 ₽' },
  { icon: 'Package', title: 'Пункт выдачи', time: '2–5 дней', price: 'от 150 ₽', desc: 'Сеть пунктов выдачи СДЭК, Boxberry, PickPoint по всей России.', free: 'Бесплатно от 3 000 ₽' },
  { icon: 'ShoppingBag', title: 'Самовывоз', time: 'Сегодня', price: 'Бесплатно', desc: 'Забрать заказ из нашего магазина или сервисного центра.', free: null },
  { icon: 'Plane', title: 'Экспресс-доставка', time: 'В день заказа', price: 'от 990 ₽', desc: 'Доставка в день заказа при оформлении до 12:00 (Москва и МО).', free: null },
];

const returnSteps = [
  { num: '01', title: 'Свяжитесь с нами', desc: 'Позвоните или напишите в службу поддержки. Опишите причину возврата.' },
  { num: '02', title: 'Оформите заявку', desc: 'Мы пришлём форму заявки на возврат. Заполните и отправьте нам.' },
  { num: '03', title: 'Отправьте товар', desc: 'Упакуйте товар и отправьте по нашему адресу или через курьера.' },
  { num: '04', title: 'Получите деньги', desc: 'После проверки товара вернём деньги в течение 3–7 рабочих дней.' },
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen pt-20 bg-karcher-dark">
      {/* Header */}
      <div className="relative py-20 bg-karcher-dark2 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">УСЛОВИЯ ПОКУПКИ</p>
          <h1 className="font-rajdhani font-black text-5xl text-white">
            ОПЛАТА <span className="text-gradient-yellow">&</span> ВОЗВРАТ
          </h1>
        </div>
      </div>

      {/* Payment methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-karcher-yellow font-rajdhani tracking-widest text-sm mb-2">УДОБНО И БЕЗОПАСНО</p>
            <h2 className="font-rajdhani font-black text-4xl text-white">
              СПОСОБЫ <span className="text-gradient-cyan">ОПЛАТЫ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paymentMethods.map((method, i) => (
              <div key={i} className="glass p-6 rounded-xl border border-white/5 hover:border-karcher-yellow/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 glass-yellow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={method.icon as 'CreditCard'} size={22} className="text-karcher-yellow" />
                  </div>
                  {method.badge && (
                    <span className="bg-karcher-yellow text-karcher-dark font-rajdhani font-bold text-xs px-2 py-1">
                      {method.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-rajdhani font-bold text-white text-lg mb-2">{method.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Security note */}
          <div className="mt-8 glass-cyan rounded-xl p-6 flex items-start gap-4">
            <Icon name="Shield" size={24} className="text-karcher-cyan flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-rajdhani font-bold text-white text-lg mb-1">Безопасность платежей</h3>
              <p className="text-white/50 text-sm">
                Все платежи обрабатываются через защищённые шлюзы с использованием протокола SSL. Мы не храним данные банковских карт. Ваши платёжные данные надёжно защищены.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-20 bg-karcher-dark2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">ПОЛУЧЕНИЕ ЗАКАЗА</p>
            <h2 className="font-rajdhani font-black text-4xl text-white">
              ВАРИАНТЫ <span className="text-gradient-yellow">ДОСТАВКИ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deliveryOptions.map((opt, i) => (
              <div key={i} className="glass rounded-xl p-6 border border-white/5 hover:border-karcher-cyan/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass-cyan rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name={opt.icon as 'Truck'} size={22} className="text-karcher-cyan" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-rajdhani font-bold text-white text-xl">{opt.title}</h3>
                      <span className="text-karcher-yellow font-rajdhani font-bold">{opt.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Clock" size={14} className="text-karcher-cyan" />
                      <span className="text-karcher-cyan text-sm font-rajdhani">{opt.time}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{opt.desc}</p>
                    {opt.free && (
                      <div className="mt-3 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-sm">
                        <span className="text-green-400 text-xs font-rajdhani font-bold">{opt.free}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return policy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-karcher-yellow font-rajdhani tracking-widest text-sm mb-2">ВОЗВРАТ ТОВАРА</p>
            <h2 className="font-rajdhani font-black text-4xl text-white">
              КАК ВЕРНУТЬ <span className="text-gradient-cyan">ТОВАР</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-6">
                {returnSteps.map((step, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 glass-yellow rounded-lg flex items-center justify-center font-rajdhani font-black text-karcher-yellow text-lg group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-rajdhani font-bold text-white text-lg mb-1">{step.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-xl p-6 border border-white/5">
                <h3 className="font-rajdhani font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-green-400" />
                  Когда можно вернуть
                </h3>
                <ul className="space-y-2">
                  {[
                    'В течение 14 дней с момента получения',
                    'Товар не использовался',
                    'Сохранены оригинальная упаковка и комплектация',
                    'Есть чек или подтверждение заказа',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <Icon name="Check" size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-xl p-6 border border-white/5">
                <h3 className="font-rajdhani font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <Icon name="AlertCircle" size={20} className="text-red-400" />
                  Исключения из возврата
                </h3>
                <ul className="space-y-2">
                  {[
                    'Техника была в эксплуатации',
                    'Следы механических повреждений',
                    'Нарушена заводская упаковка без акта',
                    'Отсутствуют заводские пломбы',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                      <Icon name="X" size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-yellow rounded-xl p-6">
                <p className="text-karcher-yellow font-rajdhani font-bold text-lg mb-1">Нужна помощь?</p>
                <p className="text-white/60 text-sm mb-4">Наш менеджер поможет оформить возврат в любой ситуации</p>
                <a
                  href="tel:+78001234567"
                  className="flex items-center gap-2 bg-karcher-yellow text-karcher-dark font-rajdhani font-bold px-6 py-3 hover:bg-yellow-300 transition-colors w-fit"
                >
                  <Icon name="Phone" size={18} />
                  8 800 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
