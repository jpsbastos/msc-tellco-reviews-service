import * as mongoose from 'mongoose';
import {configuration} from "../../configuration";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    rating: {
        type: Number,
        //alias: 'overallRating.rating',
        required: true
    },
    productId: {
        required: true,
        //alias: 'itemId',
        //type: Schema.Types.ObjectId
        type: Number
    },
    username: {
        type: String,
        //alias: 'reviewer',
        required: true
    },
    text: {
        type: String,
        //alias: 'reviewText',
        required: true
    },
    date: {
        type: Date,
        //alias: 'submissionTime',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    upVotes: {
        type: Number,
        required: true
    },
    downVotes: {
        type: Number,
        required: true
    },
});

const Review = mongoose.model('review', ReviewSchema);

export default Review;


