import { articles } from '@/data/blogData';
import ArticleCard from '@/components/ArticleCard';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'articles' | 'authors';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featured = articles.find(a => a.featured);
  const recent = articles.filter(a => !a.featured).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/a0e31265-06a4-45ca-b9b1-285181e9c15c/files/7a0cfdef-a01c-4adb-bf91-b1f41d85677d.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_20%_6%/0.5)] via-[hsl(220_20%_6%/0.7)] to-[hsl(220_20%_6%)]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-up">
            <p className="font-golos text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-6 opacity-80">
              Независимый журнал
            </p>
          </div>
          <div className="animate-fade-up-delay-1">
            <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-white mb-6 max-w-4xl mx-auto">
              Человек в современном изменяющемся мире
            </h1>
          </div>
          <div className="animate-fade-up-delay-2">
            <p className="font-golos text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
              О том, как меняется общество, технологии и ценности — и как найти себя в этом потоке перемен.
            </p>
          </div>
          <div className="animate-fade-up-delay-3 flex items-center justify-center gap-6">
            <button
              onClick={() => onNavigate('articles')}
              className="px-8 py-3 bg-[var(--gold)] text-[hsl(220_20%_6%)] font-golos text-sm tracking-widest uppercase font-semibold hover:bg-[var(--gold-dim)] transition-colors duration-300"
            >
              Читать статьи
            </button>
            <button
              onClick={() => onNavigate('authors')}
              className="flex items-center gap-2 text-white/50 font-golos text-sm tracking-widest uppercase hover:text-white transition-colors"
            >
              Авторы <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-white/30" />
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[hsl(220_15%_18%)] bg-card">
        <div className="container mx-auto px-6 py-6 grid grid-cols-3 divide-x divide-[hsl(220_15%_18%)]">
          {[
            { num: '6', label: 'Авторов' },
            { num: '200+', label: 'Статей' },
            { num: '12k', label: 'Читателей' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 text-center">
              <p className="font-cormorant text-3xl md:text-4xl font-light text-gold">{stat.num}</p>
              <p className="font-golos text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="container mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-golos text-xs tracking-widest uppercase text-muted-foreground">Главное</span>
            <div className="flex-1 h-px bg-[hsl(220_15%_18%)] shimmer-line" />
          </div>
          <ArticleCard article={featured} featured />
        </section>
      )}

      {/* Recent articles */}
      <section className="container mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="font-golos text-xs tracking-widest uppercase text-muted-foreground">Свежее</span>
            <div className="w-16 h-px bg-[hsl(220_15%_18%)]" />
          </div>
          <button
            onClick={() => onNavigate('articles')}
            className="font-golos text-xs tracking-widest uppercase text-[var(--gold)] hover:text-[var(--gold-dim)] transition-colors flex items-center gap-2"
          >
            Все статьи <Icon name="ArrowRight" size={12} />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recent.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}