import React, { JSX } from "react";
import TodoList from "../components/TodoList";
import { useTasks } from "../types";

export default function Favorites(): JSX.Element {
  const { tasks } = useTasks();
  const favoriteTasks = tasks.filter((t) => t.isFavorite);

  return (
    <main style={{ maxWidth: 720, margin: "24px auto", padding: "0 12px" }}>
      <h2>Favoritos</h2>
      <TodoList tasks={favoriteTasks} />
    </main>
  );
}
