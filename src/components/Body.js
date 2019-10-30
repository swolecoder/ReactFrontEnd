import React from 'react'
import Empty from './Empty';
import { TodoList } from "../components/TodoList";

const Body = (props ) => {
    const { items } = props
    const isEmpty = !items.length

    if (isEmpty) {
        return <Empty />;
      } else {
        return (
          <div className="row">
            <div className="col-md-6">
              <TodoList {...props} />
            </div>
          </div>
        );
      }
}

export default Body
