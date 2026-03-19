import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import ServicePage from './ServicePage';
import NewsPage from './NewsPage';
import AboutPage from './AboutPage';
import ReviewsPage from './ReviewsPage';
import ContactsPage from './ContactsPage';
import PaymentPage from './PaymentPage';

type Page = 'home' | 'catalog' | 'service' | 'news' | 'about' | 'reviews' | 'contacts' | 'payment' | 'cart';

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'catalog': return <CatalogPage />;
      case 'service': return <ServicePage />;
      case 'news': return <NewsPage />;
      case 'about': return <AboutPage />;
      case 'reviews': return <ReviewsPage />;
      case 'contacts': return <ContactsPage />;
      case 'payment': return <PaymentPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-karcher-dark font-golos">
      <Navbar currentPage={currentPage} onNavigate={(p) => setCurrentPage(p as Page)} />
      <main>{renderPage()}</main>
      <Footer onNavigate={(p) => setCurrentPage(p as Page)} />
    </div>
  );
}
