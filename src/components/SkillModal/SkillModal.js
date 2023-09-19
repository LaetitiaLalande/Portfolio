import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import "../SkillModal/SkillModal.scss";

const SkillModal = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const outModal = (e) => {
    if (modalOpen && e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div className="skillCard">
      <div className='iconSkill' onClick={toggleModal}>{props.icon}</div>
      {modalOpen && (
        <div className="modal" onClick={outModal}>
          <div className="modalContent ">
            <FaTimes className="btnClose" onClick={toggleModal} />
            <h2>{props.name}</h2>
            <ul>
              {props.description.map((listDescription, index) => (
                <li key={index}>{listDescription}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillModal;
