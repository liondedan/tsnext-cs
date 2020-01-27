import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const StyledCard = ({ imgURL, title, body }: any) => (
  <Card>
    <CardMedia style={{ height: '200px' }} image={imgURL} />
    <CardContent style={{ padding: 20 }}>
      <Typography
        variant="h5"
        style={{ marginBottom: 10 }}
        component="h6"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography variant="h3" component="h5">
        {body}
      </Typography>
      <Button style={{ marginTop: 20 }}>Our Features</Button>
    </CardContent>
  </Card>
);

export default StyledCard;
