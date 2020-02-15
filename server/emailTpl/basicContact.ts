export interface ContactProps {
  fullName: string;
  message: string;
  emailAddress: string;
  endDate: number;
  startDate: number;
}

const basicContact = ({
  fullName,
  emailAddress,
  startDate,
  endDate,
  message,
}: ContactProps) => `
<h5>${fullName}<h5>
<h5>${emailAddress}<h5>
<p>${startDate} - ${endDate}<p>
<p>${message}<p>
`;

export default basicContact;
