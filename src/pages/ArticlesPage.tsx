import { useState } from 'react';
import { articles } from '@/data/blogData';
import ArticleCard from '@/components/ArticleCard';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Культура', 'Технологии', 'Путешествия', 'Искусство', 'Философия', 'Психология'];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'Все' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-6">

        {/* Page header */}
        <div className="mb-16 animate-fade-up">
          <p className="font-golos text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Архив</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light leading-none mb-6">
            Статьи
          </h1>
          <p className="font-golos text-muted-foreground max-w-xl">
            Тексты, которые требуют времени. Читайте тогда, когда мир может подождать.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8 animate-fade-up">
          <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск по статьям..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full md:w-80 bg-card border border-[hsl(220_15%_18%)] focus:border-[var(--gold)] outline-none pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground transition-colors"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-golos text-xs tracking-widest uppercase border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-[var(--gold)] bg-[var(--gold)] text-[hsl(220_20%_6%)]'
                  : 'border-[hsl(220_15%_18%)] text-muted-foreground hover:border-[var(--gold-dim)] hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {filtered.length > 0 ? (
          <>
            {/* Featured if showing all */}
            {activeCategory === 'Все' && !searchQuery && (
              <div className="mb-6">
                <ArticleCard article={articles[0]} featured />
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === 'Все' && !searchQuery ? filtered.slice(1) : filtered).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <Icon name="FileSearch" size={40} className="text-muted-foreground mx-auto mb-4" />
            <p className="font-cormorant text-2xl text-muted-foreground">Статьи не найдены</p>
          </div>
        )}

        {/* Load more */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-[hsl(220_15%_18%)] text-muted-foreground font-golos text-sm tracking-widest uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300">
            Загрузить ещё
          </button>
        </div>
      </div>
    </div>
  );
}
