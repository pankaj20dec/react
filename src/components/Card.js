import {CDN_URL} from "../utils/constants";

/** Card Component */
const CardComponent = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData.info;
  return (
    <div className="col-lg-3">
      <div className="card">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          width="283"
          height="190"
          alt="Card Image"
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>Delivery Time: {sla.deliveryTime} mins</p>
      </div>
    </div>
  );
};
export default CardComponent;