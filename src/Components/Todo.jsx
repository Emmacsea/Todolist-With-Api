import style from "./Todo.module.css";
import plus from "../images/Plus.svg";


import { List } from "./List";

export const Todo = ({ addList, onChangeList, totalTodo, tasks, handleDelete, isDeleteTodo }) => {
  return (
    <div className={style.container}>
      <div className={style.det}>
        <h2>Todo App</h2>
        <p>Lucas Viga</p>
      </div>
      <div className={style.taskslist}>
        <div className={style.add}>
          <input
            type="text"
            onChange={onChangeList}
            placeholder="Add a new task"
          />
          <button onClick={addList}>
            <img src={plus} alt="Add button" />
          </button>
        </div>

        <div className={style.list}>
          <h2>
            Tasks to do - <span>{totalTodo - 1}</span>
          </h2>
          {tasks?.map((task) => {
            return <List task={task} handleDelete={handleDelete} isDeleteTodo={isDeleteTodo} />;
          })}
        </div>

        <div className={style.taskdone}>
          <h2>
            Done - <span>1</span>
          </h2>
          <div className={style.listdone}>
            <p>To study React Fundamentals</p>
          </div>
        </div>
      </div>
    </div>
  );
};


