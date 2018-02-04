import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={!!input.value}
    onCheck={input.onChange}
  />
);

export default renderCheckbox;
