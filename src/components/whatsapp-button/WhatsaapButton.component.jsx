import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from '../../customStyles';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function WhatsappButton({ proposal }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <div className="bot">
      <a
        href={`https://api.whatsapp.com/send?phone=5511994659038&text=${proposal}`}
      >
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#25D366' }}
        >
          <WhatsAppIcon />
        </Button>
        <p>WhatsApp</p>
      </a>
    </div>
  );
}

export default WhatsappButton;
