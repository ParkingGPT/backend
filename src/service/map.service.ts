import axios from 'axios';
import * as dto from "../models/dto/map.dto"
import { Env } from '../env';

export class MapService {
    async test(): Promise<any> {
        // input = input.toLowerCase();
        return { response: "Hello, World!" };
    }

    async findPlace(data: dto.FindPlaceGetParams): Promise<any> {
        try {
            // Construct the API endpoint URL with the validated parameters
            const apiUrl = `https://places.googleapis.com/v1/places:searchText`;

            const headers = {
                'X-Goog-Api-Key': Env.GoogleKey,
                'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.id,places.location'
              };
            const req_data = {
                'textQuery': data.text
            }

            // Make the HTTP GET request to the INRIX Lots API
            const response = await axios.post(apiUrl, req_data, {headers: headers});

            // Return the response data
            return response.data;
        } catch (error) {
            // Handle API request error
            throw new Error(`Error requesting Google FindPLace API: ${error}`);
        }
    }

    async placeRating(data: dto.PlaceRatingGetParams): Promise<any> {
        try {
            // Construct the API endpoint URL with the validated parameters
            const apiUrl = `https://places.googleapis.com/v1/places/${data.id}`;

            const headers = {
                'X-Goog-Api-Key': Env.GoogleKey,
                'X-Goog-FieldMask': 'name,displayName,rating'
              };

            // Make the HTTP GET request to the INRIX Lots API
            const response = await axios.get(apiUrl, {headers: headers});

            // Return the response data
            return response.data;
        } catch (error) {
            // Handle API request error
            throw new Error(`Error requesting Google placeRating API: ${error}`);
        }
    }

    async streetView(data: dto.StreetViewGetParams): Promise<any> {
        try {

            const location = encodeURIComponent(data.location);
            // Construct the API endpoint URL with the validated parameters
            const apiUrl = `https://maps.googleapis.com/maps/api/streetview?location=${location}&size=${data.size}&key=${data.key}`;

            // Make the HTTP GET request to the INRIX Lots API
            const response = await axios.get(apiUrl);

            // Return the response data
            return response.data;
        } catch (error) {
            // Handle API request error
            throw new Error(`Error requesting Google placeRating API: ${error}`);
        }
    }

    async placeReview(data: dto.PlaceReviewGetParams): Promise<any> {
        try {
            // Construct the API endpoint URL with the validated parameters
            const apiUrl = `https://places.googleapis.com/v1/places/${data.id}`;

            const headers = {
                'X-Goog-Api-Key': Env.GoogleKey,
                'X-Goog-FieldMask': 'name,displayName,reviews'
              };

            // Make the HTTP GET request to the INRIX Lots API
            const response = await axios.get(apiUrl, {headers: headers});

            // Return the response data
            return response.data;
        } catch (error) {
            // Handle API request error
            throw new Error(`Error requesting Google placeRating API: ${error}`);
        }
    }

}