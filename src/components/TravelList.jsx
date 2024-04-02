import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div className="list">
      {travelPlans.map((plan) => {
        return <TravelCard key={plan.id} travelPlan={plan} />;
      })}
    </div>
  );
};

export default TravelList;
