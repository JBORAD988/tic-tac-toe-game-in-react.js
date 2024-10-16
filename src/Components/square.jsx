import React from "react";
import PropTypes from 'prop-types';

const Square = (props) => {
    return (
       
            <div className="Square" 
            onClick={props.onClick}
            style={{border: "1px solid",height:'100px', width:'100px',display:'flex',justifyContent:"center", alignItems:'center'}}>
                {props.value}
                </div>



        
    )
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
};

export default Square;
