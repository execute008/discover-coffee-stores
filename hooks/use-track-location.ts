import { useState } from "react"

export const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMessage] = useState('')
    const [latLng, setLatLng] = useState("");
    const [isFindingLocation, setIsFindingLocation] = useState(false);
    
    const success = (position: GeolocationPosition) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const alt = position.coords.altitude;

        setLatLng(`${lat},${lng}`);
        setLocationErrorMessage("");
    }

    const error = () => {
        setLocationErrorMessage("Unable to retrive your location")
    }

    const handleTrackLocation = () => {
        setIsFindingLocation(true);
        if(!navigator.geolocation) {
            setLocationErrorMessage("Geolocation is not supported by your browser");
            setIsFindingLocation(false);
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
            setIsFindingLocation(false);
        }
    }
    return {
        latLng,
        handleTrackLocation,
        locationErrorMsg,
    }
}
