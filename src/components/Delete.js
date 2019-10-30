import React from "react";

const Delete = props => {
  const { items, handleDelete } = props;
  const isCompleted = items.filter(item => {
    return item.isCompleted;
  });
  return (
    <div className="row" style={{ marginTop: "20px", marginRight: "20px" }}>
      <button
        className="btn btn-danger btn-md"
        onClick={() => handleDelete()}
        hidden={!isCompleted.length}
      >
        Completed
      </button>
    </div>
  );
};

export default Delete;
