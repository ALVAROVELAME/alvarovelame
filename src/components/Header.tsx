import { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS } from '../data/profile';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useScrollSpy } from '../hooks/useScrollSpy';
import type { Theme } from '../hooks/useTheme';
import type { CSSVars } from '../types';
import { Icon } from './Icons';

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const active = useScrollSpy(NAV_IDS);
  const progress = useScrollProgress();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const isDark = theme === 'dark';

  return (
    <header className="header" data-scrolled={progress > 0.005}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Alvaro Velame — ir para o início">
          <span className="brand-mark" aria-hidden="true">
            AV
          </span>
          <span className="brand-name">Alvaro Velame</span>
        </a>

        <nav id="menu-principal" className="nav" aria-label="Principal" data-open={open}>
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className="nav-link"
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <div className="progress" style={{ '--p': progress } as CSSVars} aria-hidden="true" />
    </header>
  );
}