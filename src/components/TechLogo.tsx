import { useState } from 'react';
import type { HTMLAttributes } from 'react';
import { techs } from '../data/tech';
import type { CSSVars, TechKey } from '../types';

interface TechLogoProps {
  tech: TechKey;
  size?: number;
  /** Mostra o nome ao lado do logo (em formato de "chip"). */
  label?: boolean;
  /** Use quando o logo é só decoração e o nome já aparece em outro lugar. */
  decorative?: boolean;
}

export function TechLogo({ tech, size = 28, label = false, decorative = false }: TechLogoProps) {
  const info = techs[tech];
  const [failed, setFailed] = useState(false);

  const tileProps: HTMLAttributes<HTMLSpanElement> = decorative
    ? { 'aria-hidden': true }
    : label
      ? { 'aria-hidden': true }
      : { role: 'img', 'aria-label': info.label };

  const tile = (
    <span className="logo-tile" style={{ '--size': `${size}px` } as CSSVars} {...tileProps}>
      {failed ? (
        <span className="logo-fallback">{info.label.slice(0, 2)}</span>
      ) : (
        <img
          src={info.src}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );

  if (!label) return tile;

  return (
    <span className="logo-chip">
      {tile}
      <span className="logo-label">{info.label}</span>
    </span>
  );
}