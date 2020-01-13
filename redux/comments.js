import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const comment = {...action.payload, id: state.comments.length}
            const comments = [...state.comments, comment]

            return {...state, errMess: null, comments};   

        default:
            return state;
    }
};