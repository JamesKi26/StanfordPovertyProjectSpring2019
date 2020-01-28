import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { landingStyles } from "../stylesheets/Landing-Styles"


export default class LandingPage1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            fadeAnimTitle: new Animated.Value(0),
            fadeAnimSubTitle: new Animated.Value(0),
        }
    }
    


    componentDidMount(){
        Animated.timing(
            this.state.fadeAnimTitle,
            {
                toValue: 1,
                duration: 2000,
            }
        ).start();
        Animated.timing(
            this.state.fadeAnimSubTitle,
            {
                toValue: 1,
                duration: 4000,
            }
        ).start();
    }

    render(){
        let { fadeAnimTitle, fadeAnimSubTitle } = this.state;
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {landingStyles.gradientBackground} >
                <Animated.View style = {{opacity: fadeAnimTitle}}>
                    <Text style = {landingStyles.title}>Interested in college?</Text>
                    <Text style = {landingStyles.title}>Worried about paying for it?</Text>
                </Animated.View>

                <Animated.View style = {{opacity: fadeAnimSubTitle}}>
                    <Text style = {landingStyles.subTitle}>You Can Afford College</Text>
                    <Text style = {landingStyles.subTitle}>In fact, 85% of college students receive financial aid to pay for college</Text>
                
                </Animated.View>
                
                    <TouchableOpacity onPress = {() => {
                        this.props.navigation.navigate("GenInfoDisclosure")}} 
                        style = {landingStyles.buttonContainer}>
                            <Text style = {landingStyles.buttonText}>Click here to find out how you can too</Text>
                    </TouchableOpacity>
            </LinearGradient>
        );
    }
}