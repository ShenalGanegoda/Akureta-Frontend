import './ProductReviewMain.css'
import food from '../../Assets/biriyani.jpg'
import gold_star from '../../Assets/gold _star.png'
import empty_star from '../../Assets/empty_star.png'

function ProductReviewMain(){

    return(
        <div className="main">
            <div className="details_panel">
                    <img src={food} alt="employee" />
                    <div className="employee_details">
                        <div className="data_block">
                            <h1>Chettinadu Chicken Biriyani</h1>
                            <span className="stars">
                                <img src={gold_star} alt="gold star" className="star1"/>
                                <img src={gold_star} alt="gold star" className="star2"/>
                                <img src={gold_star} alt="gold star" className="star3"/>
                                <img src={gold_star} alt="gold star" className="star4"/>
                                <img src={empty_star} alt="gold star" className="star5"/>
                            </span>
                        </div>

                        <div className="despcription_block">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum odit molestias iste dolores inventore cupiditate officiis sapiente repellendus earum modi cum quidem nostrum est velit dicta, eius eaque illum.</p>
                        </div>

                        <div className="review_block">
                            <div className="review_decriptions">
                                <h5 className="total_review_label">Total Reviews</h5>
                                <h5 className="positive_reviews_label">Postive Reviews</h5>
                                <h5 className="negative_reviews_label">Negative Reviews</h5>
                            </div>
                            <div className="review_results">
                                <span className="total_reviews">100</span>
                                <span className="positive_reviews_label">90</span>
                                <span className="negative_reviews">10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProductReviewMain