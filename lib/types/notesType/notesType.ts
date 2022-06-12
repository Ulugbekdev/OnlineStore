import { ADD_NOTES } from '../../constants';

export type InitialNotes = {
    text: string
    date: string
}

export type NotesInitialState = {
    notes: Array<InitialNotes> | null
};

export type AddNotesAc = {
    type: typeof ADD_NOTES
    notes: Array<InitialNotes>
}

export type GetNotes = string | null;

export type NotesFormData = {
    id: string | null
    date: string | null
    text: string | null
}