import * as functions from 'firebase-functions'

exports.sendMailToOwner = functions.https.onRequest((request, response) => {
    const cors = require('cors')({ origin: true })
    cors(request, response, () => {

        const emailjs = require('emailjs/email')
        
        const feedback = request.body

        const server = emailjs.server.connect({
            user: "feed.sahithyan@gmail.com",
            password: "SahithyanSupport",
            host: "smtp.gmail.com",
            port: 465,
            ssl: true
        })
        const html = 
            `<html>
                <body style='font-size: 15px;'>
                    <br>
                    <h2>Feedback</h2>
                    <div>
                        Hi Sahithyan,<br>
                        ${feedback.username} (${feedback.uid}) has given feedback on your app.<br>

                        <h2 align='center'>${feedback.title} (${feedback.category})</h2>
                        ${feedback.description}
                    </div>
                </body>
            </html>`

        server.send({
            from: "Support <feed.sahithyan@gmail.com>",
            to: "sahithyan2701@gmail.com",
            subject: "Feedback from " + feedback.username,
            text: 'Email from Firebase',
            attachment: [{ data: html, alternative: true }]
            
        }, (err: any, message: any) => {
            console.log(err || message)
            })
    })
})

// exports.sendEmailNotification = functions.https.onRequest((request, response) => {
//     const cors = require('cors')
//     cors(request, response, () => {
//         const admin = require('firebase-admin')
//         admin.initializeApp(functions.config().firebase)

//         const payload = {
//             notification: {
//                 title: `Hi`,
//                 body: `You have ${}`
//             }
//         };
        
//         return admin.messaging().sendToTopic("News", payload)
//             .then(function (response) {
//                 console.log('Notification sent successfully:', response)
//             })
//             .catch(function (error) {
//                 console.log('Notification sent failed:', error)
//             });
//     })
// })