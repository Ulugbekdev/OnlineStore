import { ADD_NOTES } from '../../lib/constants';
import type { NotesInitialState, AddNotesAc } from '../../lib/types/notesType/notesType';

let initialState: NotesInitialState = {
    notes: null
}

export default function notesReducer (state = initialState, action: AddNotesAc): NotesInitialState {
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