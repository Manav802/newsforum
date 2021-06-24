import React from 'react';
// import { motion } from 'framer-motion';
import { Search } from 'react-bootstrap-icons';

function Header() {
  // const [openSearch, setOpenSearch] = useState(false);
  // const OpenSearch = (openstate) => {
  //   setOpenSearch(openstate);
  // };
  return (
    <div className="sticky-top header text-color-light">
      <div className="d-flex user-header align-items-center">
        <div className="container-fluid d-flex justify-content-between align-items-center"></div>
      </div>
      <div className="navigation d-flex align-items-center p-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="header-name">
            <h2>KHABAREIN</h2>
          </div>
          <div className="d-flex">
            <div className="search_bar">
              <Search size={32} />
              <input />
            </div>
            <div className="d-flex justify-content-evenly menu">
            
              <a className="linkstyle" href="/">Home</a>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
