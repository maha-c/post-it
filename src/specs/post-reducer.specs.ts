import { PostNoteState, postItReducer } from "../post-reducer"


test ("ADD note", ()=>{
    const postState: PostNoteState ={
        currentNote:"bbbbbb",
        allNotes:['aaaaa']
    }
    const nextState = postItReducer(postState, {type:"ADD_NOTE"});
    expect(nextState.allNotes.length).toBe(1);
    console.log(nextState);
})
