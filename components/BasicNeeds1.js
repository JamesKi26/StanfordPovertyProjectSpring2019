import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker, Alert } from "react-native";
import { basicStyles } from "../stylesheets/BasicNeeds-Styles"

export default class BasicNeeds1 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,

            enrollmentResponse : "",
            workResponse : "",

        }
    }
    

    renderQuestions(){
        return(
            <View style = {basicStyles.questionContainer}>
                <Text style = {basicStyles.subTitle}>What type of enrollment status is most likely for you?</Text>
                
                <View style = {basicStyles.questionMoreInfoContainer}>
                    <TouchableOpacity onPress = {() => {
                        this.state.dataMap.delete("Enrollment-Response")
                        this.setState({enrollmentResponse: "a"})}}     
                        style = {basicStyles.optionButtonContainer}>
                            <Text style = {basicStyles.buttonText}>Full-Time</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => { Alert.alert("Full-Time Definition", "Full-time is determined by each college. It’s usually around 12 units or credits per session.", [{text: "OK"}],{cancelable: false}) }}     
                        style = {basicStyles.moreInfoContainer}>
                            <Text style = {basicStyles.buttonText}>?</Text>
                    </TouchableOpacity>

                </View>

                <View style = {basicStyles.questionMoreInfoContainer}>
                    <TouchableOpacity onPress = {() => {
                        this.state.dataMap.delete("Enrollment-Response")
                        this.setState({enrollmentResponse: "b"})}}     
                        style = {basicStyles.optionButtonContainer}>
                        <Text style = {basicStyles.buttonText}>Half-Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => { Alert.alert("Half-Time Definition", "Half-time is determined by each college. It’s usually around 6-8 units or credits per session.", [{text: "OK"}],{cancelable: false}) }}     
                        style = {basicStyles.moreInfoContainer}>
                            <Text style = {basicStyles.buttonText}>?</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress = {() => {
                    this.state.dataMap.delete("Enrollment-Response")
                    this.setState({enrollmentResponse: "c"})}}     
                    style = {basicStyles.optionButtonContainer}>
                    <Text style = {basicStyles.buttonText}>Less than Half-Time</Text>
                </TouchableOpacity>


                <Text style = {basicStyles.subTitle}>How much do think you will work in college?</Text>
                
                <TouchableOpacity onPress = {() => {
                    this.state.dataMap.delete("Work-Response")
                    this.setState({workResponse: "a"})}}     
                    style = {basicStyles.optionButtonContainer}>
                        <Text style = {basicStyles.buttonText}>At least 20 hours per week</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => {
                    this.state.dataMap.delete("Work-Response")
                    this.setState({workResponse: "b"})}}     
                    style = {basicStyles.optionButtonContainer}>
                    <Text style = {basicStyles.buttonText}>Less than 20 hours per week</Text>
                </TouchableOpacity>

                <View style = {basicStyles.questionMoreInfoContainer}>
                    <TouchableOpacity onPress = {() => {
                        this.state.dataMap.delete("Work-Response")
                        this.setState({workResponse: "c"})}}     
                        style = {basicStyles.optionButtonContainer}>
                        <Text style = {basicStyles.buttonText}>I plan to participate in work study</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => { Alert.alert("Work Study", "Federal Work-Study provides part-time jobs for students with financial need, allowing them to earn money to help pay education expenses.", [{text: "OK"}],{cancelable: false}) }}     
                        style = {basicStyles.moreInfoContainer}>
                            <Text style = {basicStyles.buttonText}>?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render(){
       
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {basicStyles.gradientBackground} >
                <Text style = {basicStyles.title}>Basic Needs</Text>

                {this.renderQuestions()}

                {/* {this.renderWorkQuestion()} */}

                <TouchableOpacity onPress = {() => {

                    if(this.state.enrollmentResponse == "" ||  this.state.workResponse == ""){
                        alert("Please select an answer to both questions")
                    }
                    else{
                        this.state.dataMap.set("Enrollment-Response", this.state.enrollmentResponse)
                        this.state.dataMap.set("Work-Response", this.state.workResponse)

                        this.props.navigation.navigate("BasicNeeds2", {mapArg: this.state.dataMap})  
                    } 
                }}     
                    style = {basicStyles.buttonContainer}>
                        <Text style = {basicStyles.buttonText}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}