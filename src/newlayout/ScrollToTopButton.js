import React from 'react';

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling animation
    });
  };

  return (
    <a href="#top" onClick={scrollToTop} className="scroll-to-top">
      Scroll to Top
    </a>
  );
}

export default ScrollToTopButton;
