"use client";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({
  onComplete,
}: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1f3359] via-[#2a4a7a] to-[#d99541] z-[10000] flex items-center justify-center">
      {/* Particules animées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo et contenu principal */}
      <div className="text-center z-10">
        {/* Logo animé */}
        <div className="mb-8 relative">
          <div className="text-6xl md:text-8xl font-black text-white mb-4 animate-pulse-scale">
            <span className="text-[#d99541]">F</span>
            <span className="text-white">ULSER</span>
          </div>
          <div className="text-xl md:text-2xl text-white/80 font-light tracking-[0.3em] animate-fade-in-up">
            PROPERTIES
          </div>

          {/* Cercle lumineux animé autour du logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-[#d99541]/30 rounded-full animate-spin-slow"></div>
            <div className="absolute w-40 h-40 md:w-56 md:h-56 border border-white/20 rounded-full animate-spin-reverse"></div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="w-80 max-w-[90vw] mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d99541] to-[#f4a653] transition-all duration-100 ease-out rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-shimmer"></div>
            </div>
          </div>
          <div className="mt-4 text-white/80 text-lg font-medium">
            {progress}%
          </div>
        </div>

        {/* Texte de chargement animé */}
        <div className="mt-8 text-white/60 text-sm tracking-wider animate-pulse">
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0ms" }}
          >
            C
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "100ms" }}
          >
            h
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "200ms" }}
          >
            a
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "300ms" }}
          >
            r
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "400ms" }}
          >
            g
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "500ms" }}
          >
            e
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "600ms" }}
          >
            m
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "700ms" }}
          >
            e
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "800ms" }}
          >
            n
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "900ms" }}
          >
            t
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1000ms" }}
          >
            .
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1100ms" }}
          >
            .
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1200ms" }}
          >
            .
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float-up {
          animation: float-up linear infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
