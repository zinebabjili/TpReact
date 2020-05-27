import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../layout/NavBar';
import axios from 'axios';
import SearchForm from './SearchForm';
import GalleryItem from './GalleryItem';

class Gallery extends React.Component{
    constructor(props) {super(props)
        this.state = {
            gallery: { hits: [] },
            currentPage:1,pageSize:6,totalPages:0, 
            currentKeyword:'paris'
        }
    }

    searchHits=(keyword)=>{
        axios.get(
            'https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q='
            +keyword+"&page="
            +this.state.currentPage+"&per_page="
            +this.state.pageSize)
        .then(response=>{
            this.setState({
            gallery:response.data,
            totalPages:response.data.totalHits%this.state.pageSize==0?response.data.totalHits%this.state.pageSize:1+response.data.totalHits%this.state.pageSize
        });
        },err=>{
            console.log(err);
        });
    }

    componentDidMount(){
        this.searchHits(this.state.currentKeyword);
    }
    goToPage(pageIndex){
        this.setState({
            currentPage:pageIndex
        })
        this.searchHits(this.state.currentKeyword);
    }

    getPages(){
        let items =[];
        for(let i=1;i<=this.state.totalPages;i++){
            items.push(
            <li key={i}>
            <button className={i==this.state.currentPage?'btn btnprimary':'btn btn-link'} onClick={()=>this.goToPage(i)}>{i}</button>
            </li>);
        }
        return items;
    }

    render(){
        return(
            <div>
                <div>
                    <SearchForm searchHits={this.searchHits}/>
                    <div className="row">
                        {
                            this.state.gallery.hits.map(hit =>
                            <div className="col-md-4" key={hit.id}>
                                <GalleryItem hit={hit} details={false}/>
                            </div>
                        )
                        }
                    </div>
                    <div className="row mt-3">
                        <ul className="nav nav-pills">
                            {this.getPages()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;