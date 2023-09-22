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
    if (modalOpen && e.target.classList.contains('modalOverlay')) {
      closeModal();
    }
  };

  return (
    
    <div className="skillCard" >

      <h3 onClick={toggleModal}>{props.title}</h3>
      <div className='iconContainer' onClick={toggleModal}>

        {/* liste des icones skill */}
        {props.icons.map((icon, index) => (
          <div key={index} >
            <img src={icon} alt="icone Skill" className='iconSkill' />
          </div>
        ))}

      </div>

      {modalOpen && (
        <div className="modalOverlay" onClick={outModal}>

          {/* contenu de la modale */}
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
