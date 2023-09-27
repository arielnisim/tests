import { useEffect, useState } from "react";
import { axiosGet } from "../../utils/axios/axios";
import EntryCard from "../entryCard/EntryCard";

type trips = {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}[];

const HoldsAllCardEntries = () => {
  const [allTrips, setAllTrips] = useState<trips>([]);
  useEffect(() => {
    (async () => {
      const trips: trips = await axiosGet("http://localhost:3000/api/trips");
      setAllTrips(trips);
    })();
  }, []);

  return (
    <div role="holdscards">
      {allTrips.length ? (
        allTrips.map((trip, key) => (
          <div key={key}>
            <EntryCard nameTripe={trip.name} imageURL={trip.image} />
          </div>
        ))
      ) : (
        <p>there are no trips to show</p>
      )}
    </div>
  );
};

export default HoldsAllCardEntries;
