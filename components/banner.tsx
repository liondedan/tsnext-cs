import styled, { css } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

interface BannerHeight {
  height?: number;
}

const A = styled.div`
  padding-left: 40px !important;
  padding-right: 40px !important;
  background-color: transparent;
  max-width: 1600px !important;
`;

const A1 = styled.div<BannerHeight>`
  ${({ height }) => css`
    padding-top: ${height}vh;
    position: relative !important;
  `}
`;

const B = styled.div`
  position: absolute !important;
  top: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  right: 0px !important;
`;
const B1 = styled.div`
  position: relative !important;
  width: 100vw !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  left: 50% !important;
  right: 50% !important;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center center;
`;
const C = styled.div`
  position: absolute !important;
  top: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  right: 0px !important;
`;

const C1 = styled.div`
  display: table !important;
  position: relative !important;
  height: 100% !important;
  // mobile
  width: 100% !important;
`;

const C2 = styled.div`
  display: table-cell !important;
  vertical-align: middle !important;
`;

const C3 = styled.div`
  position: relative !important;
  margin-top: 0px !important;
  // max-width: 100% !important;
  margin-top: 24px !important;
  margin-bottom: 24px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  text-align: left;
  font-family: 'Circular Std Book' !important;
  max-width: 600px;

  @media (min-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledSection = styled.section`
  background-color: black;
`

interface BannerProps {
  url: string;
  body: string;
  ctaLink: string;
  title: string;
  subtitle: string;
  ctaText: string;
  height?: number;
}

const Banner: React.FunctionComponent<BannerProps> = ({
  url,
  ctaLink,
  title,
  body,
  height = 100,
  subtitle,
  ctaText,
}: any) => (
  <StyledSection>
    <A>
      <A1 height={height}>
        <B>
          <B1>
            <Image
              alt=""
              role="presentation"
              sizes="100vw"
              src={url}
              srcSet={url}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </B1>
        </B>
        <C>
          <C1>
            <C2>
              <C3>
                <Typography
                  style={{ color: 'white', textTransform: 'uppercase' }}
                  variant="h6"
                  component="h6"
                >
                  {subtitle}
                </Typography>
                <Typography
                  variant="h1"
                  style={{ color: 'white' }}
                  component="h1"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Grid>
                  <Typography
                    style={{ color: 'white' }}
                    variant="body1"
                    component="h5"
                  >
                    {body}
                  </Typography>

                  <Button
                    href={ctaLink}
                    style={{
                      marginTop: 40,
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    {ctaText}
                  </Button>
                </Grid>
              </C3>
            </C2>
          </C1>
        </C>
      </A1>
    </A>
  </StyledSection>
);

export default Banner;
