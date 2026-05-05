import { authors, articles } from '@/data/blogData';
import Icon from '@/components/ui/icon';

export default function AuthorsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-20 animate-fade-up">
          <p className="font-golos text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Команда</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light leading-none mb-6">
            Авторы
          </h1>
          <p className="font-golos text-muted-foreground max-w-xl">
            Исследователи, журналисты и мыслители — те, кто пытается понять, что значит быть человеком сегодня.
          </p>
        </div>

        {/* Authors list */}
        <div className="space-y-0">
          {authors.map((author, idx) => {
            const authorArticles = articles.filter(a => a.authorId === author.id);
            return (
              <div
                key={author.id}
                className="group border-t border-[hsl(220_15%_18%)] py-10 md:py-12 hover:bg-card/50 transition-colors duration-300 cursor-pointer"
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-start">

                  {/* Number + avatar */}
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3 md:w-20">
                    <span className="font-cormorant text-4xl font-light text-[hsl(220_15%_22%)] group-hover:text-[var(--gold)] transition-colors duration-500 w-8 text-center">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-[hsl(220_15%_18%)] group-hover:border-[var(--gold-dim)] transition-colors duration-300">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-cormorant text-2xl md:text-3xl font-light group-hover:text-[var(--gold)] transition-colors duration-300">
                        {author.name}
                      </h2>
                      <span className="hidden md:inline-block px-2 py-0.5 border border-[hsl(220_15%_22%)] font-golos text-xs tracking-widest uppercase text-muted-foreground">
                        {author.tag}
                      </span>
                    </div>
                    <p className="font-golos text-xs tracking-widest uppercase text-[var(--gold)] opacity-70 mb-3">
                      {author.role}
                    </p>
                    <p className="font-golos text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {author.bio}
                    </p>

                    {/* Recent article */}
                    {authorArticles[0] && (
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/50 font-golos">
                        <Icon name="FileText" size={11} />
                        <span className="italic">{authorArticles[0].title}</span>
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex flex-col items-end gap-2 pt-1">
                    <div className="text-right">
                      <p className="font-cormorant text-3xl font-light text-gold">{author.articles}</p>
                      <p className="font-golos text-xs tracking-widest uppercase text-muted-foreground">статей</p>
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon name="ArrowUpRight" size={16} className="text-[var(--gold)]" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
          <div className="border-t border-[hsl(220_15%_18%)]" />
        </div>

        {/* Join CTA */}
        <div className="mt-20 p-10 md:p-14 border border-[hsl(220_15%_18%)] bg-card text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--gold)]/3 to-transparent" />
          <div className="relative z-10">
            <p className="font-golos text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Присоединяйтесь</p>
            <h3 className="font-cormorant text-3xl md:text-5xl font-light mb-4">
              Хотите писать для нас?
            </h3>
            <p className="font-golos text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
              Мы открыты для авторов, которые пишут медленно и думают долго. Расскажите нам о своей теме.
            </p>
            <button className="px-8 py-3 bg-[var(--gold)] text-[hsl(220_20%_6%)] font-golos text-sm tracking-widest uppercase font-semibold hover:bg-[var(--gold-dim)] transition-colors duration-300">
              Написать нам
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}