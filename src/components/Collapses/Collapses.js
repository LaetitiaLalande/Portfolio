import React from 'react';
import "../Collapses/Collapses.scss";

const Collapses = (props) => {


    return (
        <div className="collapse">
            <h3 >{props.title}</h3>
            <div >
                {props.children}
            </div>
        </div>
    );
};

export default Collapses;
