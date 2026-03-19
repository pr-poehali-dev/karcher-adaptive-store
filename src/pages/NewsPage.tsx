import Icon from '@/components/ui/icon';

const news = [
  {
    id: 1,
    title: 'Kärcher представляет новую линейку мощных мойки K 8 Evolution',
    excerpt: 'Революционная технология водяной фильтрации и умное управление через приложение делают K 8 Evolution самой продвинутой моделью в истории компании.',
    date: '15 марта 2024',
    category: 'Новинки',
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/35e972bc-b6ad-46f4-97e9-ab2b174a2f1c.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Расширение сети сервисных центров в 2024 году',
    excerpt: 'Открываем 12 новых авторизованных сервисных центров по всей России — от Калининграда до Владивостока.',
    date: '10 марта 2024',
    category: 'Компания',
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/05d6cf7e-de6d-466c-9e39-3a54cb90b1d6.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Весенняя акция: скидки до 30% на садовую технику',
    excerpt: 'Подготовьтесь к дачному сезону с выгодой — специальные условия на мойки высокого давления и садовые пылесосы.',
    date: '5 марта 2024',
    category: 'Акции',
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'FC 7 CORDLESS — беспроводной уборщик нового поколения',
    excerpt: 'До 35 минут автономной работы, автоматическое дозирование воды и новая система самоочистки.',
    date: '1 марта 2024',
    category: 'Новинки',
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/09baaeda-823f-499d-86ca-faeb8a137d43.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'Kärcher на выставке CleanExpo 2024',
    excerpt: 'Компания Kärcher представила полную линейку профессионального оборудования на крупнейшей клининговой выставке страны.',
    date: '25 февраля 2024',
    category: 'События',
    image: 'https://cdn.poehali.dev/projects/4baf592f-ea8f-439a-80f8-88a961ce45ee/files/35e972bc-b6ad-46f4-97e9-ab2b174a2f1c.jpg',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Новинки': 'bg-karcher-cyan text-karcher-dark',
  'Акции': 'bg-karcher-yellow text-karcher-dark',
  'Компания': 'bg-purple-500 text-white',
  'События': 'bg-green-500 text-white',
};

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-20 bg-karcher-dark">
      {/* Header */}
      <div className="bg-karcher-dark2 border-b border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-karcher-cyan font-rajdhani tracking-widest text-sm mb-2">МЕДИАЦЕНТР</p>
          <h1 className="font-rajdhani font-black text-5xl text-white">
            НОВОСТИ <span className="text-gradient-yellow">KÄRCHER</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured */}
        {news.filter(n => n.featured).map(item => (
          <div key={item.id} className="glass rounded-2xl overflow-hidden mb-10 group cursor-pointer hover-glow-yellow transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-karcher-dark/50" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-rajdhani font-bold text-xs px-3 py-1 ${categoryColors[item.category] || 'bg-gray-500 text-white'}`}>
                    {item.category}
                  </span>
                  <span className="text-white/30 text-sm flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </span>
                </div>
                <h2 className="font-rajdhani font-black text-3xl text-white mb-4 leading-tight">{item.title}</h2>
                <p className="text-white/60 leading-relaxed mb-6">{item.excerpt}</p>
                <button className="self-start flex items-center gap-2 text-karcher-yellow font-rajdhani font-bold hover:gap-4 transition-all">
                  Читать подробнее <Icon name="ArrowRight" size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.filter(n => !n.featured).map((item) => (
            <div key={item.id} className="glass rounded-xl overflow-hidden group cursor-pointer hover-glow-cyan transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-karcher-dark to-transparent" />
                <span className={`absolute top-3 left-3 font-rajdhani font-bold text-xs px-2 py-1 ${categoryColors[item.category] || 'bg-gray-500 text-white'}`}>
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <div className="text-white/30 text-xs flex items-center gap-1 mb-2">
                  <Icon name="Calendar" size={12} />
                  {item.date}
                </div>
                <h3 className="font-rajdhani font-bold text-white text-lg leading-tight mb-2 group-hover:text-karcher-yellow transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="border border-karcher-cyan text-karcher-cyan font-rajdhani font-bold px-10 py-4 hover:bg-karcher-cyan/10 transition-colors tracking-wide">
            Загрузить ещё
          </button>
        </div>
      </div>
    </div>
  );
}
