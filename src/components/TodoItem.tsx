import React, { JSX } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@mui/material";
import type { Task } from "../types";
import { useTasks } from "../types";

interface TodoItemProps {
  task: Task;
}

export default function TodoItem({ task }: TodoItemProps): JSX.Element {
  const { toggleTaskDone, toggleTaskFavorite } = useTasks();

  const onToggleDone = (e?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent) => {
    e?.stopPropagation();
    toggleTaskDone(task.id);
  };

  const onToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleTaskFavorite(task.id);
  };

  return (
    <ListItem divider>
      <ListItemText
        primary={task.text}
        sx={{
          textDecoration: task.isDone ? "line-through" : "none",
          color: task.isDone ? "text.disabled" : "text.primary",
        }}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="favorite"
          onClick={onToggleFavorite}
          size="large"
        >
          <span style={{ fontSize: 18 }}>{task.isFavorite ? "★" : "☆"}</span>
        </IconButton>

        <IconButton edge="end" aria-label="toggle-done" onClick={onToggleDone} size="large" sx={{ ml: 1 }}>
          <Checkbox
            checked={task.isDone}
            onChange={onToggleDone}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-label": "Concluir tarefa" }}
            size="small"
          />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
