import React, { useContext } from 'react';
import { Modal } from '@material-ui/core';
import UserContext from "../Components/Context/index";

// TODO: Add popper to Modal window when clicking on information Modal.

export default function ModalScreen() {    
    const state = useContext(UserContext);
    const { open, modalImage, handleClose } = state;

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            {modalImage}
                
        </Modal>
    )
}