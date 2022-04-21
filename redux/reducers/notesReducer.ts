import {notes} from '../requests/requests';

const ADD_NOTES = 'ADD-NOTES';

type InitialNotes = {
    text: string
    date: string
}

type InitialState = {
    notes: Array<InitialNotes> | null
};

type AddNotesAc = {
    type: typeof ADD_NOTES
    notes: Array<InitialNotes>
}

type GetNotes = string | null;

type NotesFormData = {
    id: string | null
    date: string | null
    text: string | null
}

let initialState: InitialState = {
    notes: null
}

export default function notesReducer (state = initialState, action): InitialState {
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

const addNotesAc = (notes): AddNotesAc => ({type: ADD_NOTES, notes: notes});

export const getNotes = (userId: GetNotes) => async dispatch => {
    const res = await notes.getNotes(userId);
    dispatch(addNotesAc(res.data.body));
};

export const addNotes = (data: NotesFormData) => dispatch => {
    return notes.addNotes(data);
};

export const delNotes = (data: NotesFormData) => dispatch => {
    return notes.delNotes(data);
};