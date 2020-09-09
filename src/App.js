import React, { useState } from 'react';
import { Button, Grid, Modal } from '@material-ui/core';
import ModalComponent from './components/modal-content/Modal.component';

function App() {
  const [modalActive, setModalActive] = useState(false);

  const handleShowModal = () => {
    modalActive === true ? setModalActive(false) : setModalActive(true);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleShowModal}
        >
          Abrir modal
        </Button>
        <Modal open={modalActive} onClose={handleShowModal}>
          <ModalComponent />
        </Modal>
      </Grid>
    </Grid>
  );
}

export default App;
