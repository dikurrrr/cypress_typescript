// const axios = require('axios')
// const fs = require('fs')
// const path = require('path')

// module.exports = (on, config) => {
//   on('task', {
//     async getOtpFromBackendTask(yopmail) {
//       try {
//         const response = await axios.get(`http://localhost:4000/otp?yopmail=${yopmail}`);

//         if (response.data && response.data.data.otp) {
//           const otp = response.data.data.otp;
//           const filePath = path.resolve('otp.txt');

//           fs.writeFileSync(filePath, otp, 'utf8');

//           return otp;
//         } else {
//           throw new Error("No OTP found in response.");
//         }
//       } catch (error) {
//         console.error("Error retrieving OTP:", error);
//         return null;
//       }
//     }
//   });
// };
