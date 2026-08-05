const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET);

async function charge(){
  const payment = await stripe.charges.create({
    amount:5000,
    currency:"usd",
    source:"tok_visa"
  });
  console.log(payment);
}
charge();
