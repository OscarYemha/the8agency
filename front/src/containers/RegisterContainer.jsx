import React from 'react';
import Register from '../components/Register';
import axios from 'axios';

class RegisterContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            lastName: "",
            email: "",
            country: "",
            phone: "",
            position: "",
        }

        this.handleName = this.handleName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){  // I show the data stored in the localstorage when I render the website
        this.getLocalStorage();
    }


    handleName(e){
        this.setState({name: e.target.value});
    }

    handleLastName(e){
        this.setState({lastName: e.target.value});
    }

    handleEmail(e){
        this.setState({email: e.target.value});
    }

    handleCountry(e){
        this.setState({country: e.target.value});
    }

    handlePhone(e){
        this.setState({phone: e.target.value});
    }

    handlePosition(e){
        this.setState({position: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
    
        let arr = []; // Array where i'll save the data in the localstorage
        let recoveredData = JSON.parse(localStorage.getItem('data'));
        if(recoveredData === null){ //if there is no "data item", i create data item.
            arr.push(this.state);
            localStorage.setItem('data', JSON.stringify(arr));
            console.log(localStorage)
        }else{ //if data item exists, I push the new attendee to the array and then save the data to localstorage
            let data = recoveredData;
            let newUser = this.state;
            data.push(newUser);
            localStorage.setItem('data', JSON.stringify(data));
        }

        console.log("Datos del localStorage = ",JSON.parse(localStorage.getItem('data'))); // I show the data saved in localstorage when I submit the form.

        axios.post("http://localhost:8080/api/register", {  // Axios request to backend with the register information
                name: this.state.name,
                lastName: this.state.lastName,
                email: this.state.email,
                country: this.state.country,
                phone: this.state.phone,
                position: this.state.position
        });

        this.setState({ // I clear the state to restart the form and save new attendees
            name: "",
            lastName: "",
            email: "",
            country: "",
            phone: "",
            position: "",
        });

        
    }

    getLocalStorage(){
        console.log("Datos del localStorage = ",JSON.parse(localStorage.getItem('data')));
    }

    

    render(){
        return(
            <div>
               <Register
               handleSubmit = {this.handleSubmit}
               handleName = {this.handleName}
               handleLastName = {this.handleLastName}
               handleEmail = {this.handleEmail}
               handleCountry = {this.handleCountry}
               handlePhone = {this.handlePhone}
               handlePosition = {this.handlePosition}
               handleCountry = {this.handleCountry}
               state = {this.state}
               />
            </div>
        )
    }

}

export default RegisterContainer;