import { useState } from 'react';
import Icon from '@/components/ui/icon';

const reviews = [
  { id: 1, name: 'Александр М.', city: 'Москва', product: 'K 7 Premium Full Control', rating: 5, date: '12 марта 2024', text: 'Отличная мойка! Купил для дачи и автомобиля. Мощность поражает — смывает грязь с первого прохода. Установка заняла 5 минут. Очень доволен покупкой, буду рекомендовать друзьям.', avatar: '👨' },
  { id: 2, name: 'Елена К.', city: 'Санкт-Петербург', product: 'FC 5 Premium', rating: 5, date: '8 марта 2024', text: 'Пользуюсь FC 5 уже 3 месяца. Пол моет идеально, вода не разливается по квартире. Самоочистка работает как часы. Единственный минус — немного шумит, но это рабочий момент.', avatar: '👩' },
  { id: 3, name: 'Дмитрий П.', city: 'Екатеринбург', product: 'SC 4 EasyFix Premium', rating: 4, date: '5 марта 2024', text: 'Паровой очиститель отлично справляется с кухней и ванной. Заметно лучше обычных чистящих средств. Немного долго греется, но результат стоит того.', avatar: '👨‍💼' },
  { id: 4, name: 'Ирина В.', city: 'Новосибирск', product: 'K 5 Compact', rating: 5, date: '1 марта 2024', text: 'Использую для мытья машины раз в неделю. Очень удобная мойка для бытового использования. Компактная, мощная, цена соответствует качеству. Рекомендую!', avatar: '👩‍💼' },
  { id: 5, name: 'Сергей Л.', city: 'Казань', product: 'WD 5 P Premium', rating: 4, date: '25 февраля 2024', text: 'Мощный пылесос для гаража и мастерской. Убирает и сухой мусор, и жидкость. Немного тяжеловат, но для гаража это не критично. В целом доволен.', avatar: '👷' },
  { id: 6, name: 'Наталья Р.', city: 'Краснодар', product: 'K 7 Premium Full Control', rating: 5, date: '20 февраля 2024', text: 'Купили для загородного дома. Моет террасу, забор, садовую мебель — всё блестит. Муж доволен, я в восторге. Качество немецкое, всё чётко.', avatar: '👩' },
];

