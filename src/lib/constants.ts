// ============================================
// AWATAR9 — Content Constants & Data
// ============================================

export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Awatar9' : '';

export const SITE = {
    name: 'AWATAR9',
    tagline: 'Designing AI That Delivers',
    description:
        'At AWATAR9, we design smart AI agents for real business challenges. Ready-made and custom AI bots that think, act, and deliver results.',
    url: 'https://saipraveenmolugu.github.io/Awatar9',
} as const;

export const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Custom AI', href: '#custom-ai' },
    { label: 'Technology', href: '#technology' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
] as const;

export interface BotCategory {
    title: string;
    description: string;
    icon: string;
}

export const BOT_CATEGORIES: BotCategory[] = [
    {
        title: 'Lead Generation Agents',
        description: 'Automate prospecting and capture high-quality leads around the clock.',
        icon: 'Target',
    },
    {
        title: 'Recruitment Agents',
        description: 'Screen candidates, schedule interviews, and streamline your hiring pipeline.',
        icon: 'Users',
    },
    {
        title: 'Sales Outreach Bots',
        description: 'Personalized outreach at scale — emails, follow-ups, and engagement.',
        icon: 'TrendingUp',
    },
    {
        title: 'Data Extraction Bots',
        description: 'Pull, clean, and organize data from any source automatically.',
        icon: 'Database',
    },
    {
        title: 'CRM Automation Bots',
        description: 'Keep your CRM updated, trigger workflows, and never miss a follow-up.',
        icon: 'Settings',
    },
    {
        title: 'Research Assistants',
        description: 'Gather insights, summarize reports, and accelerate decision-making.',
        icon: 'Search',
    },
    {
        title: 'Customer Support Agents',
        description: 'Instant, intelligent responses — 24/7 support without the overhead.',
        icon: 'Headphones',
    },
];

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export const CUSTOM_AI_STEPS: ProcessStep[] = [
    { step: 1, title: 'Understand Your Process', description: 'We deep-dive into your workflow to map every detail.' },
    { step: 2, title: 'Design the AI Logic', description: 'Custom architecture tailored to your exact requirements.' },
    { step: 3, title: 'Build Your Agent', description: 'Development with modern AI stack and best practices.' },
    { step: 4, title: 'Test Rigorously', description: 'Thorough testing to ensure reliability and accuracy.' },
    { step: 5, title: 'Deploy It', description: 'Seamless deployment into your existing infrastructure.' },
    { step: 6, title: 'Maintain It', description: 'Ongoing support, monitoring, and optimization.' },
];

export const TECH_STACK = [
    { name: 'n8n Workflows', icon: 'Workflow' },
    { name: 'AI Agents', icon: 'Bot' },
    { name: 'API Integrations', icon: 'Plug' },
    { name: 'Cloud Automation', icon: 'Cloud' },
    { name: 'Data Pipelines', icon: 'GitBranch' },
    { name: 'Secure Infrastructure', icon: 'Shield' },
] as const;

export const TECH_BENEFITS = [
    'High performance',
    'Easy scaling',
    'Low maintenance',
    'Long-term reliability',
] as const;

export const ACHIEVEMENTS = [
    { text: 'Save time', icon: 'Clock' },
    { text: 'Reduce manual work', icon: 'Minimize2' },
    { text: 'Increase productivity', icon: 'Zap' },
    { text: 'Improve accuracy', icon: 'CheckCircle' },
    { text: 'Scale faster', icon: 'Rocket' },
    { text: 'Lower operational costs', icon: 'DollarSign' },
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
    { text: 'Business-focused AI', icon: 'Briefcase' },
    { text: 'Ready + Custom solutions', icon: 'Package' },
    { text: 'Fast deployment', icon: 'Rocket' },
    { text: 'Modern technology', icon: 'Cpu' },
    { text: 'Dedicated support', icon: 'HeadphonesIcon' },
    { text: 'Transparent pricing', icon: 'CreditCard' },
] as const;
