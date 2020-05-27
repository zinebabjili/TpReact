import React, { Component } from 'react';

export class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = { keyword:''}
    }

    onChangeKeyWord=(event)=>{
        this.setState({ keyword:event.target.value })
    }
    onSearch=(event)=>{
        event.preventDefault(); this.props.searchHits(this.state.keyword);
    }

    render() {
        return (
            <form onSubmit={this.onSearch}>
                <div className="row">
                    <div className="col">
                        <input onChange={this.onChangeKeyWord} value={this.state.keyword} type="text"
                        className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary pull-right">Search</button>
                    </div>
                </div>
            </form>
        )
    }
    
}
export default SearchForm