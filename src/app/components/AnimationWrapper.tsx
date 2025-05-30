"use client";
import { useEffect, useState } from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    // Créer des particules flottantes
    const createParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.2,
      }));
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="relative">
      {/* Particules flottantes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-[#d99541] to-[#1f3359] animate-float-random"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Effet de gradient animé en arrière-plan */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d99541] via-transparent to-[#1f3359] animate-gradient-shift"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes float-random {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
          }
        }

        @keyframes gradient-shift {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            transform: rotate(180deg) scale(1);
          }
          75% {
            transform: rotate(270deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        .animate-float-random {
          animation: float-random ease-in-out infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }

        /* Effets de brillance pour les éléments interactifs */
        @keyframes pulse-gold {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(217, 149, 65, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(217, 149, 65, 0.6),
              0 0 40px rgba(217, 149, 65, 0.4);
          }
        }

        .pulse-gold {
          animation: pulse-gold 2s ease-in-out infinite;
        }

        /* Effet de vague pour les arrière-plans */
        @keyframes wave {
          0% {
            transform: translateX(-100%) skewX(0deg);
          }
          100% {
            transform: translateX(200%) skewX(15deg);
          }
        }

        .wave-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: wave 3s infinite;
        }
      `}</style>
    </div>
  );
}
