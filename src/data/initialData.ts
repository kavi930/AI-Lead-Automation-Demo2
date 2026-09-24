import { LeadAccount, WorkflowNode } from '../types/crm';

import marcusAvatar from '../assets/images/avatar_lead_marcus_1790234042391.jpg';
import elenaAvatar from '../assets/images/avatar_lead_elena_1790234055781.jpg';

export const INITIAL_LEADS: LeadAccount[] = [
  {
    id: 'lead-101',
    company: 'Vanguard Cloud Infra',
    domain: 'vanguardcloud.io',
    contactName: 'Marcus Sterling',
    contactTitle: 'VP of Platform Engineering',
    email: 'm.sterling@vanguardcloud.io',
    phone: '+1 (415) 882-9014',
    avatarUrl: marcusAvatar,
    stage: 'scheduled',
    dealValue: 145000,
    temperature: 'hot',
    slaSecondsRemaining: 340,
    slaTotalSeconds: 900,
    channel: 'Enterprise Form',
    assignedExecutive: 'Elena Vance (Enterprise Lead)',
    assignedAvatar: elenaAvatar,
    lastActionText: 'Calendar slot locked: Thursday 2:00 PM EST',
    lastActionTime: '6m ago',
    techStack: ['AWS EKS', 'Datadog', 'Snowflake', 'Terraform'],
    employees: '2,400+',
    intentScore: 96,
    notes: 'Urgent migration from legacy observability pipeline. Seeking enterprise SSO, multi-region residency, and custom SLA.',
    events: [
      {
        id: 'ev-1',
        timestamp: '18m ago',
        type: 'enrichment',
        actor: 'Autonomous Agent',
        title: 'Firmographic Enrichment Completed',
        detail: 'Clearbit identified $180M ARR, SOC2 compliant, evaluated Snowflake footprint.',
        status: 'completed'
      },
      {
        id: 'ev-2',
        timestamp: '12m ago',
        type: 'sms',
        actor: 'Autonomous Agent',
        title: 'Instant Outreach Dispatched via SMS',
        detail: 'Executive greeting sent with two tailored time slots based on Marcus time zone.',
        status: 'completed'
      },
      {
        id: 'ev-3',
        timestamp: '6m ago',
        type: 'calendar',
        actor: 'Lead',
        title: 'Slot Confirmed: Thursday 2:00 PM EST',
        detail: 'Google Meet invite auto-dispatched with Elena Vance and executive brief attached.',
        status: 'completed'
      }
    ],
    transcript: [
      {
        id: 'tr-1',
        sender: 'ai',
        channel: 'sms',
        timestamp: '10:14 AM',
        content: 'Hi Marcus, Elena from the Platform Automation team. Saw Vanguard’s evaluation request for multi-cluster telemetry. Would Thursday at 2:00 PM EST or Friday at 11:00 AM EST work for a tailored architecture review?'
      },
      {
        id: 'tr-2',
        sender: 'lead',
        channel: 'sms',
        timestamp: '10:19 AM',
        content: 'Thursday 2pm EST works best. Can you ensure we cover cross-region data egress encryption and SOC2 Type II compliance?'
      },
      {
        id: 'tr-3',
        sender: 'ai',
        channel: 'sms',
        timestamp: '10:20 AM',
        content: 'Locked in! I’ve added our Head of Security to the brief. Calendar invite and technical whitepaper just hit your inbox.'
      }
    ]
  },
  {
    id: 'lead-102',
    company: 'Aura Therapeutics',
    domain: 'aurarx.com',
    contactName: 'Elena Rostova',
    contactTitle: 'Chief Revenue Operations Officer',
    email: 'elena.rostova@aurarx.com',
    phone: '+1 (617) 492-3118',
    avatarUrl: elenaAvatar,
    stage: 'qualifying',
    dealValue: 220000,
    temperature: 'hot',
    slaSecondsRemaining: 184,
    slaTotalSeconds: 600,
    channel: 'Product Signal',
    assignedExecutive: 'Elena Vance (Enterprise Lead)',
    assignedAvatar: elenaAvatar,
    lastActionText: 'Autonomous qualification: Ingested HIPAA compliance criteria',
    lastActionTime: '2m ago',
    techStack: ['Salesforce Health Cloud', 'Segment', 'BigQuery'],
    employees: '850',
    intentScore: 92,
    notes: 'Triggered product signal after 4 team members hit rate limit on batch validation workflow.',
    events: [
      {
        id: 'ev-4',
        timestamp: '14m ago',
        type: 'system',
        actor: 'System',
        title: 'Product Usage Velocity Spike',
        detail: 'Workspace crossed 150k monthly API calls. Intent score raised to 92.',
        status: 'completed'
      },
      {
        id: 'ev-5',
        timestamp: '2m ago',
        type: 'ai_decision',
        actor: 'Autonomous Agent',
        title: 'AI Synthesized Compliance Dossier',
        detail: 'Verified BAA eligibility and generated customized executive proposal deck.',
        status: 'completed'
      }
    ],
    transcript: [
      {
        id: 'tr-4',
        sender: 'ai',
        channel: 'email',
        timestamp: '10:28 AM',
        content: 'Subject: Expanding Aura Therapeutics API Limits + HIPAA BAA Protocol\n\nElena, noticed your team hit scale ceilings on clinical batch parsing. We have prepared an expedited dedicated instance with our standard BAA.'
      },
      {
        id: 'tr-5',
        sender: 'lead',
        channel: 'email',
        timestamp: '10:32 AM',
        content: 'Spot on. We need to unblock our clinical informatics pipeline before Monday. What does the onboarding turnaround look like?'
      }
    ]
  },
  {
    id: 'lead-103',
    company: 'Palisade Cyber Defense',
    domain: 'palisade.security',
    contactName: 'Julian Thorne',
    contactTitle: 'Head of Global Threat Intelligence',
    email: 'jthorne@palisade.security',
    phone: '+1 (202) 555-0177',
    stage: 'inbound',
    dealValue: 98000,
    temperature: 'hot',
    slaSecondsRemaining: 74,
    slaTotalSeconds: 300,
    channel: 'API Webhook',
    assignedExecutive: 'Elena Vance (Enterprise Lead)',
    assignedAvatar: elenaAvatar,
    lastActionText: 'Autonomous Agent evaluating domain threat scoring',
    lastActionTime: '1m ago',
    techStack: ['Kubernetes', 'Splunk', 'CrowdStrike', 'Kafka'],
    employees: '1,100',
    intentScore: 89,
    notes: 'Inbound submission from high-intent cybersecurity vendor benchmark report.',
    events: [
      {
        id: 'ev-6',
        timestamp: '1m ago',
        type: 'system',
        actor: 'System',
        title: 'Webhook Received via Typeform Enterprise',
        detail: 'Request indicated immediate budget authorization for Q4 deployment.',
        status: 'in_flight'
      }
    ],
    transcript: []
  },
  {
    id: 'lead-104',
    company: 'Krypton Logistics',
    domain: 'kryptonfreight.de',
    contactName: 'Klaus Lindemann',
    contactTitle: 'Director of Autonomous Fleet Systems',
    email: 'k.lindemann@kryptonfreight.de',
    phone: '+49 30 901820',
    stage: 'deal_progress',
    dealValue: 310000,
    temperature: 'warm',
    slaSecondsRemaining: 1820,
    slaTotalSeconds: 3600,
    channel: 'Executive Referral',
    assignedExecutive: 'Elena Vance (Enterprise Lead)',
    assignedAvatar: elenaAvatar,
    lastActionText: 'Redline review underway with European legal counsel',
    lastActionTime: '45m ago',
    techStack: ['SAP S/4HANA', 'Azure IoT', 'PostgreSQL'],
    employees: '5,300',
    intentScore: 98,
    notes: 'Full European supply chain fleet deployment. Master Services Agreement in stage 2 audit.',
    events: [
      {
        id: 'ev-7',
        timestamp: '2h ago',
        type: 'email',
        actor: 'Executive AE',
        title: 'Sent Enterprise Master Agreement v2.4',
        detail: 'Included German data privacy annex and 99.99% uptime guarantee.',
        status: 'completed'
      }
    ],
    transcript: [
      {
        id: 'tr-6',
        sender: 'lead',
        channel: 'email',
        timestamp: '09:15 AM',
        content: 'Our legal team has reviewed Annex 3. The data processing terms are accepted. Awaiting final board sign-off.'
      }
    ]
  },
  {
    id: 'lead-105',
    company: 'Starlight Robotics',
    domain: 'starlightrobotics.ai',
    contactName: 'Chloe Chen',
    contactTitle: 'VP of Hardware Automation',
    email: 'chloe.chen@starlightrobotics.ai',
    phone: '+1 (408) 772-8819',
    stage: 'won',
    dealValue: 180000,
    temperature: 'hot',
    slaSecondsRemaining: 0,
    slaTotalSeconds: 1800,
    channel: 'Enterprise Form',
    assignedExecutive: 'Elena Vance (Enterprise Lead)',
    assignedAvatar: elenaAvatar,
    lastActionText: 'Contract Executed: DocuSign ID #DS-99120',
    lastActionTime: '3h ago',
    techStack: ['ROS2', 'NVIDIA Jetson', 'FastAPI'],
    employees: '340',
    intentScore: 100,
    notes: 'Closed win! Onboarding kickoff meeting scheduled for next Monday.',
    events: [
      {
        id: 'ev-8',
        timestamp: '3h ago',
        type: 'calendar',
        actor: 'Autonomous Agent',
        title: 'Contract Fully Executed & Provisioned',
        detail: 'Starlight Robotics enterprise tenant provisioned in us-east-1.',
        status: 'completed'
      }
    ],
    transcript: [
      {
        id: 'tr-7',
        sender: 'lead',
        channel: 'sms',
        timestamp: 'Yesterday',
        content: 'DocuSign completed on our end. Excited to scale this across our test labs!'
      }
    ]
  },
  {
    id: 'lead-106',
    company: 'Veritas Financial Technologies',
    domain: 'veritasfin.co.uk',
    contactName: 'Alastair Finch',
    contactTitle: 'Chief Compliance & Data Officer',
    email: 'a.finch@veritasfin.co.uk',
    phone: '+44 20 7946 0912',
    stage: 'review',
    dealValue: 165000,
    temperature: 'nurture',
    slaSecondsRemaining: 450,
    slaTotalSeconds: 1200,
    channel: 'Inbound SDR',
    assignedExecutive: 'Elena Vance (Enterprise Lead)',
    assignedAvatar: elenaAvatar,
    lastActionText: 'Custom SLA requirement: 15-minute P1 turnaround demanded',
    lastActionTime: '1h ago',
    techStack: ['FCA Compliant Vault', 'Oracle', 'Red Hat Enterprise'],
    employees: '1,900',
    intentScore: 78,
    notes: 'Requires executive sign-off on 15m P1 SLA penalty clause prior to proceeding.',
    events: [
      {
        id: 'ev-9',
        timestamp: '1h ago',
        type: 'ai_decision',
        actor: 'Autonomous Agent',
        title: 'Escalated to VP of Solutions Architecture',
        detail: 'Custom SLA exception flag triggered automatically.',
        status: 'in_flight'
      }
    ],
    transcript: [
      {
        id: 'tr-8',
        sender: 'lead',
        channel: 'email',
        timestamp: 'Yesterday',
        content: 'Can your executive team warrant a 15-minute response SLA for production incidents? If so, we are prepared to move to POC.'
      }
    ]
  },
  {
    id: 'lead-107',
    company: 'Orbital Grid Power',
    domain: 'orbitalgrid.energy',
    contactName: 'Darius Vance',
    contactTitle: 'Chief Information Officer',
    email: 'd.vance@orbitalgrid.energy',
    phone: '+1 (713) 402-9901',
    stage: 'scheduled',
    dealValue: 275000,
    temperature: 'hot',
    slaSecondsRemaining: 510,
    slaTotalSeconds: 1200,
    channel: 'Enterprise Form',
    assignedExecutive: 'Elena Vance (Enterprise Lead)',
    assignedAvatar: elenaAvatar,
    lastActionText: 'Calendar confirmed: Friday 3:30 PM CST',
    lastActionTime: '12m ago',
    techStack: ['SCADA Systems', 'AWS GovCloud', 'Databricks'],
    employees: '4,200',
    intentScore: 94,
    notes: 'Smart meter data ingestion pipeline upgrade across 12 regional utilities.',
    events: [
      {
        id: 'ev-10',
        timestamp: '12m ago',
        type: 'calendar',
        actor: 'Autonomous Agent',
        title: 'Executive Calendar Locked via Agent',
        detail: 'Autonomous conversational agent confirmed calendar slot and sent GovCloud technical specs.',
        status: 'completed'
      }
    ],
    transcript: [
      {
        id: 'tr-9',
        sender: 'ai',
        channel: 'sms',
        timestamp: '09:40 AM',
        content: 'Hello Darius, Elena Vance’s office following up on your GovCloud data telemetry inquiry. Does Friday 3:30 PM CST suit your calendar?'
      },
      {
        id: 'tr-10',
        sender: 'lead',
        channel: 'sms',
        timestamp: '09:44 AM',
        content: 'Friday at 3:30 works. Please have details on SOC2 Type II and FedRAMP readiness.'
      }
    ]
  }
];

