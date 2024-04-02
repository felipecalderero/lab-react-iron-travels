import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";

const TravelList = () => {
  return (
    <div className="list">
      {travelPlansData.map((plan) => {
        return <TravelCard key={plan.id} travelPlan={plan} />;
      })}
    </div>
  );
};

export default TravelList;
