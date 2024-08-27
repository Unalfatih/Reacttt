import { useEffect, useState } from "react";
import TodoItem from "../TodoItem";
import axios from "axios";
import cn from "classnames";
import "./index.scss";

const todoUrl = "http://localhost:5001/todo";

const Todo = ()=>{
    const [todoList, setTodoList] = useState([]);
    const [isOdd, setIsOdd] = useState(false);
    
    const onSubmit=(e)=>{
        e.preventDefault();
        const val =e.target.todo.value;
        e.target.reset();
        axios.post(todoUrl,{
            todo:val,
        }).then(response=>{
            setTodoList(prevState => [...prevState, response.data])
            
        });
    }

        //todo isteğini db POST yapma
        // fetch("http://localhost:5001/todo",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({text:val}),
        // });

    const handleDelete = (id) =>{
        axios.delete(`${todoUrl}/${id}`).then(response =>{
            if(response.request.status ===200){
                setTodoList((prevState) => prevState.filter(item => item.id !== id));

            }
        });
    };

    useEffect(()=>{
        setIsOdd(todoList.length % 2 !== 0);
    },[todoList]) //dependency arraydaki herhangi bir şey değiştiğinde useEffect çalışacak

    useEffect(()=>{
        //sayfa yüklendiğinde buradaki kod çalışır
        axios.get(todoUrl).then(response =>{
            setTodoList(response.data);           
        });
        
    },[]) // çünkü dependency array boş
    return (
    <>
        <form className="todoForm" onSubmit={onSubmit}>
            <input name="todo" type="text" placeholder="Enter your todo" />
            <button type="submit"
            //  style={{backgroundColor: isOdd ? "blue" : "red"}}
            className={cn("btn", {odd: isOdd , even: !isOdd})}
            >
                Add
            </button>
        </form>
        <div>
            {todoList.map((item ) => (
                <TodoItem key={item.id} text = {item.todo} onDelete={()=>handleDelete(item.id)}/>

            ))}
        </div>
    </>
    );
};

export default Todo;

//db json çalıştırmak için : npx json-server --watch db.json(dosya yolu veya terminali orda aç) --port 5001