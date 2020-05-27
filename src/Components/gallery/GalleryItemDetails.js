import React, { Component } from 'react'; 
import GalleryItem from './GalleryItem';
import axios from 'axios';

export class GalleryItemDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hit:{}
        }
    }

    componentWillMount(){
        let id=this.props.match.params.id;
        console.log(this.props);
        axios.get('https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&id3063284&id='+id)
        .then(response=>{
            this.setState({
            hit:response.data.hits[0]
            }
            ,err=>{
            console.log(err);
        });
        console.log(response);
        });
    }

    render() {
        return (
            <div className="container">
            <GalleryItem hit={this.state.hit} details={true}/>
            </div>
        )
    }
}

export default GalleryItemDetail