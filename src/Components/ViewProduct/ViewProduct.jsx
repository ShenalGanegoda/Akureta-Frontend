import StarRating from "../StarRating/StarRating";
import "./ViewProduct.css"

export default function ViewProduct({ selectedProduct }) {
  return (
    <>
    <div className="view-product-main">
      <div className="main-top">
        <img src={selectedProduct.image} alt="Product Image"></img>
          <div className="employee-details">
            <h1>{selectedProduct.name}</h1>
            <div className="stars">
              <StarRating rating={selectedProduct.rating} />
            </div>
              
            <hr />
            <p>{selectedProduct.description}</p>
            <hr/>

            <div className="review-analysis">
              <div className="headings">
                <h3 className="total-reviews">Total Reviews : </h3>
                <h3 className="postive-reviews">Positive Reviews : </h3>
                <h3 className="negative-reviews">Negative Reviews : </h3>
              </div>
            <div className="results">
                <h3 className="total-reviews">{selectedProduct.totalReviews}</h3>
                <h3 className="postive-reviews">{selectedProduct.positiveReviews}</h3>
                <h3 className="negative-reviews">{selectedProduct.negativeReviews}</h3>
              </div>
            </div>
        </div>
      </div>
    </div>
      
      
    </>
  );
}
