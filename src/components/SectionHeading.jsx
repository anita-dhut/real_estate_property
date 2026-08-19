import './SectionHeading.css';

export default function SectionHeading({ eyebrow, title, light = false, align = 'center' }) {
  return (
    <div className={`section-heading align-${align} ${light ? 'light' : 'dark'}`}>
      {eyebrow && <span className="eyebrow fade-up">{eyebrow}</span>}
      <h2 className="title fade-up">{title}</h2>
    </div>
  );
}
