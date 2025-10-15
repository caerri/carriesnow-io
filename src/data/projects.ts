import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'RainSavr',
    description: 'Full-stack personal finance application that aggregates and compares cashback portal rates and credit card rewards in real-time. Features responsive design, TypeScript for type safety, and deployed on AWS EC2. Solves the problem of manually checking multiple sites before every purchase.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AWS EC2'],

  },
  {
    id: '2',
    title: 'HP12c Calculator',
    description: 'Interactive web-based HP12c financial calculator built with React and Next.js, deployed on AWS EC2. Implements complex financial formulas (NPV, IRR, amortization) with accurate RPN logic and responsive UI. Demonstrates understanding of state management, component architecture, and translating business logic into code.',
    technologies: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'AWS EC2'],
  },
  {
    id: '3',
    title: 'ValuatorTools',
    description: 'Full-stack Flask web application for automating real estate valuation report generation. Features user authentication, SQL database integration, and third-party API consumption (Google Address Verification API, OpenStreetMap) for property validation. Focused on UX with intuitive keyboard event listeners for common workflows. Architected to integrate with ATTOM property data API. Reduces report writing time by 60% through intelligent templating and automated data retrieval.',
    technologies: ['Python', 'Flask', 'SQL', 'Google Maps API', 'OpenStreetMap'],
  },
  {
    id: '4',
    title: 'Auction Platform',
    description: 'Full-stack Django web application featuring a complete online auction system. Implemented user authentication, CRUD operations for auction listings, real-time bidding system, watchlist functionality, and user profiles. Built with Django ORM for database management, session-based authentication, and responsive front-end design.',
    technologies: ['Django', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: '5',
    title: 'Pizza Ordering App',
    description: 'React application built from scratch without build tools to understand core React fundamentals. Features menu browsing, pizza customization, cart management, and ordering flow using a third-party API. Focused on learning component architecture, state management with hooks (useState, useEffect), and props flow in a real-world e-commerce context.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
];
