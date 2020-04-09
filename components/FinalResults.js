import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker, Alert, Linking } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { finalResultStyles } from "../stylesheets/FinalResults-Styles"
import * as Progress from 'react-native-progress';
export default class FinalResults extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
            //sample: ["123", "abc"]
            fedString: "",
            stateString: "",
            basicNeedsString: "",
        }
    }

  
    // renderFedResult(){
    //     if(this.state.dataMap.get("Fed-Income") == "a"){
    //         return(
    //             <Text style = {finalResultStyles.text}>Federal Grants: You could be eligible for the maximum Pell Grant amount - $6,195!</Text>
    //         );
    //     }
    //     else if (this.state.dataMap.get("Fed-Income") == "b"){
    //         return(
    //             <Text style = {finalResultStyles.text}>Federal Grants: The average Pell Grant for your income range is about $3,000!</Text>
    //         );
    //     }
    //     else{
    //         return(
    //             <Text style = {finalResultStyles.text}>Federal Grants: The average Pell Grant for your income range is about $350.</Text>
    //         );
    //     }
    // }

    // renderStateResult(){
    //     if(this.state.dataMap.get("State-Income") == "a"){
    //         return(
    //             <Text style = {finalResultStyles.text}>State Grants: Cal Grant A (3.0 GPA) – Up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges!
    //             Cal Grant B (2.0 GPA) – Up to $1,672 of your living expenses during the first year of college.
    //             Cal Grant C - Up to $1,094 to pay for a technical training program.
    //             And community college would be free!</Text>
    //         );
    //     }
    //     else if (this.state.dataMap.get("State-Income") == "b"){
    //         return(
    //             <Text style = {finalResultStyles.text}>State Grants: Cal Grant A (3.0 GPA) – Up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges!
    //             Cal Grant C - Up to $1,094 to pay for a technical training program.
    //             And community college would be free!</Text>
    //         );
    //     }
    //     else{
    //         return(
    //             <Text style = {finalResultStyles.text}>State Grants: You may be eligible for California’s Middle Class Scholarship (MCS), which covers 10% - 40% of tuition at UC and CSU campuses.
    //             And you could probably attend Community College for free!</Text>
    //         );
    //     }
    // }
    
    // renderFoodResults(){
    //     if(this.state.dataMap.get("Household-Income") != "" ){
    //         return(
    //             <Text style = {finalResultStyles.text}>You could be eligible for up to ${this.state.dataMap.get("BasicNeedsGrant")} in food assistance when you are in college. </Text>
    //         );
    //     }
    // }

    componentDidMount(){
        //Federal Aid
        if(this.state.dataMap.get("Fed-Income") == "a"){
            this.setState({fedString: "You could be eligible for the maximum Pell Grant amount - $6,195!"});
        }
        else if (this.state.dataMap.get("Fed-Income") == "b"){
            this.setState({fedString: "The average Pell Grant for your income range is about $3,000!"});
        }
        else{
            this.setState({fedString: "The average Pell Grant for your income range is about $350."});
        }
        //State Aid
        if(this.state.dataMap.get("State-Income") == "a"){
            this.setState({ stateString: 
                "Cal Grant A (3.0 GPA) – Up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges! Cal Grant B (2.0 GPA) – Up to $1,672 of your living expenses during the first year of college. Cal Grant C - Up to $1,094 to pay for a technical training program. And community college would be free!"});
            
        }
        else if (this.state.dataMap.get("State-Income") == "b"){
            this.setState({ stateString :
                "Cal Grant A (3.0 GPA) – Up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges! Cal Grant C - Up to $1,094 to pay for a technical training program. And community college would be free!"});
            
        }
        else{
            this.setState({ stateString :
                "State Grants: You may be eligible for California’s Middle Class Scholarship (MCS), which covers 10% - 40% of tuition at UC and CSU campuses. And you could probably attend Community College for free!"});
        }
        //Basic Needs
        if(this.state.dataMap.get("Household-Income") != "" ){
            this.setState({ basicNeedsString: "You could be eligible for up to $" + this.state.dataMap.get("BasicNeedsGrant") + " in food assistance when you are in college."})   
        }
    }

    render(){
        
        return (
            <View style = {finalResultStyles.background} >
                <Text style = {finalResultStyles.title}>Final Results</Text>

                <Text style = {finalResultStyles.subTitle}>Here’s a breakdown of what you could receive:</Text>

                {/* {this.renderFedResult()}

                {this.renderStateResult()}

                {this.renderFoodResults()} */}

                <Table borderStyle={finalResultStyles.table}>
                    <Row data = {["Federal Grants", this.state.fedString]} style = {finalResultStyles.row} flexArr={[1, 3]}  textStyle={finalResultStyles.text}/>
                    <Row data = {["State Grants", this.state.stateString]} style = {finalResultStyles.row} flexArr={[1, 3]}  textStyle={finalResultStyles.text}/>
                    <Row data = {["Basic Needs", this.state.basicNeedsString]} style = {finalResultStyles.row} flexArr={[1, 3]}  textStyle={finalResultStyles.text}/>
                </Table>


                <Text style = {finalResultStyles.subTitle}>Remember, this is a rough estimate. To get more exact amounts: Fill out the FAFSA, and any official applications for state and food assistance. </Text>

                {/* <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("", {mapArg: this.state.dataMap})  
                }}     
                    style = {basicStyles.buttonContainer}>
                        <Text style = {basicStyles.buttonText}>Next</Text>
                </TouchableOpacity> */}
                <View style = {finalResultStyles.progressBarContainer}>
                    <Progress.Bar progress={1} width = {300} height = {5} color = {"#003366"} borderWidth = {2} borderColor = {"#fff"} />
                </View>
            </View>
        );
    }
}