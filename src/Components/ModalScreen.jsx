import React, { useContext } from 'react';
import { Modal, Paper} from '@material-ui/core';
import UserContext from "../Components/Context/index";

// TODO: Add popper to Modal window when clicking on information Modal.

const styles = {
    paper:{
        width: "20rem",
        height: "20rem",
        position: "absolute",
        bottom: "30vh",
        right: "42vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
        
    },
    images:{
        width: "20rem",
        height: "20rem",
    }    
}

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
            <Paper style={styles.paper}>
                <img src={modalImage} style={styles.images} alt="modal" />
            </Paper>
            
        </Modal>
    )
}