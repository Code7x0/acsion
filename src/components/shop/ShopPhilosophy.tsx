import type { CSSProperties } from 'react';
import { shopPhilosophy } from '../../data/shopContent';
import { LotusMark } from '../ui/LotusMark';

export function ShopPhilosophy() {
  return (
    <section
      className="shop-philosophy"
      aria-labelledby="shop-philosophy-heading"
      style={
        {
          '--shop-philosophy-bg': shopPhilosophy.backgroundColor,
        } as CSSProperties
      }
    >
      <div className="shop-philosophy__texture" aria-hidden="true" />

      {shopPhilosophy.showWatermark && (
        <div className="shop-philosophy__watermark" aria-hidden="true">
          <LotusMark size={320} />
        </div>
      )}

      <div className="shop-philosophy__leaf" aria-hidden="true" />

      <div className="shop-philosophy__inner">
        <div className="shop-philosophy__content">
          <p className="shop-philosophy__label" data-animate="fade-up">
            {shopPhilosophy.label}
          </p>

          <span className="shop-philosophy__label-divider" aria-hidden="true" />

          <h2
            className="shop-philosophy__heading"
            id="shop-philosophy-heading"
            data-animate="fade-up"
            data-animate-delay="150"
          >
            {shopPhilosophy.heading.map((line) => (
              <span className="shop-philosophy__heading-line" key={line}>
                {line}
              </span>
            ))}
          </h2>

          <p className="shop-philosophy__copy" data-animate="fade-up" data-animate-delay="300">
            {shopPhilosophy.copy}
          </p>
        </div>
      </div>
    </section>
  );
}
