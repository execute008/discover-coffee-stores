export interface Store {
    place_id: string;
    name: string;
    photos: Photo[];
    vicinity: string;
    opening_hours: OpeningHours;
}

export interface OpeningHours {
    open_now: boolean;
}

export interface Photo {
    height: number;
    width: number;
    photo_reference: string;
}