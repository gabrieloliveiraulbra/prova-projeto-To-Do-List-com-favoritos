import React from "react";
import { List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import type { Task } from "../types";

interface TodoListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTask }) => {
  if (tasks.length === 0) {
    return <Typography color="text.secondary">Nenhuma tarefa ainda.</Typography>;
  }

  return (
    <List>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </List>
  );
};

export default TodoList;
