import styles from './suit-mark.module.css';

export interface SuitMarkProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  animated?: boolean;
}

export default function SuitMark({
  className,
  width = 120,
  height = 144,
  animated = false,
}: SuitMarkProps) {
  const draw = animated ? styles.drawPath : undefined;
  const dSmall = animated ? `${styles.drawPath} ${styles.delaySmall}` : undefined;
  const dMed = animated ? `${styles.drawPath} ${styles.delayMedium}` : undefined;
  const dLarge = animated ? `${styles.drawPath} ${styles.delayLarge}` : undefined;
  const dXL = animated ? `${styles.drawPath} ${styles.delayExtraLarge}` : undefined;

  return (
    <svg
      className={`${styles.suit} ${className ?? ''}`}
      width={width}
      height={height}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className={draw}
        d="M100 10 L130 40 L130 200 L110 230 L90 230 L70 200 L70 40 L100 10z"
        stroke="#f5f5f5"
        strokeWidth="2"
        fill="none"
      />
      <path
        className={dSmall}
        d="M85 40 L100 70 L115 40"
        stroke="#f5f5f5"
        strokeWidth="2"
        fill="none"
      />
      <path
        className={dMed}
        d="M85 40 L75 80 L90 90"
        stroke="#f5f5f5"
        strokeWidth="2"
        fill="none"
      />
      <path
        className={dMed}
        d="M115 40 L125 80 L110 90"
        stroke="#f5f5f5"
        strokeWidth="2"
        fill="none"
      />
      <circle
        className={dLarge}
        cx="100"
        cy="110"
        r="5"
        stroke="#ffd700"
        strokeWidth="2"
        fill="none"
      />
      <circle
        className={dLarge}
        cx="100"
        cy="140"
        r="5"
        stroke="#ffd700"
        strokeWidth="2"
        fill="none"
      />
      <circle
        className={dLarge}
        cx="100"
        cy="170"
        r="5"
        stroke="#ffd700"
        strokeWidth="2"
        fill="none"
      />
      <path
        className={dXL}
        d="M80 160 L90 160 L90 175 L80 175 Z"
        stroke="#f5f5f5"
        strokeWidth="2"
        fill="none"
      />
      <path
        className={dXL}
        d="M110 160 L120 160 L120 175 L110 175 Z"
        stroke="#f5f5f5"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
