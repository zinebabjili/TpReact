/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter:1,
            list:[0],
        }
    }
    compute=(op) => {
        let sign=op==='+'?1:-1;
        if(this.state.counter==1 && op==='-') sign=0;
        let c=this.state.Counter+sign;
        this.setState(state:{
            counter:c,
            list: new Array(c).fill(value:0),
        });
    }
    
    render() {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>
                    {this.props.title?this.props.title:'Default Title'} : {this.state.counter}
                    </strong>
                </div>

                <div className="ml-auto">
                   <button onClick={()=> this.compute(op:'+')} className="btn btn-primary m-2">+</button>
                   <button onClick={()=> this.compute(op:'-')} className="btn btn-primary m-2">-</button>
                </div>

                <div className="card-body">
                    {
                        this.state.list.map(()=> 
                        <img width ={100} src={this.props.image?this.props.image:'images/profile.png'}/>
                        )
                    }
                    
                </div>
            </div>   
        );
    }
}

export default Counter
*/