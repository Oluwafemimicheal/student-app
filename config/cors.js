const cors = require('cors')


const configureCors = () =>{
  return cors({
    //origin -> this will tell that which origins you want user can access your api
    origin: (origin, callback)=>{
      const allowedOrigins = [
        "http://localhost:3100", //local dev
        "https://oluwafemi.com" // production domain
      ]

      if(!origin || allowedOrigins.indexOf(origin) !== -1){
        callback(null, true) // giving permission so that request can be allowed
      }else{
        callback(new Error("Not allowed by cors"))
      }
    },

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Version"
    ],
    exposedHeaders: ["X-Total-Count", "Content-Range"],
    credentials: true, //enable for support cookies,session and jwt
    preflightContinue: false,
    maxAge: 600, // cache preflight in 10 mins (600 second) => avoid sending options requests multiple times
    optionsSuccessStatus: 204 //successful status code
  })
}

module.exports = {configureCors}