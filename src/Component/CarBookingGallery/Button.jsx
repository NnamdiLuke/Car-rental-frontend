import React, { useState } from 'react';
import Data from '../../Data';

function Button({ buttonItems, filterItems, setItem }) {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (category) => {
    setActiveButton(category);
    if (category === 'All') {
      setItem(Data);
    } else {
      filterItems(category);
    }
  };

  return (
    <div className="button-filter">
      <button
        onClick={() => handleButtonClick('All')}
        className={`filter-button ${activeButton === 'All' ? 'active' : ''}`}
      >
        All
      </button>

      {buttonItems.map((val) => (
        <button
          key={val}
          onClick={() => handleButtonClick(val)}
          className={`filter-button ${activeButton === val ? 'active' : ''}`}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

export default Button;