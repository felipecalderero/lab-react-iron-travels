const TravelCard = ({ travelPlan }) => {
  console.log(travelPlan.image);
  return (
    <div className="travelCard">
      <img src={travelPlan.image} />
      <div className="text">
        <h1>
          {travelPlan.destination} ({travelPlan.days} Days)
        </h1>
        <h2>{travelPlan.description}</h2>
        <p>
          <b>Price:</b> {travelPlan.totalCost} €
        </p>
        {travelPlan.totalCost <= 350 && (
          <button className="deal">Great Deal</button>
        )}
        {travelPlan.totalCost >= 1500 && (
          <button className="premium">Premium</button>
        )}
        {travelPlan.allInclusive && (
          <button className="allinclusive">All Inclusive</button>
        )}
      </div>
    </div>
  );
};

export default TravelCard;
