import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface ImageTextProps {
  reverseOrder?: boolean;
  title: string;
  body: string | string[];
  cta?: string;
  imageURL: string;
}

const ImageText: React.FunctionComponent<ImageTextProps> = ({
  imageURL,
  title,
  body,
  reverseOrder,
}) => {
  const createMarkup = (s: string) => {
    return { __html: s };
  };

  const bodyStrut = (s: string) => (
    <Typography variant="body1" component="h6" gutterBottom>
      <div dangerouslySetInnerHTML={createMarkup(s)} />
    </Typography>
  );

  const mapBody = (array: string[]) => array.map(c => bodyStrut(c));

  let bodyText = typeof body == 'object' ? mapBody(body) : bodyStrut(body);

  const img = () => <img src={imageURL} style={{ width: '100%' }} />;
  const content = () => (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {bodyText}
    </>
  );
  return (
    <>
      <Grid item xs={12} sm={6}>
        {reverseOrder ? img() : content()}
      </Grid>
      <Grid item xs={12} sm={6}>
        {reverseOrder ? content() : img()}
      </Grid>
    </>
  );
};

export default ImageText;
