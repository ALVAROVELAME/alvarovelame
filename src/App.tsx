import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Infrastructure } from './components/Infrastructure';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { useReveal } from './hooks/useReveal';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <>
      <div className="bg-decor" aria-hidden="true">
        <div className="bg-grid" />
        <div className="blob blob-a" />
        <div className="blob blob-b" />
      </div>

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header theme={theme} onToggleTheme={toggle} />

      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Marquee />
        <Projects />
        <Infrastructure />
        <TechStack />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}