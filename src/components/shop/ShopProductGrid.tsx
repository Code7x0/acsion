import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useShopSearch } from '../../context/ShopSearchContext';
import { shopProductGrid, shopProducts } from '../../data/shopContent';
import { ShopProductCard } from './ShopProductCard';
import {
  filterShopProductsByQuery,
  formatProductCount,
  getShopProductSize,
  sortShopProducts,
  type ShopSortOption,
} from './shopProductUtils';

type ShopProductGridProps = {
  onQuickAdd?: () => void;
};

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12M4.5 8h7M6.5 12h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function ShopProductGrid({ onQuickAdd }: ShopProductGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const { query } = useShopSearch();
  const [sort, setSort] = useState<ShopSortOption>('all');
  const [filterOpen, setFilterOpen] = useState(false);

  const sortedProducts = useMemo(() => {
    const filtered = filterShopProductsByQuery(shopProducts, query);
    return sortShopProducts(filtered, sort);
  }, [query, sort]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
      },
    },
  };

  if (sortedProducts.length === 0) {
    const emptyMessage = query.trim()
      ? `No products match "${query.trim()}".`
      : shopProductGrid.emptyMessage;

    return (
      <section className="shop-product-grid" aria-labelledby="shop-products-heading">
        <div className="shop-product-grid__inner">
          <h2 id="shop-products-heading" className="sr-only">
            Shop Products
          </h2>
          <div className="shop-product-grid__empty">
            <p>{emptyMessage}</p>
            {!query.trim() && (
              <a className="shop-product-grid__empty-link" href={shopProductGrid.emptyCtaLink}>
                {shopProductGrid.emptyCtaLabel}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="shop-product-grid" aria-labelledby="shop-products-heading">
      <div className="shop-product-grid__inner">
        <h2 id="shop-products-heading" className="sr-only">
          Shop Products
        </h2>

        <div className="shop-product-grid__toolbar">
          <p className="shop-product-grid__count">{formatProductCount(sortedProducts.length)}</p>

          <nav className="shop-product-grid__sort" aria-label="Sort products">
            <ul className="shop-product-grid__sort-list">
              {shopProductGrid.sortOptions.map((option) => (
                <li key={option.id}>
                  <button
                    type="button"
                    className={`shop-product-grid__sort-button${sort === option.id ? ' shop-product-grid__sort-button--active' : ''}`}
                    aria-current={sort === option.id ? 'true' : undefined}
                    onClick={() => setSort(option.id)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="shop-product-grid__filter"
            aria-expanded={filterOpen}
            onClick={() => setFilterOpen((open) => !open)}
          >
            <FilterIcon />
            Filter
          </button>
        </div>

        <div className="shop-product-grid__rule" aria-hidden="true" />

        <motion.div
          className="shop-product-grid__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className={`shop-product-grid__item shop-product-grid__item--${getShopProductSize(index)}`}
              variants={itemVariants}
            >
              <ShopProductCard
                product={product}
                size={getShopProductSize(index)}
                index={index}
                onQuickAdd={onQuickAdd}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
