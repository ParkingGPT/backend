import axios from "axios";
import {Env} from "../env";
import { ChatPostParams } from "../models/dto/chat.dto";

export class ChatService {
    async chat(chat: ChatPostParams): Promise<any> {
        const apiUrl = `https://api.openai.com/v1/chat/completions`
        const headers = {
            "Authorization": `Bearer ${Env.OPENAI_API_KEY}`,
        }
        const data = {
            "model": "gpt-4-1106-preview",
            "response_format": { "type": "json_object" },
            "messages": chat.messages
        }
        const result = await axios.post(apiUrl, data, { headers: headers });
        const content = result.data['choices'][0]['message']['content']
        return content;
    }
}