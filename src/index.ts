import { configSecrets } from './lib/env';
configSecrets();
import { Configuration, OpenAIApi } from 'openai';

// Set up the OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function init() {
  // Test the API
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    temperature: 0,
    max_tokens: 7,
  });

  console.log(response.data);
}

init();
