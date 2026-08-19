import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import './Accordion.css';

export default function Accordion({ items, allowMultiple = true }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => prev.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="accordion-wrapper">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          item={item} 
          isOpen={openIndexes.includes(index)} 
          onToggle={() => toggleItem(index)} 
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={onToggle} aria-expanded={isOpen}>
        <span className="accordion-title">{item.question}</span>
        <span className="accordion-icon">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className="accordion-content-wrapper" 
        style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="accordion-content" ref={contentRef}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
