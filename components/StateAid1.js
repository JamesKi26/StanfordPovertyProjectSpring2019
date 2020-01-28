import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker } from "react-native";
import { stateStyles } from "../stylesheets/StateAid-Styles"

export default class StateAid1 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
            residenceState: "CA - California",
            stateArray : [ "AK - Alaska", 
                "AL - Alabama", 
                "AR - Arkansas", 
                "AS - American Samoa", 
                "AZ - Arizona", 
                "CA - California", 
                "CO - Colorado", 
                "CT - Connecticut", 
                "DC - District of Columbia", 
                "DE - Delaware", 
                "FL - Florida", 
                "GA - Georgia", 
                "GU - Guam", 
                "HI - Hawaii", 
                "IA - Iowa", 
                "ID - Idaho", 
                "IL - Illinois", 
                "IN - Indiana", 
                "KS - Kansas", 
                "KY - Kentucky", 
                "LA - Louisiana", 
                "MA - Massachusetts", 
                "MD - Maryland", 
                "ME - Maine", 
                "MI - Michigan", 
                "MN - Minnesota", 
                "MO - Missouri", 
                "MS - Mississippi", 
                "MT - Montana", 
                "NC - North Carolina", 
                "ND - North Dakota", 
                "NE - Nebraska", 
                "NH - New Hampshire", 
                "NJ - New Jersey", 
                "NM - New Mexico", 
                "NV - Nevada", 
                "NY - New York", 
                "OH - Ohio", 
                "OK - Oklahoma", 
                "OR - Oregon", 
                "PA - Pennsylvania", 
                "PR - Puerto Rico", 
                "RI - Rhode Island", 
                "SC - South Carolina", 
                "SD - South Dakota", 
                "TN - Tennessee", 
                "TX - Texas", 
                "UT - Utah", 
                "VA - Virginia", 
                "VI - Virgin Islands", 
                "VT - Vermont", 
                "WA - Washington", 
                "WI - Wisconsin", 
                "WV - West Virginia", 
                "WY - Wyoming"],
            familySizeArray: ["Two", "Three", "Four", "Five", "Six or more"],
            familySize: 2,
            stateAidIncomeAnswer: "",
            incomeMap: [["$43,000", "$92,100"], ["$48,500", "$94,400"], ["$53,900", "$102,500"], ["$60,300", "$109,900"], ["$65,100", "$118,500"]],


        }
    }
    

    


    showPellGrantOptions(){
        
        return(
            <View style = {stateStyles.buttonOption}>
                <Text style = {stateStyles.subTitle}>Family Income: </Text>
                <TouchableOpacity style = {stateStyles.optionButtonContainer}
                onPress = {()=>{
                    this.state.dataMap.delete("State-Income")
                    this.setState({stateAidIncomeAnswer: "a"})
                    }}>
                    <Text style = {stateStyles.buttonText}>{(this.state.incomeMap)[this.state.familySize-2][0]} or less</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {stateStyles.optionButtonContainer}
                onPress = {()=>{
                    this.state.dataMap.delete("State-Income")
                    this.setState({stateAidIncomeAnswer: "b"})
                    }}>
                    <Text style = {stateStyles.buttonText}>Between {(this.state.incomeMap)[this.state.familySize-2][0]} and {(this.state.incomeMap)[this.state.familySize-2][1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {stateStyles.optionButtonContainer}
                onPress = {()=>{
                    this.state.dataMap.delete("State-Income")
                    this.setState({stateAidIncomeAnswer: "c"})
                    }}>
                    <Text style = {stateStyles.buttonText}>More than {(this.state.incomeMap)[this.state.familySize-2][1]}</Text>
                </TouchableOpacity>
            </View>
        );
        
    }

    render(){
        let stateItems = this.state.stateArray.map( (s, i) => {
            return <Picker.Item key = {i} label = {s} value = {s}/>
        });

        let familySizeItems = this.state.familySizeArray.map( (s, i) => {
            return <Picker.Item key = {i} label = {s} value = {i+2}/>
        });
        return (
            <LinearGradient colors = {["#EDDBFF","#8133D4"]} style = {stateStyles.gradientBackground} >
                {/* <Text style = {stateStyles.title}>State Aid</Text> */}

                <View style = {stateStyles.optionContainer}>
                    <View style = {stateStyles.dropMenuContainer}>
                        <Text style = {stateStyles.subTitle}>Select State: </Text>
                        <Picker selectedValue = {this.state.residenceState}
                            style = {stateStyles.picker2}
                            onValueChange = {(itemValue) => 
                            this.setState({residenceState: itemValue})}>
                            {stateItems}
                        </Picker>
                    </View>

                    <View style = {stateStyles.dropMenuContainer}>
                        <Text style = {stateStyles.subTitle}>Select Family Size: </Text>
                        <Picker selectedValue = {this.state.familySize}
                            style = {stateStyles.picker1}
                            onValueChange = {(itemValue) => 
                            this.setState({familySize: itemValue})}>
                            {familySizeItems}
                        </Picker>
                    </View>
                </View>
                
                {this.showPellGrantOptions()}
                
                <TouchableOpacity onPress = {() => {

                    if(this.state.stateAidIncomeAnswer == ""){
                        alert("Please select a family income answer")
                    }
                    else{
                        this.state.dataMap.set("State-Income", this.state.stateAidIncomeAnswer)
                        //console.log(this.state.dataMap)
                        this.props.navigation.navigate("StateAid2", {mapArg: this.state.dataMap})  
                    }
                }}     
                    style = {stateStyles.buttonContainer}>
                        <Text style = {stateStyles.buttonText}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}