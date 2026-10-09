import Link from 'next/link';
import styles from './network-demo.module.css';

export const metadata = {
  title: 'Network and CCTV Site Plan Demo',
  description:
    'Interactive sample office floor plan by ZenStax. Switch between Wi-Fi coverage, structured cabling, and CCTV coverage to see how network and security systems are planned.',
  alternates: { canonical: '/demos/network-security' },
};

const layers = [
  {
    key: 'A',
    id: 'layer-wifi',
    short: 'Wi-Fi coverage',
    summary: 'Access points placed so people get a strong signal where they actually work.',
    points: [
      'A site survey decides where each access point goes.',
      'Coverage is planned room by room, not guessed.',
      'Staff and guest networks are kept separate.',
    ],
  },
  {
    key: 'B',
    id: 'layer-cabling',
    short: 'Structured cabling',
    summary: 'Organised, labelled cable runs from one rack to every outlet.',
    points: [
      'Every run is labelled at both ends for quick fault finding.',
      'The rack is laid out so changes are safe and simple.',
      'Spare outlets and capacity allow for growth.',
    ],
  },
  {
    key: 'C',
    id: 'layer-cctv',
    short: 'CCTV coverage',
    summary: 'Cameras positioned to cover entrances and key areas with fewer blind spots.',
    points: [
      'Camera positions are reviewed on the plan before any drilling.',
      'Entrances, shared areas, and equipment rooms are covered first.',
      'Recording and viewing are set up for the people who need them.',
    ],
  },
];

const accessPoints = [
  [70, 60],
  [260, 75],
  [305, 200],
];

const cablePaths = [
  'M175 237 V160 H70 V190',
  'M175 160 H100 V40 H70',
  'M175 160 V125 H340 V40',
  'M200 125 V40',
  'M260 125 V100',
  'M175 245 H345 V225',
];

const outlets = [
  [70, 190],
  [70, 40],
  [340, 40],
  [200, 40],
  [260, 100],
  [345, 225],
];

const cameras = [
  { x: 20, y: 20, d: 'M20 20 L118 38 L96 108 Z' },
  { x: 380, y: 20, d: 'M380 20 L235 28 L268 128 Z' },
  { x: 380, y: 262, d: 'M380 262 L232 192 L296 156 Z' },
  { x: 138, y: 158, d: 'M138 158 L214 164 L190 262 Z' },
];

export default function NetworkDemoPage() {
  return (
    <div className={styles.page}>
      <div className='container'>
        <div className={styles.stage}>
          {layers.map((item, index) => (
            <input
              key={item.id}
              type='radio'
              name='demo-layer'
              id={item.id}
              className={`${styles.radio} ${styles['r' + item.key]}`}
              aria-label={item.short}
              defaultChecked={index === 0}
            />
          ))}

          <div className={styles.layout}>
            <div className={styles.copy}>
              <p className='eyebrow'>Interactive Demo</p>
              <h1>See how a site is planned before it is built.</h1>
              <p className={styles.lead}>
                This sample office shows the three layers we plan together:
                wireless coverage, structured cabling, and CCTV. Choose a layer
                to see it on the floor plan.
              </p>

              <ul className={styles.chapters}>
                {layers.map((item, index) => (
                  <li key={item.id}>
                    <label
                      htmlFor={item.id}
                      className={`${styles.chap} ${styles['chap' + item.key]}`}
                    >
                      <strong>{index + 1}. {item.short}</strong>
                      <span>{item.summary}</span>
                    </label>
                  </li>
                ))}
              </ul>

              <p className={styles.notice}>
                Sample office, not a real site. Every location is surveyed and
                planned individually.
              </p>

              <div className={styles.actions}>
                <Link href='/contact' className='button button-primary'>
                  Discuss Infrastructure
                  <span aria-hidden='true'>→</span>
                </Link>
                <Link href='/services/network-security' className={styles.back}>
                  Network and security services
                </Link>
              </div>
            </div>

            <div className={styles.panel}>
              <svg
                className={styles.plan}
                viewBox='0 0 400 280'
                role='img'
                aria-label='Sample office floor plan with Wi-Fi, cabling, and CCTV layers'
              >
                <defs>
                  <clipPath id='plan-clip'>
                    <rect x='10' y='10' width='380' height='260' rx='6' />
                  </clipPath>
                </defs>

                <rect x='10' y='10' width='380' height='260' rx='6' className={styles.wall} />

                <g className={styles.rooms}>
                  <rect x='10' y='10' width='120' height='110' />
                  <rect x='10' y='120' width='120' height='150' />
                  <rect x='130' y='10' width='260' height='140' />
                  <rect x='130' y='150' width='90' height='120' />
                  <rect x='220' y='150' width='170' height='120' />
                </g>

                <g className={styles.labels}>
                  <text x='70' y='112'>Reception</text>
                  <text x='70' y='262'>Meeting room</text>
                  <text x='260' y='26'>Open office</text>
                  <text x='175' y='172'>Server room</text>
                  <text x='305' y='262'>Break room</text>
                </g>

                <g className={`${styles.layer} ${styles.layerA}`} clipPath='url(#plan-clip)'>
                  {accessPoints.map(([x, y]) => (
                    <g key={`${x}-${y}`}>
                      <circle cx={x} cy={y} r='78' className={styles.cover} />
                      <circle cx={x} cy={y} r='78' className={styles.ring} />
                      <circle cx={x} cy={y} r='6' className={styles.ap} />
                    </g>
                  ))}
                </g>

                <g className={`${styles.layer} ${styles.layerB}`}>
                  {cablePaths.map((d) => (
                    <path key={d} d={d} className={styles.cable} />
                  ))}
                  {outlets.map(([x, y]) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r='4.5' className={styles.outlet} />
                  ))}
                  <rect x='165' y='225' width='20' height='24' rx='3' className={styles.rack} />
                </g>

                <g className={`${styles.layer} ${styles.layerC}`}>
                  {cameras.map((cam) => (
                    <g key={cam.d}>
                      <path d={cam.d} className={styles.wedge} />
                      <circle cx={cam.x} cy={cam.y} r='6' className={styles.cam} />
                      <circle cx={cam.x} cy={cam.y} r='2' className={styles.rec} />
                    </g>
                  ))}
                </g>
              </svg>

              {layers.map((item) => (
                <section
                  key={item.id}
                  className={`${styles.info} ${styles['info' + item.key]}`}
                  aria-label={item.short}
                >
                  <h2>{item.short}</h2>
                  <p>{item.summary}</p>
                  <ul className={styles.list}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
