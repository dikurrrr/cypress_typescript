// ini adalah config JavaScript
// const { defineConfig } = require("cypress");


// module.exports = defineConfig({
//   video: true,
//   videoCompression: true,
//     component: {
//       supportFile: 'support/component.ts'
//     },
//     e2e: {
//       supportFile: 'cypress/support/e2e.ts'
//     },
//     viewportWidth: 1536,
//     viewportHeight: 960,
//     //set timeout
//     "defaultCommandTimeout": 60000,
//     "pageLoadTimeout": 60000,
//     "requestTimeout":45000
    
// });

const { defineConfig } = require("cypress")
const fs = require("fs")
const path = require("path")
const axios = require('axios')

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  component: {
    supportFile: 'support/component.ts',
  },
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      on('task', {
        writeFile({ path: filePath, content }) {
          const absolutePath = path.resolve(__dirname, filePath)

          return new Promise((resolve, reject) => {
            fs.writeFile(absolutePath, content, (err) => {
              if (err) {
                return reject(err)
              }
              resolve(null)
            });
          });
        },
        async getOtpFromBackendTask(yopmail) {
          try {
            const response = await axios.get(`http://localhost:4000/otp?yopmail=${yopmail}`)

            if (response.data && response.data.data.otp) {
              const otp = response.data.data.otp;
              const filePath = path.resolve('otp.txt')
    
              // Write the OTP to `otp.txt`
              fs.writeFileSync(filePath, otp, 'utf8')
    
              return otp
            } else {
              throw new Error("No OTP found in response.")
            }
          } catch (error) {
            console.error("Error retrieving OTP:", error)
            return null
          }
        }
      })
      

      return config;
    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 45000,
});



// // ini adalah config TypeScript
// import { defineConfig } from 'cypress'

// export default defineConfig({
//   video: true,
//   videoCompression: true,

  
//     // component: {
//     //   supportFile: 'support/component.ts'
//     // },
//     e2e: {
//       supportFile: 'cypress/support/e2e.ts'
//     },
//     viewportWidth: 1536,
//     viewportHeight: 960,
//     //set timeout
//     "defaultCommandTimeout": 60000,
//     "pageLoadTimeout": 60000,
//     "requestTimeout":45000
// })
