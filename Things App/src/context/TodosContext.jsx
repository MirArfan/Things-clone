import { nanoid } from "nanoid";
import { act } from "react";
import { createContext, useReducer } from "react";

export const TodosContext = createContext();

const action = {
    type: "SUB_TASK",
    todoId: "xt",
    subTasks: "Learn npm",
}

function todosReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                id: nanoid(),
                title: action.title,
                notes: "",
                subTasks: [],
                tags: [],
                date: new Date(),
                deadline: null,
            }];

        case "UPDATE_TODO":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    const changes = {};
                    if (action.title) changes.title = action.title;
                    if (action.notes) changes.notes = action.notes;
                    if (action.date) changes.date = action.date;
                    if (action.deadline) changes.deadline = action.deadline;
                    return {
                        ...todo,
                        ...changes,
                    };
                }
                return todo;
            });
        case "ADD_SUBTASK":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    const newSubTask = [
                        ...todo.subTasks,
                        { id: nanoid(), value: action.value, isCompleted: false }
                    ];


                    return {
                        ...todo,
                        subTasks: newSubTask,
                    }
                }
                return todo;
            });
        case "UPDATE_SUBTASK":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    const changes = {};
                    if (action.value) changes.value = action.value;
                    if (action.isCompleted !== undefined) changes.isCompleted = action.isCompleted;

                    const newSubTasks = todo.subTasks.map((subtask) => {
                        if (subtask.id === action.subTaskId) {
                            return {
                                ...subtask,
                                ...changes,
                            }
                        }
                        return subtask;
                    })
                    return {
                        ...todo,
                        subTasks: newSubTasks,
                    }

                }
                return todo;
            });
        case "DELETE_SUBTASK":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    const newSubTasks = todo.subTasks.filter(
                        (subTask) => subTask.id !== action.subTaskId
                    )
                    return {
                        ...todo,
                        subTasks: newSubTasks,
                    }
                }
                return todo;
            })
        case "ADD_TAG":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    const newTags = [
                        ...todo.tags,
                        { id: nanoid(), value: action.value}
                    ];


                    return {
                        ...todo,
                        tags: newTags,
                    }
                }
                return todo;
            })
        case "DELETE_TAG":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    const newTags = todo.tags.filter(
                        (tag) => tag.id !== action.tagId
                    )
                    return {
                        ...todo,
                        tags: newTags,
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
            id: "1",
            title: "Learn CSS",
            notes: "",
            subTasks: [],
            tags: [],
            date: new Date(),
            deadline: null,
        },
        {
            id: "2",
            title: "Learn HTML",
            notes: "",
            subTasks: [],
            tags: [],
            date: new Date("2023-10-15"),
            deadline: null,
        },
        {
            id: "3",
            title: "Learn node js",
            notes: "",
            subTasks: [],
            tags: [],
            date: new Date(),
            deadline: null,
        },
    ]);

    const uniqueTags=new Set();
    todos.forEach(todo => {
        todo.tags.forEach((tag)=>{
            uniqueTags.add(tag.value);
        })
    });
    console.log(todos);
    const todayTodos = todos.filter(({ date }) => {
        const todayDate = new Date();
        return (
            date.getFullYear() === todayDate.getFullYear() &&
            date.getMonth() === todayDate.getMonth() &&
            date.getDate() === todayDate.getDate()
        );
    });

    return (
        <TodosContext.Provider value={{ todos, todayTodos, uniqueTags: Array.from(uniqueTags), dispatch }}>
            {children}
        </TodosContext.Provider>
    );
}