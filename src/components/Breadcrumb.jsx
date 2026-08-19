import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className={isLast ? 'active' : ''}>
              <ChevronRight size={14} className="separator" />
              {isLast || !item.path ? (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
