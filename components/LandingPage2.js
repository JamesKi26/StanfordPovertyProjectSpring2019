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
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {landingStyles.gradientBackground} >
            
                <Text style = {landingStyles.title}>True or False: 85% of college students receive financial aid.</Text>
                
                <TouchableOpacity onPress = {() => { this.setState({op:1}) }} 
                    style = {landingStyles.optionButtonContainer}>
                        <Text style = {landingStyles.buttonText}>True</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress = {() => { this.setState({op:1}) }} 
                    style = {landingStyles.optionButtonContainer}>
                        <Text style = {landingStyles.buttonText}>False</Text>
                </TouchableOpacity>
                
                <Text style = {{opacity: this.state.op, fontSize: 20,
                color: "#fff"}}>Hello</Text>

                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("GenInfoDisclosure")}} 
                    style = {landingStyles.buttonContainer}>
                        <Text style = {landingStyles.buttonText}>Click here to find out how you can too</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}