import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { genInfoDisclosureStyles } from "../stylesheets/GenInfoDisclosure-Styles"
import * as Progress from 'react-native-progress';

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
            <View style = {genInfoDisclosureStyles.background}>
                {/* <Text style = {genInfoDisclosureStyles.title}>General Information and Disclosure</Text> */}
                <KeyboardAvoidingView style={genInfoDisclosureStyles.keyboard} behavior="padding" enabled>
                    <Text style = {genInfoDisclosureStyles.subTitle}>There are $246 billion in federal aid available for students every year. 
                    And 85% of college students receive some type of financial aid.
                    Enter your phone and email and we will send you a summary of all the money you could get for college. 
                    We will NOT share your personal info.</Text>
                    
                    <TextInput
                    style={genInfoDisclosureStyles.numericInput}
                    editable={true}
                    placeholder="Enter Email"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onChangeText = {(text) => this.setState({emailAddress: text})}/>
                    
                    <TextInput
                    style={genInfoDisclosureStyles.numericInput}
                    editable={true}
                    placeholder="Enter Phone Number"
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
                        <Text style = {genInfoDisclosureStyles.buttonText}>Let's go!</Text>
                </TouchableOpacity>

                <View style = {genInfoDisclosureStyles.progressBarContainer}>
                    <Progress.Bar progress={0.20} width = {300} height = {5} color = {"#003366"} borderWidth = {2} borderColor = {"#fff"} />
                </View>
            </View>
        );
    }
}