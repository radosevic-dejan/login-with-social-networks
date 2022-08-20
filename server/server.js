import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from 'cors';

const host = "localhost";
const port = "5000";
const app = express();

// middlewares
app.use(
  cookieSession({
    name: "session",
    keys: ["social"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

// allow to send sessions from client side
app.use(cors({
    origin: "http://localhost:3000",
    method: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))

app.listen(port, host, () =>
  console.log(`Server running on http://${host}:${port}`)
);
