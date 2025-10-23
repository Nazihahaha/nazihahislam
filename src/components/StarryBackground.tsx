import { useMemo } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  animationDelay: number;
  animationDuration: number;
  opacity: number;
  type: 'small' | 'medium' | 'large';
}

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  animationDelay: number;
}

const StarryBackground = () => {
  const stars = useMemo(() => {
    const starArray: Star[] = [];
    const totalStars = 150;

    for (let i = 0; i < totalStars; i++) {
      const random = Math.random();
      let type: 'small' | 'medium' | 'large';
      let size: number;

      if (random < 0.6) {
        type = 'small';
        size = Math.random() * 1 + 1; // 1-2px
      } else if (random < 0.9) {
        type = 'medium';
        size = Math.random() * 1 + 2; // 2-3px
      } else {
        type = 'large';
        size = Math.random() * 1 + 3; // 3-4px
      }

      starArray.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size,
        animationDelay: Math.random() * 3,
        animationDuration: Math.random() * 2 + 2, // 2-4s
        opacity: Math.random() * 0.5 + 0.5, // 0.5-1
        type,
      });
    }

    return starArray;
  }, []);

  const shootingStars = useMemo(() => {
    const shootingStarArray: ShootingStar[] = [];
    for (let i = 0; i < 3; i++) {
      shootingStarArray.push({
        id: i,
        top: Math.random() * 50,
        left: Math.random() * 50,
        animationDelay: Math.random() * 10 + i * 5, // Stagger the shooting stars
      });
    }
    return shootingStarArray;
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Regular twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-[twinkle_var(--duration)_ease-in-out_infinite]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.type === 'large' ? 'hsl(263 70% 70%)' : '#fff',
            opacity: star.opacity,
            boxShadow: star.type === 'large' 
              ? '0 0 4px 1px hsl(263 70% 70% / 0.5)' 
              : '0 0 2px 0.5px rgba(255, 255, 255, 0.3)',
            animationDelay: `${star.animationDelay}s`,
            '--duration': `${star.animationDuration}s`,
          } as React.CSSProperties & { '--duration': string }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-[shooting-star_3s_linear_infinite]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 8px 2px rgba(255, 255, 255, 0.5)',
          }}
        >
          <div className="absolute w-20 h-[1px] bg-gradient-to-r from-white to-transparent -left-20" />
        </div>
      ))}
    </div>
  );
};

export default StarryBackground;
