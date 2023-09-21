import React, { useState } from 'react';
import "../Collapses/Collapses.scss";

const Collapses = (props) => {
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);

    const toggleCollapse = () => {
        setIsOpenCollapse(!isOpenCollapse);
    };

    return (
        <div className="collapse">
            <h3 onClick={toggleCollapse}>{props.title}</h3>
            <div className={`content ${isOpenCollapse ? "expanded" : ""}`}>
                {props.children}
            </div>
        </div>
    );
};

export default Collapses;
