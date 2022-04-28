import { ADD_NOTES } from './../../lib/constants';
import type { NotesInitialState } from './../../lib/types';

let initialState: NotesInitialState = {
    notes: null
}

export default function notesReducer (state = initialState, action): NotesInitialState {
    switch (action.type) {
        case ADD_NOTES:
            return {
                ...state,
                notes: action.notes
            }
        default:
            return state;
    }
}