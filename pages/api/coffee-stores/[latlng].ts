import { fetchCoffeeStores } from "@/service/coffee-stores";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {latlng} = req.query;
    if(typeof latlng !== "string") {
        res.status(400).json({error: "String latLng required!"});
    } else {
        try {
            const data = await fetchCoffeeStores(latlng);
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json({error: e})
        }
    }
}