import { useReducer } from "react"
import { PostNoteState , postItReducer } from "./post-reducer";


const initialPostState: PostNoteState = {
    currentNote:'',
    allNotes:[]
}


export function PostIt(){

    const [postState, dispatch] = useReducer(postItReducer, initialPostState);

    function handlePostNote(event:React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_CURRENT_NOTE", payload: event.target.value})
    }

    function handleAddNote(){
        dispatch({type:"ADD_NOTE"})
    }

    function handledeleteNote(){
        dispatch({type:"DELETE_NOTE"});
    }

    function handleClearNotes(){
        dispatch({type:"CLEAR_NOTES"});
    }
    return<>
    <div style={{ backgroundColor: "yellow", height: "90vh", maxWidth: "400px" }}>
    
    <h1 style={{ backgroundColor: 'Black', color: 'white', padding: '2px', textAlign: "center" }}>Post-it</h1>


    <input style={{ backgroundColor: 'lightgrey', color: 'blue', padding: '10px',  alignItems: "center" }} id="note" type="text" placeholder="Enter content to post" onInput={handlePostNote} />
    <button style={{ backgroundColor: 'lightgrey', color: 'Green' , padding: '10px'}} onClick={handleAddNote}>Add</button>
    <button style={{ backgroundColor: 'lightgrey', color: 'Red', padding: '10px', alignItems: "center" }} onClick={handledeleteNote}>Delete</button>
    <button style={{ backgroundColor: 'lightgrey', color: 'Red', padding: '10px', alignItems: "center" }} onClick={handleClearNotes}>DeleteAll</button>



    <h4  style={{ color: 'Darkbrown' }}  > <b><u>History</u></b></h4>
    <ul style={{ listStyleType: 'none', padding: 0 }}>

    {postState.allNotes.map(n => {
            return <li style={{ backgroundColor: 'lightgray', padding: '10px' }}>{n}</li>;
        
        })}
    
    </ul>
    </div>

    </>




}