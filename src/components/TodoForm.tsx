import React, { JSX, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useTasks } from "../types";

export default function TodoForm(): JSX.Element {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const value = text.trim();
    if (!value) return;
    addTask(value);
    setText("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 1, mb: 2 }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Nova tarefa"
        variant="outlined"
        size="small"
        fullWidth
        inputProps={{ "aria-label": "nova tarefa" }}
      />
      <Button type="submit" variant="contained" size="medium">
        Adicionar
      </Button>
    </Box>
  );
}
