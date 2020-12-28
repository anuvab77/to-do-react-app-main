import React,{useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import {Button, Card, CardContent, Modal, Typography} from "@material-ui/core";
import SingleItem from "./SingleItem";



const App = ()=> {



    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    function handleInput(){
        if (todoName.length===0||todoDate.length===0)
        {
            setTodoSubmitError(true)
            return
        }
        setTodoSubmitError(false)

        setToDo(prevToDo => [...prevToDo,{name: todoName,date:todoDate } ]);
        setModalOpen(false)
        console.log(todo)
    }



    const [todoSubmitError,setTodoSubmitError] = useState(false)
    const [modalOpen,setModalOpen] = useState(false)
    const [todo,setToDo] = useState([])
    const [todoName,setTodoName] = useState("")
    const [todoDate,setToDoDate] = useState("")


    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const body = (
        <div className={"paper"} >
            <form  noValidate autoComplete="off">

                <p color="primary">Add a to do</p>

                <TextField className="input"
                           id="outlined-basic"
                           label="Enter what do you want to do"
                           onChange={(e)=>setTodoName(e.target.value)}
                           variant="outlined" /><br/><br/>
                <TextField className="input"
                           id="outlined-basic" label="Enter date you want to complete the task"
                           variant="outlined"
                           onChange={(e=>setToDoDate(e.target.value))}

                /><br/><br/>
                <p color="red">
                    {todoSubmitError===true?"You cant submit empty todos man!":null}
                </p>

                <Button color={"primary"} variant={"outlined"} onClick={handleInput} >Submit</Button>

            </form>

        </div>
    );




  return (
    <div className="App">


        <Card >
            <CardContent>

                   <h1>To-Do Application</h1>



          <Button variant={"outlined"} onClick={handleOpen}>
              Create a to do
          </Button>
          <Modal
              open={modalOpen}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
          >
              {body}
          </Modal>
                <Typography>


                <h2>Your To-Dos</h2>
                </Typography>


                {todo.length===0?<div>There are no todos yet</div>:null}

                {todo.map((item,index)=>{
                    return <SingleItem name={item.name} key={index} value={index%2===0?1:0} date={item.date} />

                })}



            </CardContent>
        </Card>
    </div>
  );

}


export default App;
