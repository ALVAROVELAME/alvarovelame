import type { CSSVars, Project } from '../types';

function AgroMock() {
  const bars = [92, 78, 64, 51, 38];
  return (
    <div className="mk mk-agro">
      <div className="mk-side">
        <i className="mk-logo" />
        {[0, 1, 2, 3].map((n) => (
          <i key={n} className={`mk-nav${n === 0 ? ' is-on' : ''}`} />
        ))}
      </div>
      <div className="mk-main">
        <div className="mk-kpis">
          {[0, 1, 2, 3].map((n) => (
            <div key={n} className="mk-kpi">
              <i className="mk-num" />
              <i className="mk-lbl" />
            </div>
          ))}
        </div>
        <div className="mk-chart">
          {bars.map((height, n) => (
            <span key={n} className="mk-bar" style={{ '--h': `${height}%`, '--i': n } as CSSVars} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CtMock() {
  const cols = [3, 2, 2, 1];
  const palette = ['#f87171', '#fbbf24', '#34d399'];
  return (
    <div className="mk mk-ct">
      <div className="mk-board">
        {cols.map((count, c) => (
          <div className="mk-col" key={c}>
            <i className="mk-col-title" />
            {Array.from({ length: count }, (_, k) => (
              <div key={k} className={`mk-card${c === 1 && k === 0 ? ' is-drag' : ''}`}>
                <i className="mk-dot" style={{ '--c': palette[(c + k) % palette.length] } as CSSVars} />
                <i className="mk-line" />
                <i className="mk-line short" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mk-pomo">
        <svg viewBox="0 0 64 64">
          <circle className="ring-bg" cx="32" cy="32" r="28" />
          <circle className="ring-fg" cx="32" cy="32" r="28" />
        </svg>
        <b>25:00</b>
      </div>
    </div>
  );
}

function InsumosMock() {
  const rows: Array<{ w: number; tag: 'compra' | 'venda' | 'ajuste' }> = [
    { w: 82, tag: 'compra' },
    { w: 56, tag: 'venda' },
    { w: 34, tag: 'ajuste' },
    { w: 71, tag: 'compra' },
    { w: 22, tag: 'venda' },
  ];
  return (
    <div className="mk mk-ins">
      <div className="mk-ins-head">
        <i className="mk-pill is-on" />
        <i className="mk-pill" />
        <i className="mk-pill" />
      </div>
      <div className="mk-rows">
        {rows.map((row, n) => (
          <div className="mk-row" key={n}>
            <i className="mk-name" />
            <span className="mk-stock">
              <b style={{ '--w': `${row.w}%`, '--i': n } as CSSVars} />
            </span>
            <i className={`mk-tag is-${row.tag}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Mock({ id }: { id: string }) {
  if (id === 'agrogestor') return <AgroMock />;
  if (id === 'ctoperacional') return <CtMock />;
  return <InsumosMock />;
}

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <figure className="preview">
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-url">{project.previewUrl}</span>
        </div>
        {project.screenshot ? (
          <img
            className="browser-shot"
            src={project.screenshot}
            alt={`Captura de tela do ${project.name}`}
            loading="lazy"
          />
        ) : (
          <div role="img" aria-label={`Ilustração da interface do ${project.name}`}>
            <Mock id={project.id} />
          </div>
        )}
      </div>
      {!project.screenshot && <figcaption>Ilustração da interface</figcaption>}
    </figure>
  );
}