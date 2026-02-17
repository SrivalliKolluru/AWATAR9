// ============================================
// AWATAR9 — Content Constants & Data
// ============================================

export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/AWATAR9' : '';

export const SITE = {
    name: 'AWATAR9',
    tagline: 'Designing AI That Delivers',
    description:
        'At AWATAR9, we design smart AI agents for real business challenges Ready-made and custom AI bots that think, act, and deliver results',
    url: 'https://SrivalliKolluru.github.io/AWATAR9',
} as const;

export const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Custom AI', href: '#custom-ai' },
    { label: 'Technology', href: '#technology' },

] as const;

export interface BotCategory {
    title: string;
    description: string;
    icon: string;
    color: string;
}

export const BOT_CATEGORIES: BotCategory[] = [
    {
        title: 'Lead Generation Agents',
        description: 'Automate prospecting and capture high-quality leads around the clock',
        icon: 'Target',
        color: '#ff6b6b',
    },
    {
        title: 'Recruitment Agents',
        description: 'Screen candidates, schedule interviews, and streamline your hiring pipeline',
        icon: 'Users',
        color: '#4dffb5',
    },
    {
        title: 'Sales Outreach Bots',
        description: 'Personalized outreach at scale — emails, follow-ups, and engagement',
        icon: 'TrendingUp',
        color: '#6ea8ff',
    },
    {
        title: 'Data Extraction Bots',
        description: 'Pull, clean, and organize data from any source automatically',
        icon: 'Database',
        color: '#ffd93d',
    },
    {
        title: 'CRM Automation Bots',
        description: 'Keep your CRM updated, trigger workflows, and never miss a follow-up',
        icon: 'Settings',
        color: '#c77dff',
    },
    {
        title: 'Research Assistants',
        description: 'Gather insights, summarize reports, and accelerate decision-making',
        icon: 'Search',
        color: '#ff7eb6',
    },
    {
        title: 'Customer Support Agents',
        description: 'Instant, intelligent responses — 24/7 support without the overhead',
        icon: 'Headphones',
        color: '#00d4aa',
    },
];

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export const CUSTOM_AI_STEPS: ProcessStep[] = [
    { step: 1, title: 'Understand Your Process', description: 'We deep-dive into your workflow to map every detail' },
    { step: 2, title: 'Design the AI Logic', description: 'Custom architecture tailored to your exact requirements' },
    { step: 3, title: 'Build Your Agent', description: 'Development with modern AI stack and best practices' },
    { step: 4, title: 'Test Rigorously', description: 'Thorough testing to ensure reliability and accuracy' },
    { step: 5, title: 'Deploy It', description: 'Seamless deployment into your existing infrastructure' },
    { step: 6, title: 'Maintain It', description: 'Ongoing support, monitoring, and optimization' },
];

export const TECH_STACK = [
    { name: 'n8n Workflows', icon: 'Workflow', color: '#4dffb5' },
    { name: 'AI Agents', icon: 'Bot', color: '#6ea8ff' },
    { name: 'API Integrations', icon: 'Plug', color: '#c77dff' },
    { name: 'Cloud Automation', icon: 'Cloud', color: '#ff7eb6' },
    { name: 'Data Pipelines', icon: 'GitBranch', color: '#ffd93d' },
    { name: 'Secure Infrastructure', icon: 'Shield', color: '#00d4aa' },
] as const;

export const TECH_BENEFITS = [] as const;

export const ACHIEVEMENTS = [
    { text: 'Save time', icon: 'Clock', color: '#4dffb5' },
    { text: 'Reduce manual work', icon: 'Minimize2', color: '#6ea8ff' },
    { text: 'Increase productivity', icon: 'Zap', color: '#ffd93d' },
    { text: 'Improve accuracy', icon: 'CheckCircle', color: '#c77dff' },
    { text: 'Scale faster', icon: 'Rocket', color: '#ff7eb6' },
    { text: 'Lower operational costs', icon: 'DollarSign', color: '#00d4aa' },
] as const;

export const APPROACH_STEPS = [
    { step: 1, title: 'Understand your business' },
    { step: 2, title: 'Identify automation opportunities' },
    { step: 3, title: 'Select or build the right bot' },
    { step: 4, title: 'Customize workflows' },
    { step: 5, title: 'Integrate with your systems' },
    { step: 6, title: 'Launch and optimize' },
] as const;

export const INDUSTRIES = [
    'Staffing Companies',
    'Recruitment Firms',
    'Pharma & CRO Companies',
    'Sales Teams',
    'Startups',
    'Enterprises',
] as const;

export const WHY_CHOOSE = [
    { text: 'Business-focused AI', icon: 'Briefcase', color: '#4dffb5' },
    { text: 'Ready + Custom solutions', icon: 'Package', color: '#6ea8ff' },
    { text: 'Fast deployment', icon: 'Rocket', color: '#ffd93d' },
    { text: 'Modern technology', icon: 'Cpu', color: '#c77dff' },
    { text: 'Dedicated support', icon: 'HeadphonesIcon', color: '#ff7eb6' },
    { text: 'Transparent pricing', icon: 'CreditCard', color: '#00d4aa' },
] as const;
