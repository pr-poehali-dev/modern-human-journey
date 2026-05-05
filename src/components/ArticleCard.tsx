import { Article, authors } from '@/data/blogData';
import Icon from '@/components/ui/icon';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const author = authors.find(a => a.id === article.authorId);

  if (featured) {
    return (
      <div className="relative overflow-hidden group card-hover cursor-pointer border border-[hsl(220_15%_18%)] hover:border-[var(--gold-dim)]">
        <div className={`absolute inset-0 bg-gradient-to-br ${article.coverGradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="relative z-10 p-8 md:p-12 min-h-[420px] flex flex-col justify-end">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 border border-[var(--gold)] text-[var(--gold)] font-golos text-xs tracking-widest uppercase">
              {article.category}
            </span>
          </div>
          <h2 className="font-cormorant text-3xl md:text-5xl font-light text-white leading-tight mb-4 group-hover:text-[var(--gold)] transition-colors duration-500">
            {article.title}
          </h2>
          <p className="font-golos text-sm text-white/60 leading-relaxed mb-6 max-w-2xl line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-6 text-white/40 font-golos text-xs tracking-wider">
            <span>{author?.name}</span>
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={12} />
              {article.readTime}
            </span>
            <span>{article.date}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    );
  }

  return (
    <div className="group card-hover cursor-pointer border border-[hsl(220_15%_18%)] hover:border-[var(--gold-dim)] bg-card overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${article.coverGradient}`} />
      <div className="p-6">
        <span className="font-golos text-xs tracking-widest uppercase text-[var(--gold)] opacity-80">
          {article.category}
        </span>
        <h3 className="font-cormorant text-xl md:text-2xl font-light mt-2 mb-3 leading-tight group-hover:text-[var(--gold)] transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
        <p className="font-golos text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-muted-foreground/60 font-golos text-xs tracking-wide border-t border-[hsl(220_15%_18%)] pt-4">
          <span>{author?.name}</span>
          <span className="flex items-center gap-1">
            <Icon name="Clock" size={11} />
            {article.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}
