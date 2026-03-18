import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const LOADING_PHRASES = [
  "Analyzing your requirements...",
  "Scouting the perfect venues...",
  "Estimating costs and budgets...",
  "Finalizing the proposal..."
];

export default function LoadingIndicator() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhaseIndex((prev) => (prev + 1) % LOADING_PHRASES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-[var(--surface)] rounded-3xl border border-[var(--border)] border-dashed animate-pulse">
      <div className="relative mb-6">
        <div className="h-14 w-14 rounded-full bg-[var(--primary-subtle)] flex items-center justify-center">
          <Sparkles className="h-7 w-7 text-[var(--primary)] animate-[spin_3s_linear_infinite]" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">AI is planning...</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-sm leading-relaxed transition-opacity duration-300">
        {LOADING_PHRASES[phaseIndex]}
      </p>
    </div>
  );
}
