// cookie-session
const cookieSession = require('cookie-session')
let session = cookieSession({
  secure: false // Sensitive
}) 


// express-session
const express = require('express')
const session1 = require('express-session')

let app = express()
app.use(
  session1({
    cookie: {
      secure: false // Sensitive
    }
  })
)

// cookies
const Cookies  = require('cookies');
const cookies = new Cookies(req, res, { keys: keys })

cookies.set('LastVisit', new Date().toISOString(), {
  secure: false // Sensitive
}) 


// csurf
const cookieParser = require('cookie-parser')
const csrf = require('csurf')

let csrfProtection = csrf({ cookie: { secure: false } }) // Sensitive
