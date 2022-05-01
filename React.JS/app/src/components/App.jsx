import React,{useState} from 'react';
import CreateArea from './createArea';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

const App = ()=>{
    const [input, setInput] = useState({
        title:"",
        content:""
    });
    const [notes,setNotes] = useState([]);

    const changeInput = (event)=>{
        const {name, value} = event.target;
        console.log(value)
        setInput(prevInput=>{
            return{
                ...prevInput,
                [name] : value
            }
        })  
    }

    const addNote = (event)=>{
        setNotes(prevNotes=>{
            return [...prevNotes, input];
        })
        setInput({
            title:'',
            content:""
        });
        event.preventDefault();
    }

    const deleteNote = (id)=>{
        setNotes(prevNotes=>{
            return prevNotes.filter((val, index)=>{
                return index!==id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                titleValue = {input.title}
                contentValue = {input.content}
                onChanged = {changeInput}
                onSubmitted = {addNote}
            />
            {notes.map((note,index)=>{
                return <Note 
                    key={index} 
                    id={index} 
                    title={note.title} 
                    content={note.content} 
                    onClicked={deleteNote}
                />
            })}
            <Footer />
        </div>
    );
};

export default App;