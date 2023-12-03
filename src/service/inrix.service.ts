import axios from 'axios';
import * as dto from "../models/dto/inrix.dto"
export class InrixService {
    async lots(data:dto.InrixGetParams): Promise<any> {
        try {
            // Construct the API endpoint URL with the validated parameters
            const apiUrl = `https://api.iq.inrix.com/lots/v3?point=${data.point}&radius=${data.radius}&entry_time=${data.entry_time}&duration=${data.duration}`;

            // Make the HTTP GET request to the INRIX Lots API
            const response = await axios.get(apiUrl);

            // Return the response data
            return response.data;
        } catch (error) {
            // Handle API request error
            throw new Error(`Error requesting INRIX Lots API: ${error}`);
        }
    }
}