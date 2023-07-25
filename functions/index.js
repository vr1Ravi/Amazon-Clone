/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line comma-dangle
  "sk_test_51NXOCsSDqDdFPhppi3ic15FEbsYPfED4xeajKICepzeRSjUXVVfnqnhwPwU7KfqXuR6pHsRvsQ1dqWFknGJRZlYO00uLt8JCgs"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true })); // cors is a security feature that allows us to make request from our frontend to our backend
app.use(express.json()); // this allows us to send data and pass it in json format
// Api routes

app.get("/", (req, res) => {
  res.status(200).send("Hello Home");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(
    "Pyament request received from client for this amount >>> ",
    total
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
// eslint-disable-next-line eol-last
exports.api = functions.https.onRequest(app); // we did this so that we can run the app locally

// http://127.0.0.1:5001/clone-26395/us-central1/api
