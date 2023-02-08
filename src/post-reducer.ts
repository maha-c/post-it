//State
export type PostNoteState = {

    currentNote: string,
    allNotes: string[];

}
//Actions to perform
type SetCurrentNoteAction = {type:"SET_CURRENT_NOTE", payload:string};
type AddNoteAction = {type:"ADD_NOTE"};
type ClearNotesAction = {type:"CLEAR_NOTES"};
type DeleteNoteAction = {type: "DELETE_NOTE"};
export type PostItAction = SetCurrentNoteAction |  AddNoteAction | DeleteNoteAction| ClearNotesAction

//Reducer function
export function postItReducer(state: PostNoteState, action: PostItAction): PostNoteState {

    let newState: PostNoteState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_CURRENT_NOTE": {
            if(action.payload.length>=3){
                newState.currentNote = action.payload;
            }            
            else{newState.currentNote = "";}    
            return newState;
        }
        case "ADD_NOTE": {
            if(newState.currentNote.length>=3){
            newState.allNotes.push(newState.currentNote)
            }else{newState.currentNote = "";}              
            return newState;
        }

        case "DELETE_NOTE": {                       
            newState.allNotes = newState.allNotes.filter((_, i) => i !== newState.allNotes.length - 1);
            return newState;
        }

        case "CLEAR_NOTES": {
            newState.allNotes = [];
            return newState;
        }

    }
}

