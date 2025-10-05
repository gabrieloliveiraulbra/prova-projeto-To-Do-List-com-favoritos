import React, { JSX } from "react";
import { useTasks } from "../types";

export default function Notification(): JSX.Element | null {
  const { notification } = useTasks();

  if (!notification) return null;

  return (
    <div className="notification" role="status" aria-live="polite">
      {notification}
    </div>
  );
}
