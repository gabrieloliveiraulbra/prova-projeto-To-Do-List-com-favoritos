import React, { createContext, useState, useContext, useEffect, type ReactNode } from "react";

// 1. Definindo a interface de uma tarefa
export interface Task {
    id: number;
    text: string;
    isDone: boolean;
    isFavorite: boolean;
}

// 2. Definindo o que nosso contexto irá fornecer
interface TaskContextType {
    tasks: Task[];
    // Bônus: Adicionando notificação ao contexto
    notification: string;
    // fim do bônus
    addTask: (text: string) => void;
    toggleTaskDone: (id: number) => void;
    toggleTaskFavorite: (id: number) => void;
}

// 3. Criando o Contexto
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// 4. Criando o "Provedor" do Contexto
export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    // Bônus: Estado para a notificação e efeito para limpar a notificação após um tempo
    const [notification, setNotification] = useState('');

    useEffect(() => {
        console.log('Notification changed:', notification); // Log para depuração
        if (notification) {
            const timer = setTimeout(() => {
                setNotification('');
            }, 3000); // A notificação some após 3 segundos 
            return () => clearTimeout(timer);
        }
    }, [notification]);

    // fim do bônus

    // Funções para manipular as tarefas

    const addTask = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text,
            isDone: false,
            isFavorite: false,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const toggleTaskDone = (id: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const toggleTaskFavorite = (id: number) => {
        let taskText = '';
        
        setTasks(prevTasks =>
            prevTasks.map(task => {
                if (task.id === id) {
                    if (!task.isFavorite) {
                        taskText = task.text;
                        // Bônus: Definindo a notificação quando uma tarefa é marcada como favorita
                        setNotification(`Tarefa "${taskText}" adicionada aos favoritos!`);
                        // fim do bônus
                    }
                    return { ...task, isFavorite: !task.isFavorite };
                }
                return task;
            })
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, notification, addTask, toggleTaskDone, toggleTaskFavorite }}>
            {children}
        </TaskContext.Provider>
    );
};

// 5. Criando um Hook customizado para facilitar o uso do contexto
export const useTasks = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTasks deve ser usado dentro de um TaskProvider');
    }
    return context;
};