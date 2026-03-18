import mongoose, { Schema, Document } from 'mongoose';

export interface IProposal extends Document {
  prompt: string;
  venueName: string;
  location: string;
  estimatedCost: string;
  justification: string;
  createdAt: Date;
}

const ProposalSchema: Schema = new Schema({
  prompt: { type: String, required: true },
  venueName: { type: String, required: true },
  location: { type: String, required: true },
  estimatedCost: { type: String, required: true },
  justification: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Proposal || mongoose.model<IProposal>('Proposal', ProposalSchema);
