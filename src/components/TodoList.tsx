import React from "react";
import { List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import type { Task } from "../types";
import { useTasks } from "../types";

interface TodoListProps {
  tasks?: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks: tasksProp }) => {
  const { tasks: tasksFromContext } = useTasks();
  const list = tasksProp ?? tasksFromContext;

  if (!list || list.length === 0) {
    return <Typography color="text.secondary">Nenhuma tarefa ainda.</Typography>;
  }

  return (
    <List>
      {list.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TodoList;
