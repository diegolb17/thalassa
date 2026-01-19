import { motion } from 'framer-motion';

interface WaveDividerProps {
  flip?: boolean;
  color?: 'primary' | 'muted' | 'white';
  className?: string;
}

const WaveDivider = ({ flip = false, color = 'muted', className = '' }: WaveDividerProps) => {
  const colorMap = {
    primary: 'hsl(228, 45%, 42%)',
    muted: 'hsl(212, 70%, 89%)',
    white: 'hsl(0, 0%, 100%)',
  };

  const fillColor = colorMap[color];

  return (
    <div 
      className={`relative w-full overflow-hidden ${className}`}
      style={{ 
        height: '80px',
        transform: flip ? 'rotate(180deg)' : 'none'
      }}
    >
      <motion.svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-full"
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <path
          d="M0,40 C120,60 240,20 360,40 C480,60 600,20 720,40 C840,60 960,20 1080,40 C1200,60 1320,20 1440,40 C1560,60 1680,20 1800,40 C1920,60 2040,20 2160,40 C2280,60 2400,20 2520,40 C2640,60 2760,20 2880,40 L2880,80 L0,80 Z"
          fill={fillColor}
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-full opacity-50"
        initial={{ x: '-25%' }}
        animate={{ x: '-75%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <path
          d="M0,50 C150,30 300,70 450,50 C600,30 750,70 900,50 C1050,30 1200,70 1350,50 C1500,30 1650,70 1800,50 C1950,30 2100,70 2250,50 C2400,30 2550,70 2700,50 C2850,30 3000,70 3150,50 L3150,80 L0,80 Z"
          fill={fillColor}
        />
      </motion.svg>
    </div>
  );
};

export default WaveDivider;
