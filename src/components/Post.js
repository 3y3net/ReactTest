import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        post: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({post: data})
    }

    render() {
        return (
            <div>
             <h1>Posts</h1>
             {
                 this.state.post.map( post => {
                     return <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                     </div>
                 })
             }
            </div>
        )
    }
}


