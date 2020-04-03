import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag';
import{Link,hashHistory} from 'react-router';
import  query  from '../queries/FetchSong';
export class SongCreate extends Component {
    constructor(props){
        super(props)
        this.state={title:' '};
    }
onSubmit(event){
    event.preventDefault();
   this.props.mutate({
       variables:{
           title: this.state.title
       },
       refetchQueries:[{ query:query}]
   }).then(()=> hashHistory.push("/"))

}


    render() {
        return (
            <div className="Create-song-container">
            <div className="Create-song">
                <Link to="/" className="Backbtn">Back</Link>
                <h1>Create New song</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input 
                    onChange={event=>this.setState({title:event.target.value})}
                    value={this.state.title}
                    />
                </form>
            </div></div>
        )
    }
}

const mutation = gql`
mutation AddSong($title: String){
 addSong(title: $title){
     title
 }
}

`;
export default graphql(mutation)(SongCreate);
