import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from "react-native";
import { federalStyles } from "../stylesheets/FederalAid-Styles"
import * as Progress from 'react-native-progress';

export default class FederalAid2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
           
        }
    }
    
    
    setResultText(){
        
        if(this.state.dataMap.get("Fed-Income") == "a"){
            return(
                <View>
                    {/* <Text style = {federalStyles.subTitle}>You could be eligible for up to $6,195 through the Pell Grant to pay for college! 
                        Getting the maximum Pell Grant depends on two other things – 
                        1) your family has received a government benefit in the last two years, or 
                        2) your parents/guardians filed a simplified tax form. 
                    </Text> */}

                    <Text style = {federalStyles.subTitle}>You could be eligible for up to $6,195 through the Pell Grant to pay for college!</Text>
                    
                    <Text style = {federalStyles.linkText} 
                        onPress = {() => Linking.openURL("https://ifap.ed.gov/efcformulaguide/attachments/2021EFCFormulaGuide.pdf")}>
                        Everyone's situation is different, but click here for more details
                    </Text>
                </View>
            )
            
        }
        else if(this.state.dataMap.get("Fed-Income") == "b"){
            return(
                <Text style = {federalStyles.subTitle}>More than half of all students in this range get federal grants. 
                    That means you may be eligible! Students in this range get an average of $3,000 through the Pell Grant to pay for college.
                </Text>    
            )
            
        }
        else{
            return(
                <Text style = {federalStyles.subTitle}>Students in this income range receive an average of $350 through the Pell Grant. 
                Plus, there are other state or local options for students with a family income above $65,000.
                </Text>    
            )
        }
        
    }

    render(){
        return (
            <View style = {federalStyles.background} >
                {/* <Text style = {financial}>{this.state.federalAidResultText}</Text> */}
                <Text style = {federalStyles.title}>Federal Aid</Text>
                {this.setResultText()}
                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("StateAid1", {mapArg: this.state.dataMap})
                    //console.log(this.state.dataMap.get("Fed-Income"))
                    }} 
                    style = {federalStyles.buttonContainer}>
                        <Text style = {federalStyles.buttonText}>Click here to see what else you can get</Text>
                </TouchableOpacity>

                <View style = {federalStyles.progressBarContainer}>
                    <Progress.Bar progress={0.50} width = {300} height = {5} color = {"#003366"} borderWidth = {2} borderColor = {"#fff"} />
                </View>
            </View>
        );
    }
}