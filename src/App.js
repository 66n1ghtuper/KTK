import React, { useState, useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import N from './N';
import Advantages from './Advantages';
import W from './W';
import E from './E';
import Q from './Q';
import S from './S';
import T from './T';
import Footer from './Footer';

import './App.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);


  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1060); 
  };

  useEffect(() => {
    
    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);
    
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? <Menu /> : <Header />}
      <N /> 
          
       <Advantages /> 
        <W /> 
            <E /> 
              <Q />
              <S />
              <T />
               <Footer />
    </div>
  );
};

export default App;