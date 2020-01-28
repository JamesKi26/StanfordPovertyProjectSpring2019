import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker } from "react-native";
import { stateStyles } from "../stylesheets/StateAid-Styles"

export default class StateAid2 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
        }
    }
    

    


    renderStateResults(){
        if(this.state.dataMap.get("State-Income") == "a"){
            return(
                <View>
                    <Text style = {stateStyles.resultTitle}>Cal Grants can be used to cover tuition and some living expenses. 60% of students in the UC and CSU systems have all of their tuition covered through these grants!</Text>
                    <Text style = {stateStyles.resultSubTitle}>If you have a 3.0 GPA, you could be eligible for Cal Grant A. 
                    This grant covers tuition at four year universities in CA, including a maximum of $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges!
                    If you have a 2.0 GPA, you could be eligible for Cal Grant B. 
                    This grant covers $1,672 of your living expenses during the first year of college. After the first year of college, if your grades improve, you could become eligible for more money through Cal Grant A! 
                    Cal Grant C offers up to $1,094 to pay for a technical training program. 
                    And Community College would be free for you!
                    To find out exactly what you are eligible for, fill out your FAFSA form. No matter your grades, there is money for you to go to college!</Text>
                </View>
            );
        }
        else if(this.state.dataMap.get("State-Income") == "b"){
            return(
                <View>
                    <Text style = {stateStyles.resultTitle}>Cal Grants can be used to cover tuition and some living expenses. 60% of students in the UC and CSU systems have all of their tuition covered through these grants!</Text>
                    <Text style = {stateStyles.resultSubTitle}>If you have a 3.0 GPA, you could be eligible for Cal Grant A. 
                    This grant covers tuition at four year universities in CA. It covers up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges! 
                    If you don’t have a 3.0, Cal Grant C could be an option. It offers up to $1,094 to pay for a technical training program. 
                    And Community College would be free for you!
                    To find out exactly what you are eligible for, fill out your FAFSA form.</Text>
                </View>
            );
        }
        else {
            return(
                <View>
                    <Text style = {stateStyles.resultTitle}>State grants can reduce the cost of tuition and cover some living expenses.</Text>
                    <Text style = {stateStyles.resultSubTitle}>You may be eligible for California’s Middle Class Scholarship (MCS). 
                    MCS is available for students with family income and assets up to $177,000. This scholarship can cover between 10% - 40% of tuition at UC and CSU campuses. 
                    And you could probably attend Community College for free!
                    Fill out the FAFSA to find out exactly what you are eligible to receive and get your money for college!</Text>
                </View>
            );
        }
    }

    render(){
       
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {stateStyles.gradientBackground} >
                <Text style = {stateStyles.title}>State Aid Results</Text>

                {this.renderStateResults()}

                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("BasicNeeds1", {mapArg: this.state.dataMap})  
                }}     
                    style = {stateStyles.buttonContainer}>
                        <Text style = {stateStyles.resultButtonText}>Click here to see if you can get help paying for food while you’re in college</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}