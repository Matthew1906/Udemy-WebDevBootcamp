import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    return (
      <div>
        <form onSubmit={props.onSubmitted} className="create-note">
          <input 
            name="title" 
            placeholder="Title" 
            value={props.titleValue}
            onChange={(event)=>{
                props.onChanged(event);
            }}    
            />
          <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="3" 
            value = {props.contentValue}
            onChange={(event)=>{
              props.onChanged(event);
            }}
        />
          <button><AddIcon/></button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;