import { restro_img } from "../utils/constants";
const RestroCard = (props) => {
  const { restrodata } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    aggregatedDiscountInfoV3,
    sla,
  } = restrodata?.info;

  return (
    <div data-testid="resCard" className="bg-gray-200 hover:bg-gray-300 m-4 p-4 w-52 h-96 rounded-md">
      <div className="card-container">
        <img
          className="w-44 h-44 rounded-md"
          src={restro_img + cloudinaryImageId}
        />
        <h3 className="font-bold py-1">{name}</h3>
        <h4 className="py-0.5 text-sm">{cuisines?.join(", ")}</h4>
        <h4 className="py-0.5 text-sm">{avgRating} stars</h4>
        <h4 className="py-0.5 text-sm">
          {aggregatedDiscountInfoV3?.subHeader}
        </h4>
        <h4 className="py-0.5 text-sm">{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
