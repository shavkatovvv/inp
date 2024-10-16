import React, { useContext } from "react";
import { TodoProviderWrapper } from "../providers/todo-provider/todo-provider";
import { DELETE_USER, EDIT_USER } from "../providers/todo-provider/todo-types";

export const CardWrapper = () => {
    const { data, dispatch } = useContext(TodoProviderWrapper);

    const deleteItem = (id) => {
        dispatch({ type: DELETE_USER, id });
    };

    const editItem = (id) => {
        let a = prompt("edit");
        dispatch({ type: EDIT_USER, id, value: { user_name: a } });
    };

    return (
        <div>
            {data?.users?.map((item) => (
                <div key={item.id}>
                    <h1>{item.user_name}</h1>
                    <button onClick={() => deleteItem(item.id)}>delete</button>
                    <button onClick={() => editItem(item.id)}>edit</button>
                </div>
            ))}
        </div>
    );
};
