export interface ContactProps {
  fullName: string;
  message: string;
  emailAddress: string;
  pitchSetup: string;
  departureDate: Date;
  arrivalDate: Date;
  adults: number;
  children: number;
  infants: number;
  dogs: number;
  hookUp: number;
}

let title = (value: any) => {
  return `<h4 style="
    margin-bottom: 5px;
">
${value}:
</h4>`;
};

let body = (value: any) => {
  return `<p style="
    margin-top: 0px;
">${value}</p>`;
};

const basicContact = ({
  fullName,
  emailAddress,
  arrivalDate,
  departureDate,
  message,
  pitchSetup,
  adults,
  children,
  infants,
  dogs,
  hookUp,
}: ContactProps) => `
${title('Name')}
${body(fullName)}

${title('Email')}
${body(emailAddress)}

${title('Message')}
${body(message)}

${title('Arrival Date')}
${body(arrivalDate)}

${title('Departure Date')}
${body(departureDate)}

${title('Pitch Setup')}
${body(pitchSetup)}

${title('Adults')}
${body(adults)}

${title('Children')}
${body(children)}

${title('Infants')}
${body(infants)}

${title('Dogs')}
${body(dogs)}

${title('Hook Up')}
${body(hookUp)}

`;

export default basicContact;
