import type { ShopProduct } from '../data/shopContent';
import { shopProducts } from '../data/shopContent';

export function getRecommendedProducts(excludeHandle: string, limit = 4): ShopProduct[] {
  const aliases: Record<string, string[]> = {
    'ascension-practice-mat': ['ascension-yoga-mat'],
    'ascension-yoga-mat': ['ascension-practice-mat'],
    'intention-bracelet': ['ascension-charm'],
  };

  const excluded = new Set([excludeHandle, ...(aliases[excludeHandle] ?? [])]);

  return shopProducts
    .filter((product) => {
      const productHandle = product.href.replace('/products/', '');
      return !excluded.has(productHandle) && !excluded.has(product.id);
    })
    .slice(0, limit);
}

export function getProductHandleFromHref(href: string): string {
  return href.replace('/products/', '');
}
