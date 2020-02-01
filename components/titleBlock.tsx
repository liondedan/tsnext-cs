import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ContainerWrap from '../components/containerWrap';

interface TitleBlockProps {
  title: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
  invert?: boolean;
  justifyContent?: boolean;
  children?: any;
  titleVariant?: string;
}

const TitleBlock: React.SFC<TitleBlockProps> = ({
  title,
  body,
  ctaText,
  ctaLink,
  titleVariant = 'h4',
  invert = false,
  justifyContent = false,
  children,
}) => {
  const variant = titleVariant == 'h4' ? 'h4' : 'h2';
  const variantPadding = titleVariant == 'h4' ? 20 : 40;

  return (
    <ContainerWrap invert={invert} justifyContent={justifyContent}>
      <Grid>
        <Typography
          style={{ textAlign: 'center', paddingBottom: variantPadding }}
          variant={variant}
          gutterBottom
        >
          {title}
        </Typography>
        {body && <Typography style={{ marginBottom: 20 }}>{body}</Typography>}
        {ctaText && ctaLink && (
          <Button
            href={ctaLink}
            style={{
              marginTop: 20,
              justifyContent: 'center',
              textAlign: 'center',
            }}
            variant="contained"
            color="secondary"
            size="large"
          >
            {ctaText}
          </Button>
        )}
        {children}
      </Grid>
    </ContainerWrap>
  );
};

export default TitleBlock;
