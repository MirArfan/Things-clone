import { createContext, useReducer } from "react";

export const TodosContext = createContext();

function todosReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: nanoid(), title: action.title }];
        case "UPDATE_TODO":
            return state.map((todo) => {
                if (todo.id == action.id) {
                    return {
                        id: todo.id,
                        title: action.title,
                    }
                }
                return todo;
            })
        default:
            return state;
    }
}

export function TodosProvider({ children }) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: '1',
            title: "learn CSS",
            notes: "",
            subTasks: [],
            date: new Date(),
            deadline: null,
        },
        {
            id: '2',
            title: "learn HTML",
            notes: "",
            subTasks: [],
            date: new Date(),
            deadline: null,
        },
    ])


    const todayTodos = todos.filter(({ date }) => {
        const todayDate = new Date();
        return (
            date.getFullYear() === todayDate.getFullYear() &&
            date.getMonth() === todayDate.getMonth() &&
            date.getDate() === todayDate.getDate()
        );
    });


    return (
        <TodosContext.Provider value={{ todos, todayTodos, dispatch }}>
            {children}
        </TodosContext.Provider>
    )
}