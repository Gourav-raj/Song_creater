import React, { Component } from 'react'
import {graphql} from 'react-apollo';
import ShowSong from '../queries/ShowSong';
import {Link} from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
export class SongDetail extends Component {
    render() {
        const { song }=this.props.data;

        if(!song) { return <div>Loading...</div>}


        return (
            <div className="container-lyrics">
                <Link to="/" className="Backbtn">Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics}/>
                <LyricCreate 
                songId={this.props.params.id}/> 
            </div>
        )
    }
}

export default graphql(ShowSong,{
    options: (props) => {
        return {variables:{id: props.params.id}}
    }
})(SongDetail);
