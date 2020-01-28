import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker, Alert, Linking } from "react-native";
import { basicStyles } from "../stylesheets/BasicNeeds-Styles"

export default class BasicNeeds2 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
            householdNumber: 1,
            householdNumberArray: [1,2,3,4,5,6,7,8],
            householdArray: ["$2,082", "$2,820", "$3,556", "$4,292", "$5,030", "$5,766", "$6,502", "$7,240"],
            //householdArray: [2082, 2820, 3556, 4292, 5030, 5766, 6502, 7240, 738],
            householdIncomeAnswer: "",
            continue: false,

        }
    }
    

    componentDidMount(){
        if(this.state.dataMap.get("Enrollment-Response") == "c" || this.state.dataMap.get("Work-Response") == "b"){
            this.setState({continue: true})
        }
    }

    renderResults(){
        if(this.state.dataMap.get("Enrollment-Response") == "c" || this.state.dataMap.get("Work-Response") == "b"){
            return(
                <View>
                    <Text style = {basicStyles.subTitle}>
                        Students need to attend college at least part-time and work at least 20 hours per week, or participate in work study programs, to qualify for food assistance. 
                        However, there are exceptions that might apply to you.
                    </Text>
                    <Text style = {basicStyles.linkText} 
                        onPress = {() => Linking.openURL("http://mycalfresh.org/students/")}>
                        Click here to learn more.
                    </Text>
                </View>
            );
        }
        //(this.state.dataMap.get("Enrollment-Response") == "a" || this.state.dataMap.get("Enrollment-Response") == "b") &&  
        //this.state.dataMap.get("Work-Response") == "a" || this.state.dataMap.get("Work-Response") == "c"
        else{
            let householdNumberItem = this.state.householdNumberArray.map( (s, i) => {
                return <Picker.Item key = {i} label = {s.toString()} value = {s}/>
            });
            return(
                <View style = {basicStyles.gradientBackground}>
                    <View style = {basicStyles.dropMenuContainer}>
                        <Text style = {basicStyles.subTitle}>What will your household size be: </Text>
                        <Picker selectedValue = {this.state.householdNumber}
                            style = {basicStyles.picker}
                            onValueChange = {(itemValue) => 
                            this.setState({householdNumber: itemValue})}>
                            {householdNumberItem}
                        </Picker>
                    </View>
                    <Text style = {basicStyles.subTitle}>Do you think your household income will be more than {(this.state.householdArray)[this.state.householdNumber-1]} per month?</Text>
                    <TouchableOpacity onPress = {() => {
                        this.state.dataMap.delete("Household-Income")
                        this.setState({householdIncomeAnswer: "yes", continue: true})
                    }}     
                    style = {basicStyles.optionButtonContainer}>
                        <Text style = {basicStyles.buttonText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => {
                        this.state.dataMap.delete("Household-Income")
                        this.setState({householdIncomeAnswer: "no", continue: true})
                    }}     
                    style = {basicStyles.optionButtonContainer}>
                        <Text style = {basicStyles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            );
        }


    }

    render(){
        
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {basicStyles.gradientBackground} >
                <Text style = {basicStyles.title}>Basic Needs</Text>

                {this.renderResults()}

                <TouchableOpacity onPress = {() => {
                    if(this.state.continue == false){
                        alert("Please select a valid household income answer")
                    }
                    else{
                        if (this.state.dataMap.get("Enrollment-Response") == "c" || this.state.dataMap.get("Work-Response") == "b"){
                            this.state.dataMap.set("Household-Income", this.state.householdIncomeAnswer) 
                            this.props.navigation.navigate("FinalResults", {mapArg: this.state.dataMap}) 
                        }
                        else{
                            this.state.dataMap.set("Household-Income", this.state.householdIncomeAnswer) 
                            this.state.dataMap.set("Household-Number", this.state.householdNumber) 
                            this.props.navigation.navigate("BasicNeeds3", {mapArg: this.state.dataMap})     
                        }
                    }                  
                }}     
                    style = {basicStyles.buttonContainer}>
                        <Text style = {basicStyles.buttonText}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}