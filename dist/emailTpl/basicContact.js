"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basicContact = ({ fullName, emailAddress, startDate, endDate, message, }) => `
<h5>${fullName}<h5>
<h5>${emailAddress}<h5>
<p>${startDate} - ${endDate}<p>
<p>${message}<p>
`;
exports.default = basicContact;
//# sourceMappingURL=basicContact.js.map