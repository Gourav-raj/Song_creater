import React, { Component } from 'react'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/FetchSong'

class SongList extends Component {
 onSongDelete(id){
     this.props.mutate({variables: {id}})
     .then(()=> this.props.data.refetch());
 }
    renderSongs(){
        if(this.props.data.loading===false)
          return this.props.data.songs.map(song => {
        return(
            <li key={song.id} className="collection-item">
                <Link to={`/songs/${song.id}`}>+{song.title}</Link> 
                <i
                className="material-icons"
                onClick ={() => this.onSongDelete(song.id)}
                >
                    delete 
                    </i>
            </li>
        );
    });
}
    render() { 
        
        return ( <div className="container-list"><div className="list-heading">
            <h1 >List of Songs</h1>
            <div className="list-container"> < ul className="collection">
               <h6> {this.renderSongs()}
             
                </h6> 
             
            </ul>
    
            <Link
            to="/song/new"
            className="btn-floating btn-large red right"
            >
                <i className="material-icon">+</i>
            </Link>
            </div></div></div>
        )
    }
}

const mutation = gql`
mutation DeleteSong($id:ID){
    deleteSong(id: $id){
        id
    }
}

`;

export default graphql(mutation)(
    graphql(query)(SongList)
    );