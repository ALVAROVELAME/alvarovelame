import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Feito com React + TypeScript.
        </p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}