import {notes} from '../requests/requests';

const ADD_NOTES = 'ADD-NOTES';

let initialState = {};

export default function notesReducer (state = initialState, action) {
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

const addNotesAc = notes => ({type: ADD_NOTES, notes: notes});

export const getNotes = userId => async dispatch => {
    const res = await notes.getNotes(userId);
    dispatch(addNotesAc(res));
};

export const addNotes = data => dispatch => {
    return notes.addNotes(data);
};

export const delNotes = data => dispatch => {
    return notes.delNotes(data);
};