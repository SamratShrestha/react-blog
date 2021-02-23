import React, {Component} from 'react';
function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>The water will boil</p>
    }else{
        return <p>The water will not boil</p>
    }
}
const scaleName={
    c:'Celsius',
    f:'Fahrenheit'
};
function toCelcius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}
function tryConvert(temperature,convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const ouput = convert(input);
    const rounded = Math.round(ouput*1000)/1000;
    return rounded.toString();
}
class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onTemperatureChange(event.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleName[this.props.scale]}</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: '',
            scale:'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsiusChange(temperature){
        this.setState({
            scale:'c',
            temperature
        })
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale:'f',
            temperature
        })
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale==='f'?tryConvert(temperature,toCelcius):temperature;
        const fahrenheit = scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        )
    }
}
export default Calculator;
