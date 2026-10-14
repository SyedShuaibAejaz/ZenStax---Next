import styles from './studio.module.css';

const NODES = [
  { id: 'A1', label: 'Leads', x: 30, y: 36, w: 120 },
  { id: 'A2', label: 'CRM', x: 220, y: 36, w: 120, accent: true },
  { id: 'A3', label: 'ERP', x: 410, y: 36, w: 120 },
  { id: 'B1', label: 'Automation', x: 125, y: 146, w: 140 },
  { id: 'B2', label: 'Reports', x: 315, y: 146, w: 140 },
];

const LINKS = [
  'M150 60 H220',
  'M340 60 H410',
  'M280 84 V115 H195 V146',
  'M470 84 V115 H385 V146',
];

export default function HeroBlueprint() {
  return (
    <svg
      viewBox='0 0 560 320'
      role='img'
      aria-label='Diagram of leads flowing into a CRM and ERP, with automation and reports, on top of a network and security base layer'
    >
      <rect x='0.5' y='0.5' width='559' height='319' fill='none' stroke='#E5E5E5' />

      {LINKS.map((d) => (
        <path key={d} d={d} className={styles.flow} fill='none' stroke='#0A0A0B' strokeWidth='1' />
      ))}

      <path d='M195 194 V246' className={styles.flow} fill='none' stroke='#A3A3A3' strokeWidth='1' />
      <path d='M385 194 V246' className={styles.flow} fill='none' stroke='#A3A3A3' strokeWidth='1' />

      {NODES.map((node) => (
        <g key={node.id}>
          <rect x={node.x} y={node.y} width={node.w} height='48' fill='#FFFFFF' stroke='#D4D4D4' />
          <text x={node.x + 10} y={node.y + 17} fontSize='9' letterSpacing='1' fill='#A3A3A3' fontFamily='ui-monospace, Menlo, monospace'>
            {node.id}
          </text>
          <text x={node.x + 10} y={node.y + 36} fontSize='14' fontWeight='600' fill='#0A0A0B'>
            {node.label}
          </text>
          {node.accent && <rect x={node.x + node.w - 18} y={node.y + 10} width='8' height='8' fill='#FF7420' />}
        </g>
      ))}

      <rect x='30' y='246' width='500' height='44' fill='#0A0A0B' />
      <rect x='46' y='264' width='8' height='8' fill='#FF7420' />
      <text x='66' y='272' fontSize='10' letterSpacing='1.5' fill='#FFFFFF' fontFamily='ui-monospace, Menlo, monospace'>
        NETWORK + SECURITY BASE LAYER
      </text>
    </svg>
  );
}
