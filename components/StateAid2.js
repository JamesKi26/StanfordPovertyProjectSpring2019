import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Picker } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { stateStyles } from "../stylesheets/StateAid-Styles"
import * as Progress from 'react-native-progress';
export default class StateAid2 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            dataMap : this.props.navigation.state.params.mapArg,
             tableHeader : ["Cal Grant", "UC System", "CSU System", "Private College"],
            tableData : [["Up to $12,750", "Up to $5,742", "Up to $9,084"],
                        ["Living expenses and tuition up to $1,672 in first year"],
                        ["Up to $2,462 for tuition and $547 supplies for technical programs"]],
            
             tableTitle :["A (3.0 GPA)", "B (2.0 GPA)", "C"],
        }
    }
    
    renderStateResults(){
        if(this.state.dataMap.get("State-Income") == "a" || this.state.dataMap.get("State-Income") == "b"){
            return(
                <View>
                    <Text style = {stateStyles.resultTitle}>Based on your income, you might be eligible for Cal Grants from the state</Text>
                    
                    {/* <View style  = {{flex: 1}}>
                        <Table borderStyle = {stateStyles.table}>
                            <Row data={this.state.tableHeader} flexArr={[1, 1, 1, 1]} textStyle={stateStyles.subTitle}/>
                            <TableWrapper style = {stateStyles.wrapper}>
                            <Col data = {this.state.tableTitle} style = {stateStyles.tableTitle} textStyle={stateStyles.subTitle}/> 
                            <Rows data = {this.state.tableData} textStyle = {stateStyles.subTitle}/>
                            </TableWrapper>
                        </Table>
                    </View> */}
                 
                    <Table borderStyle={stateStyles.table}>
                    <Row data={this.state.tableHeader} flexArr={[1, 1, 1, 1]}  textStyle={stateStyles.subTitle}/>
                    <TableWrapper style={stateStyles.wrapper}>
                        <Col data={this.state.tableTitle} textStyle={stateStyles.subTitle}/>
                        <Rows data={this.state.tableData} flexArr={[1, 1, 1]}  textStyle={stateStyles.subTitle}/>
                    </TableWrapper>
                    </Table>
              

                    <Text style = {stateStyles.subTitle}>And Community College would be free for you!</Text>
                    <Text style = {stateStyles.subTitle}>To find out exactly what you are eligible for, fill out your FAFSA form. No matter your grades, there is money for you to go to college!</Text>
                </View>
            );
        }
        // else if(this.state.dataMap.get("State-Income") == "b"){
        //     return(
        //         <View>
        //             <Text style = {stateStyles.resultTitle}>Cal Grants can be used to cover tuition and some living expenses. 60% of students in the UC and CSU systems have all of their tuition covered through these grants!</Text>
        //             <Text style = {stateStyles.resultSubTitle}>If you have a 3.0 GPA, you could be eligible for Cal Grant A. 
        //             This grant covers tuition at four year universities in CA. It covers up to $12,570 per year at UCs, $5,742 per year at CSUs, and over $9,084 per year at private colleges! 
        //             If you don’t have a 3.0, Cal Grant C could be an option. It offers up to $1,094 to pay for a technical training program. 
        //             And Community College would be free for you!
        //             To find out exactly what you are eligible for, fill out your FAFSA form.</Text>
        //         </View>
        //     );
        // }
        else {
            return(
                <View>
                    <Text style = {stateStyles.resultTitle}>Based on your income, you might be eligible for the Middle Class Scholarship from the state.</Text>
                    <Text style = {stateStyles.resultSubTitle}>You may be eligible for California’s Middle Class Scholarship (MCS). 
                    MCS is available for students with family income and assets up to $177,000. This scholarship can cover between 10% - 40% of tuition at UC and CSU campuses. 
                    And you could probably attend Community College for free!</Text>
                    <Text style = {stateStyles.resultSubTitle}>Fill out the FAFSA to find out exactly what you are eligible to receive and get your money for college!</Text>
                </View>
            );
        }
    }

    render(){
       
        return (
            <View style = {stateStyles.background} >
                <Text style = {stateStyles.title}>State Grants</Text>

                {this.renderStateResults()}

                <TouchableOpacity onPress = {() => {
                    this.props.navigation.navigate("BasicNeeds1", {mapArg: this.state.dataMap})  
                }}     
                    style = {stateStyles.buttonContainer}>
                        <Text style = {stateStyles.resultButtonText}>See what other money is out there</Text>
                </TouchableOpacity>
                <View style = {stateStyles.progressBarContainer}>
                    <Progress.Bar progress={0.70} width = {300} height = {5} color = {"#003366"} borderWidth = {2} borderColor = {"#fff"} />
                </View>
            </View>
        );
    }
}