import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const iconFont = (icon: any, text: string) => (
  <Typography variant="body1" component="h6" gutterBottom>
    <FontAwesomeIcon
      style={{
        width: '12px',
        marginRight: 12,
        color: '#4caf50',
        marginTop: 14,
      }}
      icon={icon}
    />
    {text}
  </Typography>
);

export default iconFont;
