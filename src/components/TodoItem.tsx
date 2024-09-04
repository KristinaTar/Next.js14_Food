import { TodoItemType } from "@/types/todo";
import React from "react";

type TodoItemProps = {
  data: TodoItemType;
};

// export default function TodoItem( data : TodoItemType){
//   return (
//     <div>{data.title}</div>
//
//   )
// }

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
    </div>
  );
};

export default TodoItem;