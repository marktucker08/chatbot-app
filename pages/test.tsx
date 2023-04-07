const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
const completion = await openai.createCompletion({
  model: "gpt-3.5-turbo",
  prompt: "How are you today?",
});
console.log(completion.data.choices[0].text);
}

runCompletion();