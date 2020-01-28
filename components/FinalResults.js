import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker, Alert, Linking } from "react-native";
import { finalResultStyles } from "../stylesheets/FinalResults-Styles"

export default class FinalResults extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
           
        }
    }

  
    renderFedResult(){
        if(this.state.dataMap.get("Fed-Income") == "$26,000 or less"){
            return(
                <Text style = {finalResultStyles.text}>Federal Grants: You could be eligible for the maximum Pell Grant amount - $6,195!</Text>
            );
        }
        else if (this.state.dataMap.get("Fed-Income") == "$26,001 to $65,000"){
            return(
                <Text style = {finalResultStyles.text}>Federal Grants: The average Pell Grant for your income range is about $3,000!</Text>
            );
        }
        else{
            return(
                <Text style = {finalResultStyles.text}>Federal Grants: The average Pell Grant for your income range is about $350.</Text>
            );
        }
    }

    renderStateResult(){
        if(this.state.dataMap.get("State-Income") == "a"){
            return(
                <Text style = {finalResultStyles.text}>State Grants: Cal Grant A (3.0 GPA) – Up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges!
                Cal Grant B (2.0 GPA) – Up to $1,672 of your living expenses during the first year of college.
                Cal Grant C - Up to $1,094 to pay for a technical training program.
                And community college would be free!</Text>
            );
        }
        else if (this.state.dataMap.get("State-Income") == "b"){
            return(
                <Text style = {finalResultStyles.text}>State Grants: Cal Grant A (3.0 GPA) – Up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges!
                Cal Grant C - Up to $1,094 to pay for a technical training program.
                And community college would be free!</Text>
            );
        }
        else{
            return(
                <Text style = {finalResultStyles.text}>State Grants: You may be eligible for California’s Middle Class Scholarship (MCS), which covers 10% - 40% of tuition at UC and CSU campuses.
                And you could probably attend Community College for free!</Text>
            );
        }
    }
    
    renderFoodResults(){
        if(this.state.dataMap.get("Household-Income") != "" ){
            return(
                <Text style = {finalResultStyles.text}>You could be eligible for up to ${this.state.dataMap.get("BasicNeedsGrant")} in food assistance when you are in college. </Text>
            );
        }
    }

    render(){
        
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {finalResultStyles.gradientBackground} >
                <Text style = {finalResultStyles.title}>Final Results</Text>

                <Text style = {finalResultStyles.subTitle}>You could receive financial aid and other benefits to afford college tuition and living expenses. Here’s a breakdown:</Text>

                {this.renderFedResult()}

                {this.renderStateResult()}

                {this.renderFoodResults()}

                <Text style = {finalResultStyles.subTitle}>Remember, this is a rough estimate. To get more exact amounts: Fill out the FAFSA, and any official applications for state and food assistance. </Text>

                {/* <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("", {mapArg: this.state.dataMap})  
                }}     
                    style = {basicStyles.buttonContainer}>
                        <Text style = {basicStyles.buttonText}>Next</Text>
                </TouchableOpacity> */}
            </LinearGradient>
        );
    }
}