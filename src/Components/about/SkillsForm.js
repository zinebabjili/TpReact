import React from "react";
export default class SillsForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            skillValue:''
        }
    }

    setSkillValue=(event)=>{
        this.setState({
        skillValue:event.target.value
        })
    }
    onAddSkill=(event)=> {
        event.preventDefault();
        this.props.onAddNewSkill(this.state.skillValue);
        this.setState({
            skillValue:''
        })
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onAddSkill}>
                <div className="row">
                    <div className="col">
                        <input value={this.state.skillValue} onChange={this.setSkillValue}
                        className="form-control" type="text" placeholder="Skill To Add"/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}