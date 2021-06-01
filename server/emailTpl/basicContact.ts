export interface ContactProps {
  fullName: string;
  message: string;
  emailAddress: string;
  pitchSetup: string;
  departureDate: Date;
  arrivalDate: Date;
}

const basicContact = ({
  fullName,
  emailAddress,
  arrivalDate,
  departureDate,
  message,
  pitchSetup,
}: ContactProps) => `
<h5>${fullName}<h5>
<h5>${emailAddress}<h5>
<h5>${pitchSetup}<h5>
<p>${arrivalDate} - ${departureDate}<p>
<p>${message}<p>
`;

export default basicContact;
