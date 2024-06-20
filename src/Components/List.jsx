import style from "./Todo.module.css";
import check from "../images/Group 1.svg";
import trash from "../images/TrashSimple.svg";

export const List = ({ task, handleDelete, isDeleteTodo }) => {


  return (
    <div className={style.task}>
      <p>{task.title}</p>
      <span>
        <img src={check} alt="" />

        { isDeleteTodo ? <div>Please Wait...</div> 
          : <img
          className={style.trash}
          onClick={() => handleDelete(task.id)}
          src={trash}
          alt=""
          
        />}
      </span>
    </div>
  );
};
