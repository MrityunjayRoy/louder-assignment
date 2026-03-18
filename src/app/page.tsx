'use client';

import { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import ProposalCard, { ProposalData } from '@/components/ProposalCard';
import LoadingIndicator from '@/components/LoadingIndicator';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const [proposals, setProposals] = useState<ProposalData[]>([]);
  const [currentProposal, setCurrentProposal] = useState<ProposalData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await fetch('/api/proposals');
        if (!res.ok) throw new Error('Failed to fetch history');
        const data = await res.json();
        setProposals(data);
      } catch (err) {
        console.error('Error fetching proposals:', err);
      }
    };
    fetchProposals();
  }, []);

  const handleSearch = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    setCurrentProposal(null);

    try {
      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to generate proposal');
      }

      const newProposal = await res.json();
      setCurrentProposal(newProposal);
      
      // Prepend to history so it maintains sync with DB
      setProposals(prev => [newProposal, ...prev.filter(p => p._id !== newProposal._id)]);
    } catch (err: any) {
      console.error('Generate error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 md:py-20">
      <header className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center justify-center p-3 bg-[var(--primary-subtle)] rounded-2xl mb-6">
          <Sparkles className="h-8 w-8 text-[var(--primary)]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          AI Event Concierge
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Describe your ideal corporate offsite or event. Our AI will perfectly match you with the right venue, location, and budget.
        </p>
      </header>

      <section className="mb-16">
        <SearchForm onSubmit={handleSearch} isLoading={isLoading} />
        {error && (
          <div className="p-4 mb-6 text-sm text-red-700 bg-red-50 rounded-2xl border border-red-100">
            {error}
          </div>
        )}
      </section>

      <div className="space-y-16">
        {isLoading && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <LoadingIndicator />
          </section>
        )}

        {currentProposal && !isLoading && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Proposal</h2>
            <ProposalCard proposal={currentProposal} isLatest={true} />
          </section>
        )}

        {proposals.length > 0 && (
          <section className={isLoading || currentProposal ? "opacity-80 transition-opacity" : ""}>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
              <h2 className="text-xl font-bold text-gray-900">Recent Searches</h2>
              <span className="text-sm text-gray-500 bg-[var(--surface)] px-3 py-1 rounded-full font-medium">
                {proposals.length} events
              </span>
            </div>
            <div className="grid gap-6">
              {proposals.map(proposal => (
                <ProposalCard key={proposal._id || Math.random().toString()} proposal={proposal} />
              ))}
            </div>
          </section>
        )}
        
        {!isLoading && !currentProposal && proposals.length === 0 && (
          <div className="text-center py-20 px-6 bg-[var(--surface)] rounded-3xl border border-[var(--border)] border-dashed">
            <p className="text-gray-500 font-medium">No event proposals yet. Try searching above!</p>
          </div>
        )}
      </div>
    </main>
  );
}
