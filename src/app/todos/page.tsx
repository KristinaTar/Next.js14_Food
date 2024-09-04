import { URL } from "../constants";
import { TodoItemType } from "@/types/todo";
import TodoItem from "@/components/TodoItem";


const makeRequest = async (query: string) => {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  }).then((res) => res.json());
};


export default async function TodoPage() {
  const data = await makeRequest(`query Todos {
  todos{
    data {
      id
      title
      completed
      user {
        name
      }
    }
  }
}`);


  return (
    <div>
      {data.data.todos.data.map((todo: TodoItemType) => <TodoItem data={todo} />)}
    </div>
  )
}