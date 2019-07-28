import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalOption = (props) => {
    return (
        <div>
            <Modal
                isOpen={ !!props.selectedOption }
                onRequestClose={ props.clearSelectedOption }
                contentLabel="Selected Option"
            >
                <h3>Selected Option</h3>
                { 
                    props.selectedOption && <p>{ props.selectedOption }</p> 
                }
                <button onClick={ props.clearSelectedOption } >Okay</button>
            </Modal>
        </div>
    )
}

export default ModalOption;