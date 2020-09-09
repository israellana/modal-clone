import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from '../../customStyles';

import MailOutlineIcon from '@material-ui/icons/MailOutline';

function EmailButton({ proposal }) {
  const classes = useStyles();

  return (
    <div className="bot">
      <a
        href={`mailto:israellana@hotmail.com?subject=${proposal}&body=${proposal}`}
      >
        <Button
          onClick={() => 'mailto:israellana_@hotmail.com'}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          <MailOutlineIcon />
        </Button>
        <p>E-mail</p>
      </a>
    </div>
  );
}

export default EmailButton;
