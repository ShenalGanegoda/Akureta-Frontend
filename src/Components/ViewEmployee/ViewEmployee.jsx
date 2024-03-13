import StarRating from "../StarRating/StarRating";
import "./ViewEmployee.css";

export default function ViewEmployee({ selectedEmployee }) {
  return (
    <>
      <div className="view-employee-main">
        <div className="main-top">
          <img src={selectedEmployee.image} alt="Employee Image"></img>
          <div className="employee-details">
            <h1>{selectedEmployee.employeeName}</h1>
            <div className="stars">
              <StarRating rating={selectedEmployee.rating} />
            </div>

            <hr />
            <p>{selectedEmployee.description}</p>
            <hr />

            <div className="review-analysis">
              <div className="headings">
                <h3 className="total-reviews">Total Reviews : </h3>
                <h3 className="postive-reviews">Positive Reviews : </h3>
                <h3 className="negative-reviews">Negative Reviews : </h3>
              </div>
              <div className="results">
                <h3 className="total-reviews">
                  {selectedEmployee.totalReviews}
                </h3>
                <h3 className="postive-reviews">
                  {selectedEmployee.positiveReviews}
                </h3>
                <h3 className="negative-reviews">
                  {selectedEmployee.negativeReviews}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="main-bottum"></div>
      </div>
    </>
  );
}
