import styles from './promo-popup.module.css';

function MainArt() {
  return (
    <svg
      className={styles.art}
      viewBox='0 0 480 400'
      role='img'
      aria-label='CRM and ERP dashboard connected to automated workflows'
    >
      <defs>
        <linearGradient id='main-bar' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor='#ffb185' />
          <stop offset='1' stopColor='#ff7420' />
        </linearGradient>
        <radialGradient id='main-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0' stopColor='#ff7420' stopOpacity='0.34' />
          <stop offset='1' stopColor='#ff7420' stopOpacity='0' />
        </radialGradient>
      </defs>

      <circle cx='240' cy='200' r='200' fill='url(#main-glow)' />

      <g className={styles.float}>
        <rect x='24' y='64' width='310' height='250' rx='20' fill='rgba(255,255,255,0.07)' stroke='rgba(255,255,255,0.22)' />
        <circle cx='48' cy='88' r='5' fill='#ff5f57' />
        <circle cx='66' cy='88' r='5' fill='#febc2e' />
        <circle cx='84' cy='88' r='5' fill='#28c840' />

        <rect x='48' y='112' width='86' height='52' rx='10' fill='rgba(255,255,255,0.09)' />
        <rect x='144' y='112' width='86' height='52' rx='10' fill='rgba(255,255,255,0.09)' />
        <rect x='240' y='112' width='70' height='52' rx='10' fill='rgba(255,255,255,0.09)' />
        <rect x='58' y='124' width='36' height='6' rx='3' fill='rgba(255,255,255,0.45)' />
        <rect x='58' y='140' width='54' height='12' rx='6' fill='#ff7420' />
        <rect x='154' y='124' width='36' height='6' rx='3' fill='rgba(255,255,255,0.45)' />
        <rect x='154' y='140' width='54' height='12' rx='6' fill='#6fb1ff' />
        <rect x='250' y='124' width='30' height='6' rx='3' fill='rgba(255,255,255,0.45)' />
        <rect x='250' y='140' width='42' height='12' rx='6' fill='#4cd38b' />

        <rect x='48' y='184' width='262' height='114' rx='12' fill='rgba(255,255,255,0.05)' />
        <rect x='66' y='244' width='24' height='42' rx='6' fill='url(#main-bar)' />
        <rect x='102' y='222' width='24' height='64' rx='6' fill='url(#main-bar)' />
        <rect x='138' y='234' width='24' height='52' rx='6' fill='url(#main-bar)' />
        <rect x='174' y='206' width='24' height='80' rx='6' fill='url(#main-bar)' />
        <rect x='210' y='218' width='24' height='68' rx='6' fill='url(#main-bar)' />
        <rect x='246' y='194' width='24' height='92' rx='6' fill='url(#main-bar)' />
        <polyline points='66,236 102,214 138,226 174,198 210,210 246,186 282,178' fill='none' stroke='#ffffff' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
      </g>

      <g className={styles.floatSlow}>
        <path className={styles.dash} d='M334 140 C364 140 372 92 402 92' fill='none' stroke='#ffb185' strokeWidth='2' />
        <path className={styles.dash} d='M334 190 C372 190 384 202 424 202' fill='none' stroke='#ffb185' strokeWidth='2' />
        <path className={styles.dash} d='M334 250 C364 250 372 310 402 310' fill='none' stroke='#ffb185' strokeWidth='2' />

        <circle cx='402' cy='92' r='28' fill='rgba(255,255,255,0.1)' stroke='#ff7420' strokeWidth='2' />
        <rect x='390' y='83' width='24' height='18' rx='3' fill='none' stroke='#ffffff' strokeWidth='2' />
        <polyline points='390,85 402,94 414,85' fill='none' stroke='#ffffff' strokeWidth='2' strokeLinejoin='round' />

        <circle cx='424' cy='202' r='28' fill='rgba(255,255,255,0.1)' stroke='#4cd38b' strokeWidth='2' />
        <polyline points='411,202 420,211 437,192' fill='none' stroke='#ffffff' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />

        <circle cx='402' cy='310' r='28' fill='rgba(255,255,255,0.1)' stroke='#6fb1ff' strokeWidth='2' />
        <rect x='390' y='312' width='6' height='10' rx='2' fill='#ffffff' />
        <rect x='399' y='304' width='6' height='18' rx='2' fill='#ffffff' />
        <rect x='408' y='298' width='6' height='24' rx='2' fill='#ffffff' />
      </g>

      <g className={styles.floatAlt}>
        <rect x='170' y='22' width='214' height='34' rx='17' fill='#ffffff' />
        <circle cx='190' cy='39' r='6' fill='#4cd38b' />
        <text x='204' y='44' fontSize='13' fontWeight='700' fill='#061d36'>Lead followed up automatically</text>
      </g>
    </svg>
  );
}

