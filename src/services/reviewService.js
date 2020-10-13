
import loader from 'sass-loader';
import { bookService } from './bookService.js'
import { Storage } from './storageService.js';


let gReviews = [{ id: 'sfK24', bookId: 'OXeMG8wNskc', fullName: 'saf sf', rate: 4, desc: 'asfkmsdfm sdmkvksldmv sdkvmskdvmks sdkvmsdkv msdkf' },]
let currReviews;
export const reviewService = {
    addReview,
    removeReview,
    getEmpty,
    getReviews
};

function getReviews(bookId) {
    currReviews = _loadReviews();
    currReviews = currReviews.filter(review => review.bookId === bookId);
    return Promise.resolve(currReviews);
}

function removeReview(reviewId) {
    console.log(reviewId);
    currReviews = currReviews.filter(review => review.id !== reviewId);
    Storage.saveToStorage('reviews', currReviews)
    }

function addReview(review) {
    currReviews.push(review);
    Storage.saveToStorage('reviews', currReviews)
}

function getEmpty(id) {
    return {
        id: bookService.makeId(),
        bookId: id,
        fullName: 'Books Reader',
        rate: 0,
        desc: ''
    }
}

function _loadReviews() {
    currReviews = Storage.loadFromStorage('reviews');
    return (currReviews) ? currReviews : gReviews;
}