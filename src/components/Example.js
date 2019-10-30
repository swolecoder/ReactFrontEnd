import React, {useState,useEffect} from 'react'
/*

Note: 
componentDidMount() {
  this.fetchData();
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.id !== this.state.id) {
    this.fetchData();
  }
}

with hooks:
useEffect(() => {
  this.fetchData();
}, [id]);
*/


const Example = () => {
    const [data, setData] = React.useState([]);
    
    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/todos`).then(res => {
            if (!res.ok) {
              return false;
            }
            res.json().then(data => {
                setData(data);
            });
          });
    }, [data]);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Example;
