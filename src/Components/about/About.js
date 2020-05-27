import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SillsForm from "./SkillsForm";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contact:{
            name:'zineb',
            email:'z.abjili@mundiapolis.ma',
            picture:'./image/profile.png'
        },
            skills:[
                {id:1,title:'Software Engineering'},
                {id:2,title:'UI Design'},
                {id:3,title:'Machines Learning'}
            ]
        };
    }

    onAddSkill=(skillTitle)=>{
        const skill={id:[...this.state.skills].pop().id+1,title:skillTitle}
        this.setState({
            skills:[...this.state.skills,skill]
        })
    }

    onDelete=(s)=>{
        let index=this.state.skills.indexOf(s); let skills=[...this.state.skills];
        skills.splice(index,1);
        this.setState({
            skills:skills
        })
    }

    componentDidMount(){ console.log("Component Dit Mount"); }
    componentWillMount(){ console.log("Component Will Mount...") }
    componentWillUpdate(){ console.log("Will Update");}
    componentDidUpdate(){ console.log("Did Update") }
    

    render(){
        console.log("Component rendering....");
        return(
            <div className="mt-3"> <label><b>{this.props.inputMessage}</b></label>
                <div className="card">
                    <div className="row">
                        <div className="col-auto">
                            <img width={180} src="images/profile.png" className="profile img-thumbnail" alt="Profile" />
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item"><b>Name : </b>{this.state.contact.name}</li>
                                <li className="list-group-item"><b>Email : </b> {this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header">Skills</div>
                    <div className="card-body">
                        <div className="my-3">
                            <SillsForm onAddNewSkill={this.onAddSkill}/>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th><th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.skills.map(s=>
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.title}</td>
                                        <td><button onClick={()=>this.onDelete(s)} className="btn btn-danger text-white">X</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;