function WebsiteArt() {
  return (
    <svg
      className={styles.art}
      viewBox='0 0 480 400'
      role='img'
      aria-label='Modern business website shown in a browser window'
    >
      <defs>
        <linearGradient id='web-img' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stopColor='#6fb1ff' />
          <stop offset='1' stopColor='#ff7420' />
        </linearGradient>
        <radialGradient id='web-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0' stopColor='#6fb1ff' stopOpacity='0.28' />
          <stop offset='1' stopColor='#6fb1ff' stopOpacity='0' />
        </radialGradient>
      </defs>

      <circle cx='240' cy='200' r='200' fill='url(#web-glow)' />

      <g className={styles.float}>
        <rect x='36' y='56' width='380' height='290' rx='18' fill='rgba(255,255,255,0.08)' stroke='rgba(255,255,255,0.24)' />
        <path d='M36 74 a18 18 0 0 1 18 -18 h344 a18 18 0 0 1 18 18 v22 h-380 z' fill='rgba(255,255,255,0.1)' />
        <circle cx='58' cy='76' r='5' fill='#ff5f57' />
        <circle cx='76' cy='76' r='5' fill='#febc2e' />
        <circle cx='94' cy='76' r='5' fill='#28c840' />
        <rect x='130' y='68' width='190' height='16' rx='8' fill='rgba(255,255,255,0.14)' />

        <rect x='64' y='128' width='180' height='16' rx='8' fill='rgba(255,255,255,0.9)' />
        <rect x='64' y='154' width='140' height='16' rx='8' fill='#ff7420' />
        <rect x='64' y='188' width='170' height='7' rx='3.5' fill='rgba(255,255,255,0.35)' />
        <rect x='64' y='202' width='150' height='7' rx='3.5' fill='rgba(255,255,255,0.35)' />
        <rect x='64' y='228' width='100' height='32' rx='16' fill='#ff7420' />
        <rect x='80' y='241' width='68' height='6' rx='3' fill='#ffffff' />

        <rect x='276' y='120' width='116' height='140' rx='14' fill='url(#web-img)' />
        <circle cx='334' cy='168' r='22' fill='rgba(255,255,255,0.28)' />
        <path d='M276 232 q30 -28 58 -8 q26 18 58 -10 v46 a14 14 0 0 1 -14 14 h-88 a14 14 0 0 1 -14 -14 z' fill='rgba(255,255,255,0.22)' />

        <rect x='64' y='282' width='100' height='46' rx='10' fill='rgba(255,255,255,0.1)' />
        <rect x='176' y='282' width='100' height='46' rx='10' fill='rgba(255,255,255,0.1)' />
        <rect x='288' y='282' width='104' height='46' rx='10' fill='rgba(255,255,255,0.1)' />
        <rect x='74' y='294' width='46' height='6' rx='3' fill='rgba(255,255,255,0.5)' />
        <rect x='186' y='294' width='46' height='6' rx='3' fill='rgba(255,255,255,0.5)' />
        <rect x='298' y='294' width='46' height='6' rx='3' fill='rgba(255,255,255,0.5)' />
      </g>

      <g className={styles.floatAlt}>
        <rect x='326' y='24' width='128' height='36' rx='18' fill='#ffffff' />
        <circle cx='346' cy='42' r='6' fill='#4cd38b' />
        <text x='360' y='47' fontSize='13' fontWeight='700' fill='#061d36'>SEO ready</text>
      </g>

      <g className={styles.floatSlow}>
        <rect x='14' y='336' width='150' height='36' rx='18' fill='#ff7420' />
        <text x='34' y='359' fontSize='13' fontWeight='700' fill='#ffffff'>Looks great on mobile</text>
        <polygon points='356,262 356,300 366,291 374,308 381,304 373,288 386,288' fill='#ffffff' stroke='#061d36' strokeWidth='2' strokeLinejoin='round' />
      </g>
    </svg>
  );
}

