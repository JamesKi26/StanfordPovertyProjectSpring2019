import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { landingStyles } from "../stylesheets/Landing-Styles"


export default class LandingPage2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            op: 0,
        }
    }
    


    componentDidMount(){
        
    }

    render(){
        
        return (
            <View style = {landingStyles.background} >
            
                <Text style = {landingStyles.title}>True or False: 85% of college students receive financial aid.</Text>
                
                <TouchableOpacity onPress = {() => { this.props.navigation.navigate("LandingPage2ResultsScreen") }} 
                    style = {landingStyles.optionButtonContainer}>
                        <Text style = {landingStyles.optionButtonText}>True</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress = {() => { this.props.navigation.navigate("LandingPage2ResultsScreen") }} 
                    style = {landingStyles.optionButtonContainer}>
                        <Text style = {landingStyles.optionButtonText}>False</Text>
                </TouchableOpacity>
                
                {/* <Text style = {{opacity: this.state.op, fontSize: 20,
                color: "#fff"}}>Hello</Text>

                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("GenInfoDisclosure")}} 
                    style = {landingStyles.buttonContainer}>
                        <Text style = {landingStyles.buttonText}>Click here to find out how you can too</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}