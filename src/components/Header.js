import React from 'react'

const Header = ({ handleChange, handleAdd, items, text }) => {
    return (
        <div>
          <h3 className="apptitle">TO DO</h3>
          <form className="row">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                onChange={e => handleChange(e)}
                value={text}
              />
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-success"
                onClick={e => handleAdd(e)}
                disabled={!text}
              >
                {"Add " + (items.length + 1)}
              </button>
            </div>
          </form>
          <br />
        </div>
      );
}

export default Header
