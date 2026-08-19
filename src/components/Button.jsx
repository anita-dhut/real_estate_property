import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ children, to, variant = 'primary', className = '', onClick }) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const combinedClasses = `${baseClass} ${variantClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
