import Locations from "./locations"


export default function LocationItem({ location }) {
    return (
        <div className="border rounded-lg p-4">
            <p className="text-xl font-medium">{location.location_name}</p>
        </div>
    )
}



