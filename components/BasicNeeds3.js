import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker, Alert, Linking } from "react-native";
import { basicStyles } from "../stylesheets/BasicNeeds-Styles"
import * as Progress from 'react-native-progress';
export default class BasicNeeds3 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
            monthlyArray: [194, 355, 509, 646, 768, 921, 1018, 1164],
            
        }
    }

  
    renderResults(){
       if(this.state.dataMap.get("Household-Income") == "no"){
           return(
               <View>
                    <Text style = {basicStyles.subTitle}>
                    Based on your household and income, you might be eligible for up to ${(this.state.monthlyArray)[this.state.dataMap.get("Household-Number")-1]*12} per year in food assistance while you are in college.
                    </Text>
                   <Text style = {basicStyles.linkText} 
                        onPress = {() => Linking.openURL("http://mycalfresh.org/students/")}>
                        Click here to learn how to apply.
                    </Text>
               </View>
           );
       }
       else{
            return(
                <View>
                    <Text style = {basicStyles.subTitle}>
                        Your income might be too high for food assistance. 
                        But there are lots of other factors that affect eligibility and the calculations are pretty complicated.
                    </Text>
                    <Text style = {basicStyles.linkText} 
                        onPress = {() => Linking.openURL("http://mycalfresh.org/students/")}>
                        Click here to learn more and see if you could still be eligible.
                    </Text>
                </View>
            );
       }
    }

    render(){
        
        return (
            <View style = {basicStyles.background} >
                <Text style = {basicStyles.title}>Basic Needs</Text>

                {this.renderResults()} 

                <TouchableOpacity onPress = {() => {
                    this.state.dataMap.set("BasicNeedsGrant", (this.state.monthlyArray)[this.state.dataMap.get("Household-Number")-1]*12)
                    this.props.navigation.navigate("FinalResults", {mapArg: this.state.dataMap})  
                }}     
                    style = {basicStyles.buttonContainer}>
                        <Text style = {basicStyles.buttonText}>Next</Text>
                </TouchableOpacity>
                <View style = {basicStyles.progressBarContainer}>
                    <Progress.Bar progress={0.95} width = {300} height = {5} color = {"#003366"} borderWidth = {2} borderColor = {"#fff"} />
                </View>
            </View>
        );
    }
}