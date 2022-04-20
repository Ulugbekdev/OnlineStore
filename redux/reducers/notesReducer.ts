import {notes} from '../requests/requests';

const ADD_NOTES = 'ADD-NOTES';

type InitialStateType = {
    notes: Array<object> | null
};

type AddNotesAcPayloadType = {
    text: string
    date: string
}

type AddNotesAcType = {
    type: typeof ADD_NOTES
    notes: Array<AddNotesAcPayloadType>
}

let initialState: InitialStateType = {
    notes: null
}

export default function notesReducer (state = initialState, action): InitialStateType {
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

const addNotesAc = (notes): AddNotesAcType => ({type: ADD_NOTES, notes: notes});

export const getNotes = userId => async dispatch => {
    const res = await notes.getNotes(userId);
    dispatch(addNotesAc(res.data.body));
};

export const addNotes = data => dispatch => {
    return notes.addNotes(data);
};

export const delNotes = data => dispatch => {
    return notes.delNotes(data);
};