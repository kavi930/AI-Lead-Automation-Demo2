export type LeadStage = 
  | 'inbound'
  | 'qualifying'
  | 'scheduled'
  | 'deal_progress'
  | 'won'
  | 'review';

export type LeadTemperature = 'hot' | 'warm' | 'nurture';

export type ChannelSource = 'Enterprise Form' | 'Product Signal' | 'API Webhook' | 'Inbound SDR' | 'Executive Referral';

export interface AuditEvent {
  id: string;
  timestamp: string;
  type: 'sms' | 'email' | 'calendar' | 'enrichment' | 'ai_decision' | 'system';
  actor: 'Autonomous Agent' | 'Lead' | 'Executive AE' | 'System';
  title: string;
  detail: string;
  status: 'completed' | 'in_flight' | 'pending';
}

export interface CommunicationMessage {
  id: string;
  sender: 'ai' | 'lead' | 'executive';
  channel: 'sms' | 'email' | 'call_transcript';
  timestamp: string;
  content: string;
}

export interface LeadAccount {
  id: string;
  company: string;
  domain: string;
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  stage: LeadStage;
  dealValue: number; // e.g. 85000 ($85k)
  temperature: LeadTemperature;
  slaSecondsRemaining: number;
  slaTotalSeconds: number;
  channel: ChannelSource;
  assignedExecutive: string;
  assignedAvatar?: string;
  lastActionText: string;
  lastActionTime: string;
  techStack: string[];
  employees: string;
  intentScore: number; // 0 - 100
  notes: string;
  events: AuditEvent[];
  transcript: CommunicationMessage[];
}

export interface WorkflowNode {
  id: string;
  title: string;
  type: 'trigger' | 'condition' | 'action' | 'fallback';
  category: string;
  description: string;
  status: 'idle' | 'executing' | 'passed' | 'failed';
  config: {
    channel?: string;
    threshold?: string;
    slaLimit?: string;
    actionType?: string;
    delay?: string;
  };
}
