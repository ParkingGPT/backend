export class ChatService {
    async processInput(input: string): Promise<any> {
        input = input.toLowerCase();
        return { response: "Processed response" };
    }
}