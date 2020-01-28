import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { genInfoDisclosureStyles } from "../stylesheets/GenInfoDisclosure-Styles"


export default class GenInfoDisclosure extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailAddress: "",
            phoneNumber: 0,
        }
    }

    render(){
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {genInfoDisclosureStyles.gradientBackground}>
                <Text style = {genInfoDisclosureStyles.title}>General Information and Disclosure</Text>
                <KeyboardAvoidingView style={genInfoDisclosureStyles.keyboard} behavior="padding" enabled>
                    <Text style = {genInfoDisclosureStyles.subTitle}>The government provides 30 billion in grants to students every year. 
                    We need to ask you some questions to help you determine how much money could be available for you. 
                    We will not share your personal information. 
                    Enter your phone number and email below and we will send you a summary of all the money you could get to pay for college. 
                    We can also remind about important deadlines for financial aid and other benefits.</Text>
                    
                    <TextInput
                    style={genInfoDisclosureStyles.numericInput}
                    editable={true}
                    placeholder="Email"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onChangeText = {(text) => this.setState({emailAddress: text})}/>
                    
                    <TextInput
                    style={genInfoDisclosureStyles.numericInput}
                    editable={true}
                    placeholder="Phone Number"
                    selectionColor="#fff"
                    keyboardType="phone-pad"
                    maxLength={12}
                    onChangeText = {(numb) => this.setState({phoneNumber: numb})}/>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("FederalAid1")
                    //console.log("email address: ", this.state.emailAddress, "\nphone number: ", this.state.phoneNumber)
                    }} 
                    style = {genInfoDisclosureStyles.buttonContainer}>
                        <Text style = {genInfoDisclosureStyles.buttonText}>Let's get started</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}