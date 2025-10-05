import React, { JSX } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home(): JSX.Element {
  return (
    <main style={{ maxWidth: 720, margin: "24px auto", padding: "0 12px" }}>
      <h2>Home — Lista de Tarefas</h2>
      <TodoForm />
      <TodoList />
    </main>
  );
}
