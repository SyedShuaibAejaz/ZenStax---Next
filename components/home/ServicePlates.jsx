import styles from './studio.module.css';

const INK = '#061d36';
const LINE = '#c4d2df';
const SOFT = '#dce5ed';
const PAPER = '#f4f7fa';
const ACCENT = '#ff7420';
const MUTED = '#637488';
const MONO = 'ui-monospace, Menlo, monospace';

function SoftwarePlate() {
  return (
    <svg viewBox='0 0 480 360'>
      <rect x='40' y='48' width='400' height='264' fill='#fff' stroke={LINE} />
      <path d='M40 80H440M130 80V312' stroke={SOFT} fill='none' />
      <circle cx='58' cy='64' r='4' fill={LINE} />
      <circle cx='74' cy='64' r='4' fill={LINE} />
      <circle cx='90' cy='64' r='4' fill={LINE} />
      <rect x='56' y='100' width='56' height='6' fill={SOFT} />
      <rect x='56' y='120' width='44' height='6' fill={SOFT} />
      <rect x='56' y='140' width='52' height='6' fill={SOFT} />
      <rect x='152' y='104' width='180' height='8' fill={INK} />
      <rect x='152' y='124' width='120' height='8' fill={LINE} />
      <rect x='172' y='144' width='200' height='8' fill={LINE} />
      <rect x='172' y='164' width='140' height='8' fill={LINE} />
      <rect x='152' y='184' width='90' height='8' fill={ACCENT} />
      <rect x='152' y='204' width='160' height='8' fill={LINE} />
      <rect x='330' y='252' width='18' height='40' fill={SOFT} />
      <rect x='356' y='236' width='18' height='56' fill={LINE} />
      <rect x='382' y='218' width='18' height='74' fill={INK} />
      <rect x='408' y='244' width='18' height='48' fill={SOFT} />
      <text x='152' y='292' fontSize='9' letterSpacing='1.5' fill={MUTED} fontFamily={MONO}>APP / DASHBOARD / PORTAL</text>
    </svg>
  );
}

function AiPlate() {
  const nodes = [
    { x: 240, y: 70, label: 'TRIGGER', dx: 34 },
    { x: 350, y: 180, label: 'ACTION', dx: 34 },
    { x: 240, y: 290, label: 'REPORT', dx: 34 },
    { x: 130, y: 180, label: 'FOLLOW-UP', dx: -34, end: true },
  ];

  return (
    <svg viewBox='0 0 480 360'>
      <circle cx='240' cy='180' r='110' className={styles.flow} fill='none' stroke={INK} />
      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r='18' fill='#fff' stroke={INK} />
          <circle cx={node.x} cy={node.y} r='4' fill={ACCENT} />
          <text x={node.x + node.dx} y={node.y + 4} fontSize='9' letterSpacing='1.5' textAnchor={node.end ? 'end' : 'start'} fill={MUTED} fontFamily={MONO}>{node.label}</text>
        </g>
      ))}
      <text x='240' y='184' fontSize='11' letterSpacing='2' textAnchor='middle' fill={INK} fontFamily={MONO}>WORKFLOW</text>
    </svg>
  );
}

function CrmPlate() {
  const columns = [
    { x: 40, label: 'NEW', cards: 3 },
    { x: 180, label: 'ACTIVE', cards: 2 },
    { x: 320, label: 'DONE', cards: 1 },
  ];

  return (
    <svg viewBox='0 0 480 360'>
      {columns.map((column, columnIndex) => (
        <g key={column.label}>
          <rect x={column.x} y='48' width='120' height='264' fill={PAPER} stroke={SOFT} />
          <text x={column.x + 10} y='70' fontSize='9' letterSpacing='1.5' fill={MUTED} fontFamily={MONO}>{column.label}</text>
          {Array.from({ length: column.cards }).map((_, cardIndex) => (
            <g key={cardIndex}>
              <rect x={column.x + 10} y={88 + cardIndex * 56} width='100' height='46' fill='#fff' stroke={LINE} />
              <rect x={column.x + 18} y={98 + cardIndex * 56} width='52' height='6' fill={INK} />
              <rect x={column.x + 18} y={114 + cardIndex * 56} width='72' height='5' fill={SOFT} />
              {columnIndex === 2 && <rect x={column.x + 10} y={88 + cardIndex * 56} width='3' height='46' fill={ACCENT} />}
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function NetworkPlate() {
  return (
    <svg viewBox='0 0 480 360'>
      <defs>
        <clipPath id='plate-net-clip'>
          <rect x='40' y='48' width='400' height='264' />
        </clipPath>
      </defs>
      <rect x='40' y='48' width='400' height='264' fill='#fff' stroke={LINE} />
      <path d='M200 48V200M40 200H440M320 200V312' stroke={SOFT} fill='none' />
      <g clipPath='url(#plate-net-clip)'>
        <circle cx='120' cy='124' r='84' className={styles.pulse} fill='none' stroke={ACCENT} />
        <circle cx='120' cy='124' r='84' className={styles.pulseLate} fill='none' stroke={ACCENT} />
      </g>
      <circle cx='120' cy='124' r='7' fill={ACCENT} stroke='#fff' strokeWidth='2' />
      <path d='M410 80 L330 60 L350 160 Z' fill={ACCENT} fillOpacity='0.12' stroke={ACCENT} />
      <circle cx='410' cy='80' r='8' fill='#fff' stroke={INK} />
      <rect x='350' y='250' width='40' height='50' fill={INK} />
      <rect x='356' y='258' width='28' height='6' fill={LINE} />
      <rect x='356' y='272' width='28' height='6' fill={LINE} />
      <path d='M350 275 H260 V124 H132' className={styles.flow} fill='none' stroke={INK} />
    </svg>
  );
}

const PLATES = { software: SoftwarePlate, ai: AiPlate, crm: CrmPlate, network: NetworkPlate };

export function ServicePlate({ kind }) {
  const Plate = PLATES[kind];

  return <Plate />;
}
