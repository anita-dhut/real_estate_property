import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <SEO title="Page Not Found | Nivara Developers" description="The page you are looking for does not exist." />
      <div className="not-found-bg">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="404 Background" />
        <div className="not-found-overlay"></div>
      </div>
      
      <div className="not-found-content fade-up is-visible">
        <h1>404</h1>
        <h2>THIS ADDRESS DOESN'T EXIST.</h2>
        <p>The page you're looking for may have moved or no longer exists.</p>
        <Button to="/" variant="primary">Back Home</Button>
      </div>
    </div>
  );
}
