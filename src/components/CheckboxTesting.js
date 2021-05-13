import React,{useState} from 'react';
import {Checkbox} from 'evergreen-ui';
export function CheckboxTesting() {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        label="Controlled"
        checked={checked}
        onChange={() => setChecked(checked?false:true)}
      />
    )
  }