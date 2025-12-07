import { AppShell } from './components/layout/AppShell';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { Typography } from './components/ui/Typography';
import { FeaturedProduct } from './components/domain/FeaturedProduct';
import { ProductCard } from './components/domain/ProductCard';
import { FEATURED_PRODUCT, ESPRESSO_CLASSICS, MILK_AND_ALT } from './data/mockData';

function App() {
  return (
    <AppShell>
      <Header />
      <main className="flex-1 flex flex-col w-full max-w-md mx-auto pb-24">
        {/* Section: The Daily Focus */}
        <div className="pt-6 pb-2">
          <Typography variant="h2" className="px-4 pb-4">
            The Daily Focus
          </Typography>
          <FeaturedProduct product={FEATURED_PRODUCT} />
        </div>

        {/* Section: Espresso Classics */}
        <div className="pt-8 pb-2">
          <Typography variant="h2" className="px-4 pb-4">
            Espresso Classics
          </Typography>
          <div className="grid grid-cols-2 gap-4 px-4">
            {ESPRESSO_CLASSICS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Section: Milk & Alternatives */}
        <div className="pt-6 pb-4">
          <Typography variant="h2" className="px-4 pb-4">
            Milk & Alternatives
          </Typography>
          <div className="grid grid-cols-2 gap-4 px-4">
            {MILK_AND_ALT.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </AppShell>
  );
}

export default App;
