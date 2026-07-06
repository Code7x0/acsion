import { useId, useState } from 'react';
import type { ProductAccordionItem } from '../../data/productStoryContent';

type ProductAccordionProps = {
  items: ProductAccordionItem[];
  defaultOpenId?: string;
};

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className={`product-accordion__icon${isOpen ? ' product-accordion__icon--open' : ''}`} aria-hidden="true">
      +
    </span>
  );
}

function formatContent(content: string) {
  return content.split('\n').filter(Boolean);
}

export function ProductAccordion({ items, defaultOpenId }: ProductAccordionProps) {
  const baseId = useId();
  const initialOpen = defaultOpenId && items.some((item) => item.id === defaultOpenId)
    ? defaultOpenId
    : null;
  const [openId, setOpenId] = useState<string | null>(initialOpen);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  if (!items.length) return null;

  return (
    <div className="product-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const triggerId = `${baseId}-${item.id}-trigger`;

        return (
          <div key={item.id} className={`product-accordion__item${isOpen ? ' product-accordion__item--open' : ''}`}>
            <h3 className="product-accordion__heading">
              <button
                type="button"
                id={triggerId}
                className="product-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="product-accordion__title">{item.title}</span>
                <PlusIcon isOpen={isOpen} />
              </button>
            </h3>

            <div
              id={panelId}
              className={`product-accordion__panel${isOpen ? ' product-accordion__panel--open' : ''}`}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
            >
              <div className="product-accordion__panel-inner">
                <div className="product-accordion__content">
                  {formatContent(item.content).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
