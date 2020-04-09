import React, { Component } from "react";
import { Text, View, TouchableOpacit, Button } from "react-native";
import { landingStyles } from "../stylesheets/Landing-Styles"


export default class LandingPage2Results extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    componentDidMount(){        
    }

    render(){
        
        return (
            <View style = {landingStyles.background} >
            
                <Text style = {landingStyles.title}>True! There are $246 billion in federal aid available for students every year!</Text>
                
                {/* <TouchableOpacity onPress = {() => { this.props.navigation.navigate("LandingPage2Results") }} 
                    style = {landingStyles.optionButtonContainer}>
                        <Text style = {landingStyles.buttonText}>True</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress = {() => { this.setState({op:1}) }} 
                    style = {landingStyles.optionButtonContainer}>
                        <Text style = {landingStyles.buttonText}>False</Text>
                </TouchableOpacity> */}
                
                {/* <Text style = {{opacity: this.state.op, fontSize: 20,
                color: "#fff"}}>Hello</Text> */}

                <Button onPress = {() => {
                    this.props.navigation.navigate("GenInfoDisclosure")}} 
                    style = {landingStyles.buttonContainer}>
                        <Text style = {landingStyles.buttonText}>Click here to find out how you can too</Text>
                </Button>
            </View>
        );
    }
}