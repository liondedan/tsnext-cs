import styled from 'styled-components';

interface props {
  children: any;
}

const Href = styled.a<props>(
  ({ theme }) => `
    color: ${theme.color.primary};
    font-size: ${theme.text.body};
  `
);

export default Href;
