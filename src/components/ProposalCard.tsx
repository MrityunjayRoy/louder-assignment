import { MapPin, DollarSign, Building } from 'lucide-react';

export interface ProposalData {
  _id?: string;
  prompt: string;
  venueName: string;
  location: string;
  estimatedCost: string;
  justification: string;
  createdAt?: string;
}

interface ProposalCardProps {
  proposal: ProposalData;
  isLatest?: boolean;
}

export default function ProposalCard({ proposal, isLatest = false }: ProposalCardProps) {
  return (
    <div className={`p-6 rounded-3xl border border-[var(--border)] transition-all ${isLatest ? 'bg-[var(--surface)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-[var(--primary-subtle)]' : 'bg-white shadow-sm hover:shadow-md'}`}>
      <div className="mb-4">
        {isLatest && (
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide text-[var(--primary)] uppercase bg-[var(--primary-subtle)] rounded-full">
            Just Planned
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Building className="h-5 w-5 text-[var(--primary)]" />
          {proposal.venueName}
        </h3>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span>{proposal.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <DollarSign className="h-4 w-4 text-gray-400" />
          <span>{proposal.estimatedCost}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-[var(--border)]">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Why it fits:</h4>
        <p className="text-gray-700 leading-relaxed text-sm">
          {proposal.justification}
        </p>
      </div>
      
      {!isLatest && proposal.prompt && (
        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <p className="text-xs text-gray-500 italic">
            Prompt: "{proposal.prompt}"
          </p>
        </div>
      )}
    </div>
  );
}
