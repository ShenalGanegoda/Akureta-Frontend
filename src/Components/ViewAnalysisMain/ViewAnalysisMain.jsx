import "./ViewAnalysisMain.css";
import product from "../../Assets/biriyani.jpg";
import gold_star from "../../Assets/gold _star.png";
import star from "../../Assets/empty_star.png";
import employee from "../../Assets/Photo.jpg";

function ViewAnalysisMain() {
  return (
    <div className="view-analysis-main">
      <div className="left-container">
        <div className="review-top">
          <div className="employeeReviews">
            <div className="employeeHeading">
              <h5>TOTAL PRODUCT REVIEWS</h5>
            </div>
            <h1>12</h1>
          </div>

          <div className="productReviews">
            <div className="productReviewHeading">
              <h5>TOTAL EMPLOYEE REVIEWS</h5>
            </div>
            <h1>54</h1>
          </div>
        </div>
        <div className="review-bottum">
          <div className="review-bottum-top"></div>
          <div className="review-bottum-bottum">
            <div className="most-helpful-reviews">
              <div className="mostHelpfulReviewHeading">
                <h5>MOST HELPFULL REVIEW</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                nam praesentium odio et minima earum unde dicta repellat, rem
                laborum officia, reprehenderit harum. Suscipit vel voluptatibus,
                aliquam ad facere consequatur! Culpa ducimus, ut itaque officiis
                incidunt quidem, nostrum, iste dolorum ea amet placeat. Esse
                adipisci totam minus blanditiis aliquam nesciunt corporis
                molestiae. Possimus modi optio sed fugit facilis, dolorem
                molestias!
              </p>
              <p>Product name or employee name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="overview">
          <div className="topRatedProduct">
            <div className="topRatedProductHeading">
              <h5>TOP RATED PRODUCTS</h5>
            </div>
            <img src={product} alt="top rated product image" />
            <h6>Chicken Biriyani</h6>
            <div className="stars">
              <img src={gold_star} />
              <img src={gold_star} />
              <img src={gold_star} />
              <img src={gold_star} />
              <img src={star} />
            </div>
          </div>

          <div className={"avgNegativeComments"}>
            <div className={"negativeCommentsHeading"}>
              <h5>AVERAGE NEGATIVE COMMENTS</h5>
            </div>
            <h1>02</h1>
          </div>

          <div className="topRatedEmployee">
            <div className="topRatedEmployeeHeading">
              <h5>TOP RATED EMPLOYEE</h5>
            </div>
            <img src={employee} alt="" />
            <h6>Kylie Turhune</h6>
            <div className="stars">
              <img src={gold_star} />
              <img src={gold_star} />
              <img src={gold_star} />
              <img src={gold_star} />
              <img src={star} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAnalysisMain;
