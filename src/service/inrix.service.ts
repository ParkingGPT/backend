import axios from 'axios';
import * as dto from "../models/dto/inrix.dto"
//endimport { P } from 'pino';
export class InrixService {

    token: string = '';

    async auth(data: dto.InrixAuthParams): Promise<any> {
        try {

            const apiUrl = `https://api.iq.inrix.com/auth/v1/appToken?appId=${data.appId}&hashToken=${data.hashToken}`;

            const response = await axios.get(apiUrl);

            this.token = "Bearer " + response.data.result.token;
        }
        catch (error){
            throw new Error(`Error requesting Inrix auth API: ${error}`);
        }
    }
    async lots(data:dto.InrixGetParams): Promise<any> {
        // input = input.toLowerCase();
        // try {
            const point = encodeURIComponent(data.point);
        // Construct the API endpoint URL with the validated parameters

            const apiUrl =
            `https://api.iq.inrix.com/lots/v3?point=${point}&radius=${data.radius}`;

            const headers = {
                'Authorization': this.token,
            };


            let result:dto.ParkingLotPredictParams[] = [];

            // Make the HTTP GET request to the INRIX Lots API
            const response = await axios.get(apiUrl, {headers: headers});

            const lots = response.data.result;
            for (let i = 0; i < lots.length; i++) {
                const { error, value } = dto.ParkingLotSchema.validate(lots[i]);
                if (error) {
                    console.log(lots[i]);
                    continue;
                }
                let lot: dto.ParkingLotPredictParams = {
                    name: value.name,
                    address: value.buildingAddress,
                    pct: value.occupancy.pct,
                    probability: value.occupancy.probability,
                    available: value.occupancy.available,
                    distance: value.distance,
                    price: value.costIndex == null ? -1 : value.costIndex,
                    stars: value.reviewScore == null ? -1 : value.reviewScore,
                };
                result.push(lot);
            }

            // Return the response data
            return result;
        // } catch (error) {
        //     // Handle API request error
        //     throw new Error(`Error requesting INRIX Lots API: ${error}`);
        // }

    }

    async incident(data:dto.InrixIncidentParams): Promise<any> {
        try {

            const point = encodeURIComponent(data.point);

            // Construct the API endpoint URL with the validated parameters
            const apiUrl = `https://api.iq.inrix.com/v1/incidents?point=${point}&radius=${data.radius}`;

            const headers = {
                'Authorization': this.token,
            };

            // Make the HTTP GET request to the INRIX Lots API
            let result:IncidentOutput = {
                construction : 0,
                events: 0,
                congestion: 0,
                hazards: 0
            };
            const response = await axios.get(apiUrl, {headers: headers});
            for (let i = 0; i < response.data.result.incidents.length; i++) {
                let incident = response.data.result.incidents[i];
                switch (incident.type){
                    case "1":
                        result.construction += parseInt(incident.severity);
                        break;
                    case "2":
                        result.events += parseInt(incident.severity);
                        break;
                    case "3":
                        result.congestion += parseInt(incident.severity);
                        break;
                    case "4":
                        result.hazards += parseInt(incident.severity);
                        break;
                }
            }

            // Return the response data
            return result;
        } catch (error) {
            // Handle API request error
            throw new Error(`Error requesting INRIX Lots API: ${error}`);
        }
    }
}

export interface IncidentOutput{
    construction : number;
    events: number;
    congestion: number;
    hazards: number;
}