import { Application } from "express";
import { reviewController } from '../controllers/review.controller';

export class Router {       
    public routes(app: Application): void {

        // Reviews
        app.route('/reviews')
            // GET endpoint
            .get(reviewController.getReviews)
            // POST endpoint
            .post(reviewController.addNewReview);

        // Reviews Bulk
        app.route('/reviews/bulk')
            .post(reviewController.addMultipleReviews);

        // Review detail
        app.route('/reviews/:id')
            // get specific project
            .get(reviewController.getReviewById)
            .put(reviewController.updateReview)
            .delete(reviewController.deleteReview);
    }
}
