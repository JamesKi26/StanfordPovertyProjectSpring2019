import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Picker } from "react-native";
import { federalStyles } from "../stylesheets/FederalAid-Styles"


export default class FederalAid1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataMap: new Map(),
            income: "a",
            modalVisible: false,
        }
    }
    
    setModalVisible(visible){
        this.setState({modalVisible : visible});
    }

    componentDidMount(){
        //alert("$26,000 per year is about $500/week or $12.50/hour for full-time employees. $65,000 is about $1,250/week or $30/hour.") 
    }

    render(){
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {federalStyles.gradientBackground} >
                <Text style = {federalStyles.title}>Federal Aid</Text>

                {/* <Text style = {federalStyles.subTitle}>The Pell Grant is the largest source of federal grant aid. 
                The average Pell Grant is over $4,000! Most states also offer additional financial aid. 
                We’ll get to that in a minute. 
                First, let’s see how much money you could get through the Pell Grant.</Text>

                <Text style = {federalStyles.additionalText}>$26,000 per year is about $500/week or $12.50/hour for full-time employees. $65,000 is about $1,250/week or $30/hour.</Text> */}

                <Text style = {federalStyles.subTitle}>The average Pell Grant is over $4,000! Let's see how much you can get.</Text>

                
                <Text style = {federalStyles.subTitle}>How much does your family make each year?</Text>
            
                <TouchableOpacity onPress = {() => {
                    this.setModalVisible(true)}} 
                    style = {federalStyles.buttonModalContainer}
                    >
                        <Text style = {federalStyles.buttonText}>More Info</Text>
                </TouchableOpacity>
                
                {/* <View style = {federalStyles.pickerContainer}>
                    <Picker selectedValue = {this.state.income}
                    style = {federalStyles.picker}
                    onValueChange = {(itemValue, itemIndex) => 
                    this.setState({income: itemValue})}>
                        <Picker.Item label = "a. $26,000 or less" value = "$26,000 or less"/>
                        <Picker.Item label = "b. $26,001 to $65,000" value = "$26,001 to $65,000"/>
                        <Picker.Item label = "c. $65,000 or above" value = "$65,000 or above"/>
                    </Picker>
                </View> */}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    
                    <View style = {federalStyles.modalWrapper}>
                        <Text style = {federalStyles.modalText}>$26,000 per year is about $500/week or $12.50/hour for full-time employees.</Text>
                        <Text style = {federalStyles.modalText}>$65,000 is about $1,250/week or $30/hour.</Text>

                        <TouchableOpacity
                            style={federalStyles.modalReturn}
                            onPress={() => {
                                this.setModalVisible(false)
                            }}>
                            <Text style={federalStyles.modalText}>Return</Text>
                        </TouchableOpacity>
                    </View>  
                </Modal>
                <TouchableOpacity onPress = {() => {
                    this.setState({income: "a"})}} 
                    style = {[
                        this.state.income == "a" && federalStyles.buttonOptionContainerSelect,
                        this.state.income != "a" && federalStyles.buttonOptionContainer,
                    ]}>
                        <Text style = {federalStyles.buttonText}>$26,000 or less</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {
                    this.setState({income: "b"})}} 
                    style = {[
                        this.state.income == "b" && federalStyles.buttonOptionContainerSelect,
                        this.state.income != "b" && federalStyles.buttonOptionContainer,
                    ]}>
                        <Text style = {federalStyles.buttonText}>$26,001 to $65,000</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => {
                    this.setState({income: "c"})}} 
                    style = {[
                        this.state.income == "c" && federalStyles.buttonOptionContainerSelect,
                        this.state.income != "c" && federalStyles.buttonOptionContainer,
                    ]}>
                        <Text style = {federalStyles.buttonText}>$65,000 or above</Text>
                </TouchableOpacity>

                
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