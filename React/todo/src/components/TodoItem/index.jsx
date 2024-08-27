const TodoItem = ({text, onDelete})=>{
    return <div>
        {text}
        <button onClick={onDelete}>Delete</button>
    </div>
};

export default TodoItem;