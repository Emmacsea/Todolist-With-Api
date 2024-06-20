export const TodoList = ({todos}) => {
    return (
        <div>
          
            {todos?.map ((todo) => {
                return (
                    <div>
                        <p>{todo.title}</p>
                    </div>
                        
                )
            })}

         
        </div>
    )

}