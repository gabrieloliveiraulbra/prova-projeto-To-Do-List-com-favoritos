import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Task } from "./types";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  useEffect(() => {
    // exemplo simples de useEffect (não é persistência, só demonstra o hook)
    console.log("Lista de tarefas atualizada:", tasks);
  }, [tasks]);

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" align="center">
            Minha To-Do List
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary">
            Adicione tarefas e marque como concluídas
          </Typography>
        </Box>

        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} toggleTask={toggleTask} />
      </Paper>
    </Container>
  );
}

export default App;