export const INITIAL_WORKFLOW_NODES: WorkflowNode[] = [
  {
    id: 'node-trigger-1',
    title: 'Inbound Webhook Received',
    type: 'trigger',
    category: 'Ingress Engine',
    description: 'Intercepts webhooks from Typeform, Clearbit, and Inbound API',
    status: 'passed',
    config: {
      channel: 'HTTP Webhook / Form API',
      delay: '0ms (Instantaneous)'
    }
  },
  {
    id: 'node-condition-1',
    title: 'Intent Velocity & SLA Filter',
    type: 'condition',
    category: 'Algorithmic Triage',
    description: 'Validates Company Size >= 250, Intent Score >= 80, ARR Potential > $75k',
    status: 'passed',
    config: {
      threshold: 'Score >= 80 & ARR > $75,000',
      slaLimit: 'SLA Window: 5.0 mins max'
    }
  },
  {
    id: 'node-action-1',
    title: 'Autonomous Multi-Channel Outreach',
    type: 'action',
    category: 'Executive Agent',
    description: 'Synthesizes executive context and sends high-touch SMS & email proposing 2 calendar slots',
    status: 'executing',
    config: {
      actionType: 'SMS + Rich Email Dispatch',
      delay: 'Within 90 seconds of lead creation'
    }
  },
  {
    id: 'node-condition-2',
    title: 'Slot Confirmation Intercept',
    type: 'condition',
    category: 'Conversational AI',
    description: 'Detects acceptance of proposed slot or negotiates alternate executive opening',
    status: 'idle',
    config: {
      threshold: 'Natural Language Acceptance Rate: 99.4%'
    }
  },
  {
    id: 'node-action-2',
    title: 'Calendar Lock & Executive Briefing',
    type: 'action',
    category: 'Workflow Automation',
    description: 'Locks Google Meet / Zoom link, generates 1-page account intelligence brief, syncs CRM',
    status: 'idle',
    config: {
      actionType: 'GSuite + Salesforce Enterprise Sync'
    }
  },
  {
    id: 'node-fallback-1',
    title: 'SLA Breach Escalate to Human Lead',
    type: 'fallback',
    category: 'Safety Mechanism',
    description: 'If lead does not respond within 4 minutes, alerts AE desk phone and Slack war room',
    status: 'idle',
    config: {
      threshold: 'Timeout > 240 seconds'
    }
  }
];
