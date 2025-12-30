export type ExperienceItem = {
    title: string;
    descriptor: string;
    image: string;
    href: string;
};

export type ExperienceCategory = {
    id: string;
    title: string;
    slug: string;
    descriptor: string;
    image: string;
    subtext: string;
    experiences: ExperienceItem[];
};

export const categories: ExperienceCategory[] = [
    {
        id: "aviation",
        slug: "private-aviation",
        title: "Private Aviation Experiences",
        descriptor: "High-precision digital systems for the world's most exclusive charter and fleet operations.",
        subtext: "Precision. Fleet. Global Outreach.",
        image: "/cat-aviation.png",
        experiences: [
            {
                title: "Aeronyx V3",
                descriptor: "Next-gen private aviation platform with a 13x increase in digital conversion rates.",
                href: "https://aerionyx-v3.vercel.app/",
                image: "/work-aerionyx-v3.png"
            },
            {
                title: "Luxe Lift Air",
                descriptor: "Premium charter experience platform engineered for cost-efficiency and 68% CPL reduction.",
                href: "https://luxe-lift-air.vercel.app/",
                image: "/work-luxe-lift.png"
            },
            {
                title: "Aeronyx V2",
                descriptor: "A strategic evolution in digital charter systems, optimizing brand authority.",
                href: "https://aerionyx-v2.vercel.app/",
                image: "/work-aerionyx-v2.png"
            }
        ]
    },
    {
        id: "ai",
        slug: "ai-automation",
        title: "AI Automation Platforms",
        descriptor: "Neural architectures and business process automation that eliminate operational drag.",
        subtext: "Automation. Efficiency. Intelligence.",
        image: "/cat-ai.png",
        experiences: [
            {
                title: "Neural Core",
                descriptor: "Enterprise AI orchestration system for automated customer engagement.",
                href: "#",
                image: "/cat-ai.png"
            },
            {
                title: "Process Flow",
                descriptor: "Intelligent automation for high-volume operational workflows.",
                href: "#",
                image: "/cat-ai.png"
            }
        ]
    },
    {
        id: "enterprise",
        slug: "enterprise-saas",
        title: "Enterprise & SaaS Websites",
        descriptor: "Silicon Valley grade web experiences built for scale, complexity, and high-stakes demand.",
        subtext: "Scale. Complexity. Security.",
        image: "/cat-enterprise.png",
        experiences: [
            {
                title: "SaaS Prime",
                descriptor: "High-performance marketing engine for global cloud infrastructure brands.",
                href: "#",
                image: "/cat-enterprise.png"
            }
        ]
    },
    {
        id: "brand",
        slug: "brand-marketing",
        title: "Premium Brand & Marketing",
        descriptor: "Editorial brand experiences designed to capture high-net-worth attention and authority.",
        subtext: "Authority. Editorial. Conversion.",
        image: "/cat-brand.png",
        experiences: [
            {
                title: "Estate Prime",
                descriptor: "Luxury real estate platform engineered for high-precision property discovery.",
                href: "https://real-estate-demo-1-livid.vercel.app",
                image: "/work-realestate.png"
            },
            {
                title: "Aeronyx Studio",
                descriptor: "Curated platform for aviation excellence, delivering 133% growth in digital engagement.",
                href: "https://studio.digion.in/websites/website-aerionyx-air",
                image: "/work-aerionyx-studio.png"
            }
        ]
    }
];