const ratingStats = { 5: 78, 4: 15, 3: 5, 2: 1, 1: 1 };

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', product: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);

  const filtered = filterRating > 0 ? reviews.filter(r => r.rating === filterRating) : reviews;
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-karcher-dark">
      {/* Header */}
      <div className="bg-karcher-dark2 border-b border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">МНЕНИЯ ПОКУПАТЕЛЕЙ</p>
          <h1 className="font-rajdhani font-black text-5xl text-white">
            ОТЗЫВЫ <span className="text-gradient-yellow">КЛИЕНТОВ</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass rounded-2xl p-8 border border-white/5">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="font-rajdhani font-black text-7xl text-karcher-yellow">{avgRating}</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[1,2,3,4,5].map(s => (
                    <Icon key={s} name="Star" size={18} className={s <= Math.round(Number(avgRating)) ? 'text-karcher-yellow' : 'text-white/20'} />
                  ))}
                </div>
                <div className="text-white/40 text-sm mt-1">{reviews.length} отзывов</div>
              </div>
              <div className="flex-1 space-y-2">
                {Object.entries(ratingStats).reverse().map(([star, pct]) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-white/40 text-xs w-4">{star}</span>
                    <Icon name="Star" size={12} className="text-karcher-yellow/60" />
                    <div className="flex-1 bg-white/5 rounded-full h-2">
                      <div
                        className="h-full bg-karcher-yellow rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-white/30 text-xs w-8">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
            <h3 className="font-rajdhani font-bold text-white text-2xl mb-3">Поделитесь опытом</h3>
            <p className="text-white/50 mb-6">Ваш отзыв помогает другим покупателям сделать правильный выбор</p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-karcher-yellow text-karcher-dark font-rajdhani font-bold px-6 py-3 hover:bg-yellow-300 transition-all w-fit tracking-wide"
            >
              <Icon name="PenSquare" size={18} />
              Написать отзыв
            </button>
            {submitted && (
              <div className="flex items-center gap-2 text-green-400 mt-4 font-rajdhani">
                <Icon name="CheckCircle" size={18} />
                Отзыв отправлен на модерацию
              </div>
            )}
          </div>
        </div>

        {/* Write review form */}
        {showForm && (
          <div className="glass rounded-2xl p-8 mb-10 border border-karcher-yellow/20 animate-fade-in">
            <h3 className="font-rajdhani font-bold text-white text-2xl mb-6">Новый отзыв</h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <input
                required
                placeholder="Ваше имя"
                value={newReview.name}
                onChange={e => setNewReview({...newReview, name: e.target.value})}
                className="bg-karcher-dark3 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none placeholder:text-white/20 font-golos"
              />
              <input
                placeholder="Модель товара"
                value={newReview.product}
                onChange={e => setNewReview({...newReview, product: e.target.value})}
                className="bg-karcher-dark3 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none placeholder:text-white/20 font-golos"
              />
              <div className="md:col-span-2">
                <p className="text-white/40 text-xs mb-2 font-rajdhani tracking-widest">ОЦЕНКА</p>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(s => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setNewReview({...newReview, rating: s})}
                      className="transition-transform hover:scale-125"
                    >
                      <Icon name="Star" size={28} className={s <= newReview.rating ? 'text-karcher-yellow' : 'text-white/20'} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <textarea
                  required
                  placeholder="Поделитесь впечатлениями о товаре..."
                  value={newReview.text}
                  onChange={e => setNewReview({...newReview, text: e.target.value})}
                  rows={4}
                  className="w-full bg-karcher-dark3 border border-white/10 text-white px-4 py-3 rounded-sm focus:border-karcher-yellow outline-none placeholder:text-white/20 font-golos resize-none"
                />
              </div>
              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="bg-karcher-yellow text-karcher-dark font-rajdhani font-bold px-8 py-3 hover:bg-yellow-300 transition-colors tracking-wide">
                  Отправить
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="border border-white/20 text-white/60 font-rajdhani px-6 py-3 hover:border-white/40 transition-colors">
                  Отмена
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setFilterRating(0)}
            className={`font-rajdhani font-bold px-4 py-2 text-sm transition-all ${filterRating === 0 ? 'bg-karcher-yellow text-karcher-dark' : 'glass text-white/60 hover:text-white'}`}
          >
            Все отзывы
          </button>
          {[5,4,3].map(r => (
            <button
              key={r}
              onClick={() => setFilterRating(r)}
              className={`flex items-center gap-1 font-rajdhani font-bold px-4 py-2 text-sm transition-all ${filterRating === r ? 'bg-karcher-yellow text-karcher-dark' : 'glass text-white/60 hover:text-white'}`}
            >
              {r} <Icon name="Star" size={14} />
            </button>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(review => (
            <div key={review.id} className="glass rounded-xl p-6 border border-white/5 hover:border-karcher-cyan/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{review.avatar}</div>
                  <div>
                    <div className="font-rajdhani font-bold text-white">{review.name}</div>
                    <div className="text-white/30 text-xs">{review.city}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <Icon key={s} name="Star" size={14} className={s <= review.rating ? 'text-karcher-yellow' : 'text-white/10'} />
                  ))}
                </div>
              </div>

              <div className="glass-yellow px-3 py-1 rounded-sm mb-3 inline-block">
                <span className="text-karcher-yellow text-xs font-rajdhani">{review.product}</span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-4">"{review.text}"</p>

              <div className="text-white/30 text-xs flex items-center gap-1">
                <Icon name="Calendar" size={12} />
                {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
