import { GET_BLOG_LIST_SUCC } from '../actions/archive'

export const archive = (state=null, action) => {
    switch(action.type) {
        case GET_BLOG_LIST_SUCC:
            return action.data.archive
    }
    return state;
}