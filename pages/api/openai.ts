import { OpenAIApi, Configuration } from "openai"; // openai api for chat GPT
import type { NextApiRequest, NextApiResponse } from "next"; // Next types for req, res

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.message !== undefined) {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: req.body.message}],
      });

    res.status(200).json({ text: `${completion.data.choices[0].message}` });
  } else {
    res.status(400).json({ text: "No message provided." });
  }
};