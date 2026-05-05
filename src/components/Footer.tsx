type Page = 'home' | 'articles' | 'authors';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[hsl(220_15%_18%)] bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-cormorant text-xl font-bold text-gold mb-3 leading-tight">Человек в современном изменяющемся мире</p>
            <p className="font-golos text-sm text-muted-foreground leading-relaxed">
              Независимый журнал о культуре, технологиях и смыслах. Выходим нерегулярно — только когда есть что сказать.
            </p>
          </div>
          <div>
            <p className="font-golos text-xs tracking-widest uppercase text-muted-foreground mb-4">Разделы</p>
            <div className="flex flex-col gap-2">
              {[
                { id: 'home' as Page, label: 'Главная' },
                { id: 'articles' as Page, label: 'Статьи' },
                { id: 'authors' as Page, label: 'Авторы' },
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="font-golos text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors text-left gold-underline w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-golos text-xs tracking-widest uppercase text-muted-foreground mb-4">Подписка</p>
            <p className="font-golos text-sm text-muted-foreground mb-4">
              Новые тексты — в вашей почте. Без спама.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-background border border-[hsl(220_15%_18%)] px-4 py-2 font-golos text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-[var(--gold)] transition-colors"
              />
              <button className="px-4 py-2 bg-[var(--gold)] text-[hsl(220_20%_6%)] font-golos text-xs tracking-widest uppercase font-semibold hover:bg-[var(--gold-dim)] transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[hsl(220_15%_18%)] pt-6 flex items-center justify-between">
          <p className="font-golos text-xs text-muted-foreground/50 tracking-wide">
            © 2026 Meridian
          </p>
          <p className="font-golos text-xs text-muted-foreground/50 tracking-wide">
            Таравитова Полина · 9 Б класс
          </p>
        </div>
      </div>
    </footer>
  );
}