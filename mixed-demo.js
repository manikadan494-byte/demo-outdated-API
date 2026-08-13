const OpenAI = require('openai');
const Stripe = require("stripe");

const openai = new OpenAI({
 apiKey:process.env.OPENAI_API_KEY
});

const stripe=Stripe(process.env.STRIPE_SECRET);

async function migrate(){
 await openai.createCompletion({
   model:"text-davinci-003",
   prompt:"Say hi"
 });

 await stripe.charges.create({
   amount:1000,
   currency:"usd",
   source:"tok_mastercard"
 });
}
migrate();
