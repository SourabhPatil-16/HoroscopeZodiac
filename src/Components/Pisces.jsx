import { h } from 'preact';
import '../app.css';
import Modal from 'react-modal';
import { useState } from 'preact/hooks';
import Astro from '../Astro';

// Modal.setAppElement('#root');

const Pisces = (props) => {
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
        src="https://www.color-meanings.com/wp-content/uploads/zodiac-sign-pisces-1024x1012.png"
        class="logo"
        alt="Pisces logo"
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
        {isOpen && <Astro sign="pisces" />}

        <button className="close-btn" onClick={toggleModal2}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default Pisces;
