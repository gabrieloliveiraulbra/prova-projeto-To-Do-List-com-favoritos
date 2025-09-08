import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import type { Task } from "../types"; // <- CORRIGIDO

interface TodoItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => toggleTask(task.id)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            tabIndex={-1}
            inputProps={{ "aria-labelledby": `task-${task.id}` }}
          />
        </ListItemIcon>
        <ListItemText
          id={`task-${task.id}`}
          primary={task.text}
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "text.disabled" : "text.primary",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};


export default TodoItem;
