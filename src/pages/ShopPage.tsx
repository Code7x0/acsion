import { ShopHero } from '../components/shop/ShopHero';
import { ShopPhilosophy } from '../components/shop/ShopPhilosophy';
import { ShopProductGrid } from '../components/shop/ShopProductGrid';
import { EditorialBanner } from '../components/shop/EditorialBanner';

type ShopPageProps = {
  onQuickAdd?: () => void;
};

export function ShopPage({ onQuickAdd }: ShopPageProps) {
  return (
    <div className="shop-page">
      <ShopHero />
      <ShopPhilosophy />
      <ShopProductGrid onQuickAdd={onQuickAdd} />
      <EditorialBanner />
    </div>
  );
}
