// Core Navigation Constants
import { allProjects } from './projects';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Redevelopment', path: '/redevelopment' },
  { name: 'Careers', path: '/careers' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blogs', path: '/blogs' }
];

export const projects = allProjects.map(p => ({
  id: p.id,
  slug: p.slug,
  title: p.name,
  location: p.location + ', ' + p.city,
  status: p.status,
  bhk: p.bhk,
  description: p.description,
  image: p.heroImage
}));

export const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Mission & Vision', path: '/about#vision' },
    { name: 'Careers', path: '/careers' },
    { name: 'News & Insights', path: '/blogs' }
  ],
  projects: [
    { name: 'Ongoing Projects', path: '/projects?filter=ongoing' },
    { name: 'Completed Projects', path: '/projects?filter=completed' },
    { name: 'Society Redevelopment', path: '/redevelopment' }
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ]
};
