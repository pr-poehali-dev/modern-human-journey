import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'articles' | 'authors';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links: { id: Page; label: string }[] = [
    { id: 'home', label: 'Главная' },
    { id: 'articles', label: 'Статьи' },
    { id: 'authors', label: 'Авторы' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[hsl(220_20%_6%/0.95)] backdrop-blur-md border-b border-[hsl(220_15%_18%)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="font-cormorant text-lg font-bold text-gold leading-tight text-left max-w-[200px] md:max-w-xs"
        >
          Человек в современном изменяющемся мире
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`font-golos text-sm tracking-widest uppercase transition-all duration-300 gold-underline ${
                currentPage === link.id
                  ? 'text-gold'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="hidden md:flex items-center gap-2 px-5 py-2 border border-[var(--gold)] text-[var(--gold)] font-golos text-sm tracking-widest uppercase hover:bg-[var(--gold)] hover:text-[hsl(220_20%_6%)] transition-all duration-300"
          onClick={() => onNavigate('articles')}
        >
          Читать
        </button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(220_18%_9%)] border-t border-[hsl(220_15%_18%)] px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`font-golos text-sm tracking-widest uppercase text-left transition-colors ${
                currentPage === link.id ? 'text-gold' : 'text-foreground/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}