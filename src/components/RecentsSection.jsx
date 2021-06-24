import React from 'react';

import HorizontalCards from './HorizontalCards';

function RecentsSection() {
  return (
    <div className="  recents-container">
      <div className="recents-heading largetext-font ">
        <h2> Today's Highlights </h2>
      </div>
      <div className="scrollbar">
        <div className="news-section">
          <HorizontalCards />
        </div>
      </div>
    </div>
  );
}
export default RecentsSection;
