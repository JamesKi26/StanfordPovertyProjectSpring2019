import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, Picker } from "react-native";
import { federalStyles } from "../stylesheets/FederalAid-Styles"


export default class FederalAid1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataMap: new Map(),
            income: "$26,000 or less"
        }
    }
    


    componentDidMount(){
        alert("$26,000 per year is about $500/week or $12.50/hour for full-time employees. $65,000 is about $1,250/week or $30/hour.") 
    }

    render(){
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {federalStyles.gradientBackground} >
                <Text style = {federalStyles.title}>Federal Aid</Text>

                <Text style = {federalStyles.subTitle}>The Pell Grant is the largest source of federal grant aid. 
                The average Pell Grant is over $4,000! Most states also offer additional financial aid. 
                We’ll get to that in a minute. 
                First, let’s see how much money you could get through the Pell Grant.</Text>

                <Text style = {federalStyles.additionalText}>$26,000 per year is about $500/week or $12.50/hour for full-time employees. $65,000 is about $1,250/week or $30/hour.</Text>

                <Text style = {federalStyles.subTitle}>How much does your family make each year?</Text>
                <View style = {federalStyles.pickerContainer}>
                    <Picker selectedValue = {this.state.income}
                    style = {federalStyles.picker}
                    onValueChange = {(itemValue, itemIndex) => 
                    this.setState({income: itemValue})}>
                        <Picker.Item label = "a. $26,000 or less" value = "$26,000 or less"/>
                        <Picker.Item label = "b. $26,001 to $65,000" value = "$26,001 to $65,000"/>
                        <Picker.Item label = "c. $65,000 or above" value = "$65,000 or above"/>
                    </Picker>
                </View>
                <TouchableOpacity onPress = {() => {
                    this.state.dataMap.set("Fed-Income", this.state.income)
                    //console.log(this.state.dataMap)
                    this.props.navigation.navigate("FederalAid2", {mapArg: this.state.dataMap})}} 
                    style = {federalStyles.buttonContainer}>
                        <Text style = {federalStyles.buttonText}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}