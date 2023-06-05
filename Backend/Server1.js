const { Configuration, OpenAIApi } = require("openai");
const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const app1=express();
app1.use(bodyParser.json());
app1.use(cors());
const configuration = new Configuration({
  organization: "org-EkSzHtA3C4hGSX84jqXdbLmE",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();



const port=4000;
app1.post('/',async(req,res)=>{
    const {message, currentModel}=req.body;
    //console.log(message);
    const response = await openai.createCompletion({
        model: "text-davinci-003",//`${currentModel}`
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      console.log(response.data.choices[0].text);
      res.json({
        message:response.data.choices[0].text,
        //data:message
      })
});
// app.get('/models',async(req,res)=>{
//     const response=await openai.listEngines();
//     console.log(response.data.data);
//     res.json({
//         models : response.data.data
//     })
// })
app1.listen(port,()=>
{
    console.log("listening");
});