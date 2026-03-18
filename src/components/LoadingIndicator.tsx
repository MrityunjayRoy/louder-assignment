import { Sparkles } from 'lucide-react';

export default function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-[var(--surface)] rounded-3xl border border-[var(--border)] border-dashed animate-pulse">
      <div className="relative mb-6">
        <div className="h-14 w-14 rounded-full bg-[var(--primary-subtle)] flex items-center justify-center">
          <Sparkles className="h-7 w-7 text-[var(--primary)] animate-[spin_3s_linear_infinite]" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI is planning...</h3>
      <p className="text-sm text-gray-500 text-center max-w-sm leading-relaxed">
        Analyzing your requirements, finding the perfect venue, and estimating costs.
      </p>
    </div>
  );
}