function MobileArt() {
  return (
    <svg
      className={styles.art}
      viewBox='0 0 480 400'
      role='img'
      aria-label='Mobile app with booking and job tracking screens'
    >
      <defs>
        <radialGradient id='mob-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0' stopColor='#ff7420' stopOpacity='0.3' />
          <stop offset='1' stopColor='#ff7420' stopOpacity='0' />
        </radialGradient>
        <linearGradient id='mob-map' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stopColor='#2b5d8c' />
          <stop offset='1' stopColor='#143b63' />
        </linearGradient>
      </defs>

      <circle cx='250' cy='200' r='200' fill='url(#mob-glow)' />

      <g className={styles.floatSlow}>
        <g transform='rotate(-9 190 210)'>
          <rect x='96' y='62' width='150' height='290' rx='28' fill='rgba(255,255,255,0.06)' stroke='rgba(255,255,255,0.22)' />
          <rect x='112' y='96' width='118' height='64' rx='12' fill='url(#mob-map)' />
          <circle cx='176' cy='128' r='7' fill='#ff7420' />
          <rect x='112' y='174' width='118' height='34' rx='10' fill='rgba(255,255,255,0.1)' />
          <rect x='112' y='218' width='118' height='34' rx='10' fill='rgba(255,255,255,0.1)' />
        </g>
      </g>

      <g className={styles.float}>
        <rect x='206' y='34' width='180' height='332' rx='32' fill='#0b2e55' stroke='rgba(255,255,255,0.4)' strokeWidth='2' />
        <rect x='270' y='46' width='52' height='10' rx='5' fill='rgba(255,255,255,0.18)' />

        <rect x='226' y='74' width='80' height='8' rx='4' fill='rgba(255,255,255,0.45)' />
        <rect x='226' y='90' width='128' height='14' rx='7' fill='#ffffff' />

        <rect x='226' y='122' width='52' height='24' rx='12' fill='#ff7420' />
        <rect x='284' y='122' width='52' height='24' rx='12' fill='rgba(255,255,255,0.14)' />
        <rect x='342' y='122' width='24' height='24' rx='12' fill='rgba(255,255,255,0.14)' />

        <rect x='226' y='162' width='140' height='46' rx='12' fill='rgba(255,255,255,0.1)' />
        <circle cx='248' cy='185' r='10' fill='#6fb1ff' />
        <rect x='266' y='176' width='70' height='7' rx='3.5' fill='rgba(255,255,255,0.6)' />
        <rect x='266' y='190' width='50' height='6' rx='3' fill='rgba(255,255,255,0.3)' />

        <rect x='226' y='218' width='140' height='46' rx='12' fill='rgba(255,255,255,0.1)' />
        <circle cx='248' cy='241' r='10' fill='#4cd38b' />
        <rect x='266' y='232' width='70' height='7' rx='3.5' fill='rgba(255,255,255,0.6)' />
        <rect x='266' y='246' width='50' height='6' rx='3' fill='rgba(255,255,255,0.3)' />

        <rect x='226' y='274' width='140' height='46' rx='12' fill='rgba(255,255,255,0.1)' />
        <circle cx='248' cy='297' r='10' fill='#ffcd5c' />
        <rect x='266' y='288' width='70' height='7' rx='3.5' fill='rgba(255,255,255,0.6)' />
        <rect x='266' y='302' width='50' height='6' rx='3' fill='rgba(255,255,255,0.3)' />

        <rect x='226' y='328' width='140' height='24' rx='12' fill='#ff7420' />
      </g>

      <g className={styles.floatAlt}>
        <rect x='20' y='118' width='198' height='50' rx='16' fill='#ffffff' />
        <circle cx='46' cy='143' r='12' fill='#4cd38b' />
        <polyline points='40,143 45,148 53,138' fill='none' stroke='#ffffff' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
        <text x='68' y='139' fontSize='13' fontWeight='800' fill='#061d36'>Booking confirmed</text>
        <text x='68' y='156' fontSize='11' fontWeight='600' fill='#637488'>Technician is on the way</text>
      </g>

      <g className={styles.floatSlow}>
        <circle cx='414' cy='96' r='24' fill='#ff7420' />
        <path d='M414 84 a10 10 0 0 1 10 10 c0 8 -10 18 -10 18 s-10 -10 -10 -18 a10 10 0 0 1 10 -10 z' fill='#ffffff' />
        <circle cx='414' cy='94' r='3.5' fill='#ff7420' />
      </g>
    </svg>
  );
}

