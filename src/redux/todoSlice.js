import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

// Création du slice Redux pour les tâches avec Immer intégré
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // Action pour ajouter une tâche
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                texte: action.payload,
                completed: false,
            });
        },
        // Action pour marquer une tâche comme terminée
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

// Exportation des actions et du reducer
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
