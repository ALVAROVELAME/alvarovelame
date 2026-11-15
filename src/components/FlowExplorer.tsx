import { useId, useState } from 'react';
import type { CSSVars, FlowNode } from '../types';
import { Icon } from './Icons';
import { TechLogo } from './TechLogo';

interface FlowExplorerProps {
  nodes: FlowNode[];
  label: string;
  initialId?: string;
  accent?: string;
}

export function FlowExplorer({ nodes, label, initialId, accent }: FlowExplorerProps) {
  const detailId = useId();
  const [selectedId, setSelectedId] = useState<string>(initialId ?? nodes[0]?.id ?? '');
  const selected = nodes.find((node) => node.id === selectedId) ?? nodes[0];

  if (!selected) return null;

  const style = accent ? ({ '--p-accent': accent } as CSSVars) : undefined;

  return (
    <div className="flow" style={style}>
      <p className="flow-hint">Clique em cada etapa para ver os detalhes.</p>

      <ol className="flow-track" aria-label={label}>
        {nodes.map((node, index) => (
          <li className="flow-item" key={node.id}>
            <button
              type="button"
              className="flow-node"
              aria-pressed={node.id === selected.id}
              aria-controls={detailId}
              onClick={() => setSelectedId(node.id)}
            >
              <span className="flow-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flow-visual" aria-hidden="true">
                {node.tech.length > 0 ? (
                  node.tech.slice(0, 3).map((tech) => <TechLogo key={tech} tech={tech} size={22} decorative />)
                ) : (
                  <span className="flow-icon">
                    <Icon name={node.icon} size={22} />
                  </span>
                )}
              </span>
              <span className="flow-name">{node.name}</span>
              <span className="flow-role">{node.role}</span>
            </button>
            {index < nodes.length - 1 && (
              <span className="flow-link" aria-hidden="true">
                <i />
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="flow-detail" id={detailId} aria-live="polite">
        <div className="flow-detail-inner" key={selected.id}>
          <div>
            <p className="flow-kicker">
              {selected.name} · {selected.role}
            </p>
            <p className="flow-title">{selected.title}</p>
            <p className="flow-desc">{selected.description}</p>
          </div>
          <ul className="flow-points">
            {selected.points.map((point) => (
              <li key={point}>
                <Icon name="check" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}