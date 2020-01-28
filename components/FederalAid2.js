import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from "react-native";
import { federalStyles } from "../stylesheets/FederalAid-Styles"


export default class FederalAid2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
           
        }
    }
    
    
    setResultText(){
        
        if(this.state.dataMap.get("Fed-Income") == "$26,000 or less"){
            return(
                <View>
                    <Text style = {federalStyles.subTitle}>You could be eligible for up to $6,195 through the Pell Grant to pay for college! 
                        Getting the maximum Pell Grant depends on two other things – 
                        1) your family has received a government benefit in the last two years, or 
                        2) your parents/guardians filed a simplified tax form. 
                    </Text>

                    <Text style = {federalStyles.linkText} 
                        onPress = {() => Linking.openURL("https://ifap.ed.gov/efcformulaguide/attachments/2021EFCFormulaGuide.pdf")}>
                        Click here for more details and talk to your family to learn more about your situation.
                    </Text>
                </View>
            )
            
        }
        else if(this.state.dataMap.get("Fed-Income") == "$26,001 to $65,000"){
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
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {federalStyles.gradientBackground} >
                {/* <Text style = {financial}>{this.state.federalAidResultText}</Text> */}
                <Text style = {federalStyles.title}>Federal Aid</Text>
                {this.setResultText()}
                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("StateAid1", {mapArg: this.state.dataMap})
                    //console.log(this.state.dataMap.get("Fed-Income"))
                    }} 
                    style = {federalStyles.buttonContainer}>
                        <Text style = {federalStyles.buttonText}>Move to State Aid</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}