function NetworkArt() {
  return (
    <svg
      className={styles.art}
      viewBox='0 0 480 400'
      role='img'
      aria-label='Office floor plan with Wi-Fi coverage, cabling, and CCTV'
    >
      <defs>
        <clipPath id='net-clip'>
          <rect x='40' y='60' width='400' height='280' rx='14' />
        </clipPath>
        <radialGradient id='net-glow' cx='50%' cy='50%' r='50%'>
          <stop offset='0' stopColor='#6fb1ff' stopOpacity='0.26' />
          <stop offset='1' stopColor='#6fb1ff' stopOpacity='0' />
        </radialGradient>
      </defs>

      <circle cx='240' cy='200' r='200' fill='url(#net-glow)' />

      <g className={styles.float}>
        <rect x='40' y='60' width='400' height='280' rx='14' fill='rgba(255,255,255,0.07)' stroke='rgba(255,255,255,0.3)' strokeWidth='2' />
        <path d='M190 60 V340 M40 200 H440 M320 200 V340' fill='none' stroke='rgba(255,255,255,0.2)' strokeWidth='2' />

        <g clipPath='url(#net-clip)'>
          <circle cx='115' cy='130' r='86' fill='rgba(255,116,32,0.12)' />
          <circle className={styles.ring} cx='115' cy='130' r='86' fill='none' stroke='#ff7420' strokeWidth='2' />
          <circle className={styles.ringLate} cx='115' cy='130' r='86' fill='none' stroke='#ff7420' strokeWidth='2' />
        </g>
        <circle cx='115' cy='130' r='9' fill='#ff7420' stroke='#ffffff' strokeWidth='3' />

        <path d='M420 78 L310 62 L340 190 Z' fill='rgba(255,116,32,0.2)' stroke='#ff7420' strokeWidth='1.5' />
        <circle cx='424' cy='80' r='10' fill='#0b2e55' stroke='#ffffff' strokeWidth='2.5' />
        <circle className={styles.blink} cx='424' cy='80' r='3.5' fill='#e5484d' />

        <rect x='350' y='262' width='46' height='56' rx='6' fill='#0b2e55' stroke='rgba(255,255,255,0.5)' strokeWidth='2' />
        <rect x='358' y='270' width='30' height='8' rx='2' fill='#6fb1ff' />
        <rect x='358' y='284' width='30' height='8' rx='2' fill='#4cd38b' />
        <rect x='358' y='298' width='30' height='8' rx='2' fill='#ff7420' />

        <path className={styles.dash} d='M350 292 H230 V130 H124' fill='none' stroke='#ffffff' strokeWidth='2' />
        <path className={styles.dash} d='M230 292 V250 H100' fill='none' stroke='#ffffff' strokeWidth='2' />
        <circle cx='100' cy='250' r='6' fill='#ff7420' stroke='#ffffff' strokeWidth='2' />
        <circle cx='230' cy='130' r='5' fill='#ffffff' />
      </g>

      <g className={styles.floatAlt}>
        <rect x='252' y='16' width='196' height='34' rx='17' fill='#ffffff' />
        <circle cx='272' cy='33' r='6' fill='#4cd38b' />
        <text x='286' y='38' fontSize='13' fontWeight='700' fill='#061d36'>Surveyed and planned</text>
      </g>

      <g className={styles.floatSlow}>
        <rect x='16' y='348' width='132' height='34' rx='17' fill='#ff7420' />
        <text x='34' y='370' fontSize='13' fontWeight='700' fill='#ffffff'>Wi-Fi + CCTV</text>
      </g>
    </svg>
  );
}

const ARTS = {
  main: MainArt,
  website: WebsiteArt,
  mobile: MobileArt,
  network: NetworkArt,
};

export default function WelcomeArt({ name }) {
  const Art = ARTS[name] || MainArt;

  return <Art />;
}
