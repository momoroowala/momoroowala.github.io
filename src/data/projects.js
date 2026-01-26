import { Terminal, LayoutDashboard, Database, Globe } from 'lucide-react';

export const projects = [
    {
        id: 'automatons',
        title: 'Anti-Automatons',
        shortDescription: 'A sophisticated multi-agent AI coding framework.',
        fullDescription: `
            Anti-Automatons is an advanced 3-layer autonomous coding architecture built in Python. 
            It separates "Directive" (Intent), "Orchestration" (Reasoning), and "Execution" (Code) to create highly reliable AI agents.
            
            Key Features:
            - **3-Layer Architecture**: Separation of concerns for reliability.
            - **Self-Annealing**: Agents fix their own tools when they break.
            - **Context Awareness**: Maintains strict context across multiple LLM providers (Claude, Gemini, OpenAI).
        `,
        imageColor: 'from-blue-500 to-cyan-500',
        icon: Terminal,
        stats: [
            { label: 'Language', value: 'Python' },
            { label: 'Type', value: 'AI Agent Framework' },
            { label: 'Status', value: 'Active' }
        ],
        links: [
            { label: 'Local Source', url: '#' } // We might not have a public link yet
        ]
    },
    {
        id: 'atp-central',
        title: 'ATP Central Dashboard',
        shortDescription: 'Gamified Student Dashboard for E-Commerce Education.',
        fullDescription: `
            A high-fidelity, dark-mode React application designed for student engagement. 
            Features a complete "Outreach CRM", "The Vault" file system, and interactive gamification elements.
            
            Key Features:
            - **Gamified Progress**: Badges, Confetti, and Unlockable Content.
            - **CRM Integration**: Functional CSV import and lead tracking wizard.
            - **Action Tracker**: Daily accountability checklist with calendar history.
        `,
        imageColor: 'from-purple-500 to-pink-500',
        icon: LayoutDashboard,
        stats: [
            { label: 'Stack', value: 'React + Vite' },
            { label: 'Theme', value: 'Glassmorphism' },
            { label: 'Deployment', value: 'GitHub Pages' }
        ],
        links: [
            { label: 'Live Demo', url: 'https://momoroowala.github.io/ATPDash/' },
            { label: 'GitHub', url: 'https://github.com/momoroowala/ATPDash' }
        ]
    },
    {
        id: 'github-portfolio',
        title: 'GitHub Portfolio',
        shortDescription: 'My complete collection of open source work.',
        fullDescription: `
            Explore my full history of contributions, experimental projects, and libraries on GitHub.
        `,
        imageColor: 'from-gray-700 to-gray-900',
        icon: Globe,
        stats: [
            { label: 'Repos', value: '20+' },
            { label: 'Contributions', value: 'Active' }
        ],
        links: [
            { label: 'View Profile', url: 'https://github.com/momoroowala' }
        ]
    }
];
