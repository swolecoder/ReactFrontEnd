import React from 'react';
import { TodoItem } from './TodoItem'

export const TodoList  = props => { 
    const { items } = props
    return (
        <ul className="list-group">
        {items.map(item => (
            <TodoItem item={item} markAsCompleted={props.markAsCompleted}/>
        ))}</ul>
    );   
}
