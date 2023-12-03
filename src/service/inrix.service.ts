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
            console.log(this.token)
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
            `https://api.iq.inrix.com/lots/v3?point=${point}&radius=${data.radius}&entry_time=${data.entry_time}&duration=${data.duration}`;

            const headers = {
                'Authorization': this.token,
            };

            console.log(headers);

            let result:ParkingLot[] = [];

            // Make the HTTP GET request to the INRIX Lots API
            const response = await axios.get(apiUrl, {headers: headers});

            console.log(response);

            const lots = response.data.result;
            for (let i = 0; i < lots.length; i++) {
                let lot : ParkingLot = {
                    pct: 0,
                    probability: 0,
                    available: 0,
                    distance: 0,
                    price: 0, // costindex
                    stars: 0 // reviewScore
                };
                lot.pct = lots[i].occupancy.pct;
                lot.probability = lots[i].occupancy.probability;
                lot.available = lots[i].occupancy.available;
                lot.distance = lots[i].distance;
                lot.price = lots[i].costIndex !== null ? lots[i].costIndex : -1;
                lot.stars = lots[i].reviewScore !== null ? lots[i].reviewScore : -1;
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
                cogestion: 0,
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
                        result.cogestion += parseInt(incident.severity);
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
    cogestion: number;
    hazards: number;
}

export interface ParkingLot{
    pct:number;
    probability:number;
    available:number;
    distance:number;
    price:number; // costindex
    stars:number; // reviewScore
}