import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from '../../customStyles';

import FilterNoneIcon from '@material-ui/icons/FilterNone';

function clipboardButton({ proposal }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <div className="bot">
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          navigator.clipboard.writeText(proposal);
        }}
      >
        <FilterNoneIcon />
      </Button>
      <p>Copiar Link</p>
    </div>
  );
}

export default clipboardButton;
