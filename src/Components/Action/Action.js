import React, { Component } from 'react';
import './Action.css';

function Action(props) {
    const { image, alt, theme } = props;
    return (
        <div className={`action_container ${theme}`} >
            <div className="action__item" >
                <img src={image} alt={alt} />
            </div>
        </div>
    );
}

export default Action;


// function Action(props) {
//     const {image, alt, theme} = props;
//     return (
//         <div className="action">
//             <div className="action_container action_container--border">
//                 <div className="action__item">
//                     <img src={props.image  icon_chat} alt='chat' />
//                 </div>
//             </div>
//             <div className="action_container">
//                 <div className="action__item" >
//                     <img src={icon_cart} alt='basket with goods' />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Action;
