import * as React from "react";

import { withStyles, WithStyles, TextField, MenuItem } from "@material-ui/core";

import styles from "./Select.styles";

export interface Option {
  value: string;
  label: string;
  icon?: string;
}

interface SelectProps extends WithStyles<typeof styles> {
  options: Array<Option>;
}

function Select(props: SelectProps) {
  const { classes, options } = props;
  const [option, setOption] = React.useState(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-select-currency"
        select
        value={option}
        className={classes.root}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default withStyles(styles)(Select);
