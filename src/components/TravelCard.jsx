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
      </div>
    </div>
  );
};

export default TravelCard;
