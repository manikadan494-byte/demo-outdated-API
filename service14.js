const axios=require("axios");

async function test(){
 const res=await axios.post("https://api.openai.com/v1/completions",{
   model:"text-davinci-003",
   prompt:"hello"
 },{
  headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`}
 });
 console.log(res.data);
}
test();
