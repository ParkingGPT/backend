import axios from 'axios';
import * as dto from "../models/dto/ml.dto"
//import { Env } from '../env';

export class MLService{
  async ML(data: dto.MLGetParams): Promise<any> {
    try {

        const apiUrl = `https://localhost:5001/predict`;
        // ?pct=${data.pct}&probability=${data.probability}&available=${data.available}&distance=${data.distance}&price=${data.price}&stars=${data.stars}&construction=${data.construction}&events=${data.events}&congestion=${data.congestion}&hazards=${data.hazards}

        const req_data = {
          "pct": data.pct,
          "probability": data.probability,
          "available": data.available,
          "distance": data.distance,
          "price": data.price,
          "stars": data.stars,
          "construction": data.construction,
          "events": data.events,
          "congestion": data.congestion,
          "hazards": data.hazards,
        }
        const response = await axios.post(apiUrl, req_data);

        const prediction = response.data.prediction;

        return {'prediction': prediction};
    }
    catch (error){
        throw new Error(`Error requesting Inrix auth API: ${error}`);
    }
}
}

// export interface mlParams{
//   pct:number,
//   probability:number,
//   available:number,
//   distance:number,
//   price:number,
//   stars:number,
//   construction: number,
//   events:number,
//   congestion:number,
//   hazards:number
// }