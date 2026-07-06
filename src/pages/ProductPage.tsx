import { Navigate, useParams } from 'react-router-dom';
import { ProductEditorialBanner } from '../components/product/ProductEditorialBanner';
import { ProductHero } from '../components/product/ProductHero';
import { ProductRecommendations } from '../components/product/ProductRecommendations';
import { ProductStory } from '../components/product/ProductStory';
import { getProductByHandle } from '../data/productContent';

type ProductPageProps = {
  onAddToCart?: (quantity?: number) => void;
};

export function ProductPage({ onAddToCart }: ProductPageProps) {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  if (handle === 'intention-bracelet') {
    return <Navigate to="/products/ascension-charm" replace />;
  }

  return (
    <div className="product-page">
      <ProductHero
        product={product}
        onAddToCart={(quantity) => {
          for (let index = 0; index < quantity; index += 1) {
            onAddToCart?.();
          }
        }}
      />
      <ProductStory story={product.story} />
      <ProductEditorialBanner />
      {handle && <ProductRecommendations currentHandle={handle} onQuickAdd={onAddToCart} />}
    </div>
  );
}
