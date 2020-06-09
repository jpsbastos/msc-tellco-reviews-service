import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import Review from '../models/review.model'


class ReviewController {
    public getReviews (req: Request, res: Response) {
        Review.find(req.query, (err, task) => {
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }

    public addNewReview (req: Request, res: Response) {
        let newReview = new Review(req.body);

        newReview.save((err, project) => {
            if(err){
                res.send(err);
            }
            res.json(project);
        });
    }

    public addMultipleReviews (req: Request, res: Response) {
        Review.collection.insertMany(req.body)
            .then((result) => {
                console.log("result ", result);
                res.status(200).json({'success': 'new reviews added!', 'data': result});
            })
            .catch(err => {
                console.error("error ", err);
                res.status(400).json({err});
            });
    }

    public getReviewById (req: Request, res: Response) {
        Review.findById(req.params.id, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }

    public updateReview (req: Request, res: Response) {
        Review.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, review) => {
            if(err){
                res.send(err);
            }
            res.json(review);
        });
    }

    public async deleteReview (req: Request, res: Response) {
        Review.remove({ _id: req.params.id }, (err) => {
            if(err){
                return res.send(err);
            }
            return res.json({ message: 'Successfully deleted review!'});
        });
    }
}

export const reviewController = new ReviewController();
