
import OpenAI from "openai";

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
} );
const model = 'gpt-3.5-turbo';
const modifierText = 'I want to convert this text under quote to read it and convert to two flash appropriate for this text. One Card should contain related question and the other card should contain answer. This should be relavent and include the knowledge from this text under quote I will send to you next. This is a paragraph from a book and I want to make flash cards out of it.The two cards are separated by a new line.The question must and must be end be end with a question mark. The paragraph is under quote. \n\n '


export async function main(content:string) {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: 'user', content: `${modifierText} "${content}" ` }],
    model: model,
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params);

  return chatCompletion
}


