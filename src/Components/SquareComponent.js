import React from "react";
import "../index.css"

const SquareComponent = (props) => {
    const styles = props.className ? `${props.className} square-style` : "square-style"
    return (
        <span 
        className={styles}
        onClick={props.onClick}
        >
            {props.state}
        </span>
    )
}

export default SquareComponent