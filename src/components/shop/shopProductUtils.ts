import type { ShopProduct } from '../../data/shopContent';

export type ShopSortOption = 'all' | 'newest' | 'price-asc' | 'price-desc' | 'availability';

export type ShopProductSize = 'large' | 'medium' | 'standard';

export function getShopProductSize(index: number): ShopProductSize {
  if (index < 2) return 'large';
  if (index < 5) return 'medium';
  return 'standard';
}

export function sortShopProducts(products: ShopProduct[], sort: ShopSortOption): ShopProduct[] {
  const next = [...products];

  switch (sort) {
    case 'price-asc':
      return next.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return next.sort((a, b) => b.price - a.price);
    case 'availability':
      return next.sort((a, b) => Number(b.available) - Number(a.available));
    case 'newest':
      return next.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
    default:
      return next;
  }
}

export function formatProductCount(count: number): string {
  return `${count} Product${count === 1 ? '' : 's'}`;
}

export function filterShopProductsByQuery(products: ShopProduct[], query: string): ShopProduct[] {
  const term = query.trim().toLowerCase();
  if (!term) return products;

  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(term) || product.collection.toLowerCase().includes(term),
  );
}
