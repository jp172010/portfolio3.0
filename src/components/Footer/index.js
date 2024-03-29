import React from 'react';
import "./footer.css";

var style = {
    backgroundColor: "#3f51b5",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '20px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div id="foot">
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer