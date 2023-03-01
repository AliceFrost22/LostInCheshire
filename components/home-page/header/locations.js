import { useState, useEffect } from "react";

export default function Locations() {
  const [location_Names, setLocationNames] = useState([]);

  useEffect(() => {
    fetch("/api/locations")
      .then((response) => response.json())
      .then((data) => setLocationNames(data.map((location) => location.location_name)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {location_Names.map((location_Name) => (
        <p key={location_Name}>{location_Name}</p>
      ))}
      <div>
        <div className="w-full text-center pt-6 pb-4">
      <h className="font-roboto font-light text-sm md:text-xl  ">Alderley | Edge | Chester | Knutsford | Lymm | Macclesfield | Stockton | Heath | Prestbury | Warrington | Wilmslow </h>
      </div>
      </div>
    </div>
  );
}

