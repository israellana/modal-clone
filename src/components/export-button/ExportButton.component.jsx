import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from '../../customStyles';
import { jsPDF } from 'jspdf';

import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

function ExportButton() {
  const classes = useStyles();
  const pdfCreate = () => {
    const doc = new jsPDF();

    doc.text('Sua proposta aqui!', 10, 10);
    doc.save('a4.pdf');
  };
  return (
    <div className="bot">
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={pdfCreate}
      >
        <GetAppOutlinedIcon />
      </Button>
      <p>Exportar</p>
    </div>
  );
}

export default ExportButton;
