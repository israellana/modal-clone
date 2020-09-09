import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from '../../customStyles';

import ClipboardButton from '../clipboard-button/ClipboardButton.component';
import EmailButton from '../email-button/EmailButton.component';
import ExportButton from '../export-button/ExportButton.component';
import WhatsappButton from '../whatsapp-button/WhatsaapButton.component';

import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

const proposal = 'Sua proposta';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function ModalComponent() {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  return (
    <Card style={modalStyle} className={classes.paper}>
      <CardContent className={classes.content}>
        <NearMeOutlinedIcon
          color="primary"
          style={{ width: '100px', height: '100px' }}
        />
        <h2>Enviar Proposta</h2>
        <p color="secundary">
          Envie a proposta direto para o e-mail do cliente, copie o link no
          botão abaixo para enviar ou envie uma mensagem de whatsapp.
        </p>
      </CardContent>
      <CardActions className={classes.actions}>
        <EmailButton proposal={proposal} />
        <ClipboardButton proposal={proposal} />
        <WhatsappButton proposal={proposal} />
        <ExportButton proposal={proposal} />
      </CardActions>
    </Card>
  );
}

export default ModalComponent;
