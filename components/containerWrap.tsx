import React from 'react';
import Container from '@material-ui/core/Container';

interface CWProps {
  children: any;
  invert?: boolean;
  justifyContent?: boolean;
}

const containerWrap: React.FunctionComponent<CWProps> = ({
  invert = false,
  children,
  justifyContent = false,
}) => {
  const bgColor = invert ? '#F2F2F2' : '#ffffff';
  const center = justifyContent ? 'center' : 'inherit';
  return (
    <div
      style={{
        backgroundColor: bgColor,
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <Container
        style={{
          justifyContent: center,
          textAlign: center,
        }}
        maxWidth="md"
      >
        {children}
      </Container>
    </div>
  );
};

export default containerWrap;
