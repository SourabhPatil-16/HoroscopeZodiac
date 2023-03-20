import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      // className={`go-to-top-button ${isVisible ? 'visible' : ''}`}
      className="gotoTop"
      onClick={handleClick}
    >
      Go to Top
    </button>
  );
};

export default GoToTop;
