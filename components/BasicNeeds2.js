import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker, Alert, Linking } from "react-native";
import { basicStyles } from "../stylesheets/BasicNeeds-Styles"
import * as Progress from 'react-native-progress';
export default class BasicNeeds2 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
            householdNumber: 1,
            householdNumberArray: [1,2,3,4,5,6,7,8],
            householdArray: ["$2,082", "$2,820", "$3,556", "$4,292", "$5,030", "$5,766", "$6,502", "$7,240"],
            //householdArray: [2082, 2820, 3556, 4292, 5030, 5766, 6502, 7240, 738],
            householdIncomeAnswer: "yes",
            // continue: false,

        }
    }
    

    componentDidMount(){
        // if(this.state.dataMap.get("Enrollment-Response") == "c" || this.state.dataMap.get("Work-Response") == "b"){
        //     this.setState({continue: true})
        // }
    }

    renderResults(){
        if(this.state.dataMap.get("Enrollment-Response") == "c" || this.state.dataMap.get("Work-Response") == "b"){
            return(
                <View>
                    <Text style = {basicStyles.title}>You may also qualify for help with food in college</Text>
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
                <View style = {basicStyles.background}>
                    <Text style = {basicStyles.title}>You may also qualify for help with food in college</Text>
                    <Text style = {basicStyles.subTitle}>Here are some more questions that can help us determine how much food assistance you could receive</Text>
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
                        this.setState({householdIncomeAnswer: "yes"})
                    }}     
                    style = {[this.state.householdIncomeAnswer == "yes" && basicStyles.buttonOptionContainerSelect,
                    this.state.householdIncomeAnswer != "yes" && basicStyles.optionButtonContainer]}>
                        <Text style = {basicStyles.buttonText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => {
                        this.state.dataMap.delete("Household-Income")
                        this.setState({householdIncomeAnswer: "no"})
                    }}     
                    style = {[this.state.householdIncomeAnswer == "no" && basicStyles.buttonOptionContainerSelect,
                        this.state.householdIncomeAnswer != "no" && basicStyles.optionButtonContainer]}>
                        <Text style = {basicStyles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            );
        }


    }

    render(){
        
        return (
            <View style = {basicStyles.background} >
                

                {this.renderResults()}

                <TouchableOpacity onPress = {() => {
                    // if(this.state.continue == false){
                    //     alert("Please select a valid household income answer")
                    // }
                    // else{
                        if (this.state.dataMap.get("Enrollment-Response") == "c" || this.state.dataMap.get("Work-Response") == "b"){
                            this.state.dataMap.set("Household-Income", this.state.householdIncomeAnswer) 
                            this.props.navigation.navigate("FinalResults", {mapArg: this.state.dataMap}) 
                        }
                        else{
                            this.state.dataMap.set("Household-Income", this.state.householdIncomeAnswer) 
                            this.state.dataMap.set("Household-Number", this.state.householdNumber) 
                            this.props.navigation.navigate("BasicNeeds3", {mapArg: this.state.dataMap})     
                        }
                    // }                  
                }}     
                    style = {basicStyles.buttonContainer}>
                        <Text style = {basicStyles.buttonText}>Next</Text>
                </TouchableOpacity>
                <View style = {basicStyles.progressBarContainer}>
                    <Progress.Bar progress={0.87} width = {300} height = {5} color = {"#003366"} borderWidth = {2} borderColor = {"#fff"} />
                </View>
            </View>
        );
    }
}