import React, { Component } from 'react'

export class FetchDataAPI extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            isLoading: true,
            error: ''
        };
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(res=>
            this.setState({
                data: res,
                isLoading: false
            })
        )
        .catch(err=>{
            this.setState({
                error: err,
                isLoading: false
            })
        })
    }
  render() {
    let {data, isLoading, error} = this.state
    if(isLoading){
        return <div>Loading . . . </div>
    }else if(error){
        return <div>{error}</div>
    }
    else{
        return <div>{data.map(post=><div><h3>{post.id}</h3><p>{post.title}</p></div>)}</div>
    }
    return (
      <div>
        
      </div>
    )
  }
}

export default FetchDataAPI
