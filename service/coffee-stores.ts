/* coffee-stores.ts */

import { Store } from "@/models/store";

const getPlacesUrl = (latlong: string, query: string, type: string) => {
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latlong}&keyword=${query}&type=${type}&rankby=distance&key=${process.env.PLACES_API_KEY}`;
}

const getPlaceUrl = (place_id: string) => {
    return `https://maps.googleapis.com/maps/api/place/details/json?fields=name,photos,vicinity,opening_hours&place_id=${place_id}&key=${process.env.PLACES_API_KEY}`;
}


export async function fetchCoffeeStores(latLng: string): Promise<Store[]> {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const response = await fetch(getPlacesUrl(latLng, "coffee", "cafe"), {method: "GET"});
    
      const data = await response.json();

      return data.results as Store[];
}

export async function fetchSingleStore(place_id: string): Promise<Store> {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await fetch(getPlaceUrl(place_id), {method: "GET"});
    
      const data = await response.json();

      return data.result as Store;
}