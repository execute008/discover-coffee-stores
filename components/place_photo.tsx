import { Photo } from "@/models/store";
import Image from "next/image";

export default function PlacePhoto({ photo, name, width, height, className } :
    { photo: Photo, name: string, width: number, height: number, className?: string }
) {
    if (!photo) {
        return <div>Photo not Found!</div>;
    } else {
        return <Image className={className ?? ""}
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photo.width}&photoreference=${photo.photo_reference}&key=${process.env.PLACES_API_KEY}`}
            alt={name} width={width} height={height}
        />
    }
}