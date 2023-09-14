import React, { useState } from 'react';
import "../Collapses/Collapses.scss";
import { FaChevronUp } from 'react-icons/fa';

const Collapses = (props) => {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);

    const toggleCollapse = () => {
        setIsOpenCollapse(!isOpenCollapse);
    };

    return (
        <div className="collapse">
            <div className="collapseHeader">
                <h3>{props.title}</h3>
                <div className={`fa-chevron-up ${isOpenCollapse ? "rotated" : ""}`}>
                    <FaChevronUp onClick={toggleCollapse} />
                </div>
            </div>
            <div className={`content ${isOpenCollapse ? "expanded" : ""}`}>
                {props.children}
            </div>
        </div>
    );
};

export default Collapses;
