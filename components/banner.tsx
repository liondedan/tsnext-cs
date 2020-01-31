import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const A = styled.div`
  padding-left: 40px !important;
  padding-right: 40px !important;
  background-color: transparent;
  max-width: 1600px !important;
`;

const A1 = styled.div`
  // padding-top: 37.59398496240601% !important;
  padding-top: 100vh;
  position: relative !important;
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

const Banner = () => (
  <section>
    <A>
      <A1>
        <B>
          <B1>
            <Image
              alt=""
              role="presentation"
              sizes="100vw"
              src="http://coastalstay.co.uk/wp-content/uploads/2015/02/camping-pembrokeshire.jpg"
              srcSet="http://coastalstay.co.uk/wp-content/uploads/2015/02/camping-pembrokeshire.jpg"
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
                  Award winning camping
                </Typography>
                <Typography
                  variant="h1"
                  style={{ color: 'white' }}
                  component="h1"
                  gutterBottom
                >
                  Camping in Pembrokeshire
                </Typography>
                <Grid>
                  <Typography
                    style={{ color: 'white' }}
                    variant="body1"
                    component="h5"
                  >
                    Escape to a beautifully finished campsite small-holding
                    located in a National Trust Conservation area with
                    uninterrupted views of the north Pembrokeshire Coast
                    National Park. Relax and experience the magic of a holiday
                    in the heart of Wales
                  </Typography>

                  <Button
                    style={{
                      marginTop: 40,
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    Book your camping trip
                  </Button>
                </Grid>
              </C3>
            </C2>
          </C1>
        </C>
      </A1>
    </A>
  </section>
);

export default Banner;
