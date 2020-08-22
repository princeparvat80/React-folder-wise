import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotion';
import { LEADERS } from '../shared/Leaders';
import { DISHES } from '../shared/dish'

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState , action ) => {
    return state;
}