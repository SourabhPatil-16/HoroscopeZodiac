import { h } from 'preact';
import '../app.css';
import Modal from 'react-modal';
import { useState } from 'preact/hooks';
import Astro from '../Astro';

// Modal.setAppElement('#root');

const Virgo = (props) => {
  const [isOpen, isSetOpen] = useState(false);

  function toggleModal() {
    isSetOpen(!false);
  }

  function toggleModal2() {
    isSetOpen(false);
  }

  return (
    <>
      <img
        src="https://www.color-meanings.com/wp-content/uploads/zodiac-sign-virgo-1024x896.png"
        class="logo"
        alt="Vite logo"
        onClick={toggleModal}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {isOpen && <Astro sign="virgo" />}

        <button className="close-btn" onClick={toggleModal2}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default Virgo;
