import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ArticlesPage from '@/pages/ArticlesPage';
import AuthorsPage from '@/pages/AuthorsPage';

type Page = 'home' | 'articles' | 'authors';

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'articles' && <ArticlesPage />}
        {currentPage === 'authors' && <AuthorsPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
