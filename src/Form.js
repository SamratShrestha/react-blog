import React, {useState} from 'react';
class ControlledForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age:'',
            textarea:'',
            country:'nepal',
            // country:['nepal','china','india'],
            checked:true
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        alert('The output is '+this.state.age+ this.state.textarea+this.state.country);
        event.preventDefault();
    }
    handleChange(event){
        const target = event.target;
        const value = target.type == "checkbox"?target.checked:target.value
        const name = target.name;
        this.setState({[name]:value});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="number" name="age" value={this.state.age} onChange={(event) => this.handleChange(event)} placeholder="Enter Age"/>
                <br />
                <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange} placeholder="Text area"/>
                <br />
            {/* <select multiple={true} onChange={this.handleChange} value={this.state.country}> */}
                <select name="country" onChange={this.handleChange} value={this.state.country}>
                    <option value="nepal">Nepal</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                </select>
                <br />
                <input name="checkbox" type="checkbox" checked={this.state.checkbox} onChange={this.handleChange}/>
                <br />
                <input type="submit" value="submit" />
            </form>
        )
    }
}
const UncontrolledForm = (props)=>{
    const input = React.createRef();
    const fileInput = React.createRef();
    const handleSubmit = (event)=>{
        alert('Name: '+input.current.value);
        alert(`Selected file +${fileInput.current.files[0].name}`)
        event.preventDefault();
    };
    return(
        <form onSubmit={(event)=>handleSubmit(event)}>
            <input defaultValue="test" type="text" ref={input} />
            <input type="file" ref={fileInput} />
            <input type="submit" value="Submit" />
        </form>
    )
}
export {ControlledForm,UncontrolledForm};
