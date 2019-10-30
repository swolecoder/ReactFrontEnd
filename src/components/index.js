import React from "react";
import "./App.css";
import Header from './Header';
import List from './List';
import Delete from './Delete';
// import Example from './Example';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
  }

  componentDidMount() {
    this.fetchDB();
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  fetchDB() {
    /* Recommend using axios library */
    fetch(`${process.env.REACT_APP_API_URL}/todos`).then(res => {
      if (!res.ok) {
        return false;
      }
      res.json().then(data => {
        this.setState({ items: data });
      });
    });
  }

  handleAdd = e => {
    e.preventDefault();
    if (!this.state.text) {
      return false;
    }
    const item = { text: this.state.text, isCompleted: false };
    fetch(`${process.env.REACT_APP_API_URL}/todos/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }).then(res => {
      if (!res.ok) {
        return false;
      }
      this.setState({ text: "" });
      this.fetchDB();
    });
  };

  markAsCompleted = id => {
    fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'}
    }).then(() => { this.setState({ text: '' }, () => this.fetchDB()) }); 
  }

  handleDelete = () => {
    let toDelete = this.state.items.filter(todo => { return todo.isCompleted })
    toDelete.map(item => {
      fetch(`${process.env.REACT_APP_API_URL}/todos/${item._id}`, {
        method: 'DELETE'
      }).then((res)=>{
        this.fetchDB()
      })
    })
  }

  render() { 
    return (
      <div className="container">
        <div className="col-md-12 offset-2">
          <Header
            {...this.state}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
          />
          <List {...this.state} markAsCompleted={this.markAsCompleted} />
          <Delete {...this.state} handleDelete={this.handleDelete} />
          {/* <Example/> */}
        </div>
      </div>
    );
  }
}

export default App;
