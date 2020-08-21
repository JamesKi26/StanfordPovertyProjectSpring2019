import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

// import * as firebase from "firebase";
// API Keys

import LandingPage1Screen from "./components/LandingPage1";
import LandingPage2Screen from "./components/LandingPage2";
import LandingPage2ResultScreen from "./components/LandingPage2Results";
import GenInfoDisclosureScreen from "./components/GenInfoDisclosure"
import FederalAid1Screen from "./components/FederalAid1";
import FederalAid2Screen from "./components/FederalAid2";
import StateAid1Screen from "./components/StateAid1";
import StateAid2Screen from "./components/StateAid2";
import BasicNeeds1Screen from "./components/BasicNeeds1";
import BasicNeeds2Screen from "./components/BasicNeeds2";
import BasicNeeds3Screen from "./components/BasicNeeds3";
import FinalResultsScreen from "./components/FinalResults";

import FamilialIncomeScreen from "./components/FamilialIncome";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return <AppContainer/>
  }
}

export default App

const AppSwitchNavigator = createStackNavigator(
  {
    //FamilialIncome: {screen: FamilialIncomeScreen, navigationOptions: {headerShown: false} },
    
    LandingPage1: {screen: LandingPage1Screen, navigationOptions: {headerShown: false} },
    LandingPage2: {screen: LandingPage2Screen, navigationOptions: {headerShown: false} },
    LandingPage2ResultsScreen: {screen: LandingPage2ResultScreen, navigationOptions: {headerShown: false}},

    GenInfoDisclosure: {screen: GenInfoDisclosureScreen, navigationOptions: {headerShown: false} },
    
    FederalAid1: {screen: FederalAid1Screen, navigationOptions: {headerShown: false} },
    FederalAid2: {screen: FederalAid2Screen, navigationOptions: {headerShown: false} },
    
    StateAid1: {screen: StateAid1Screen, navigationOptions: {headerShown: false} },
    StateAid2: {screen: StateAid2Screen, navigationOptions: {headerShown: false} },
    
    BasicNeeds1: {screen: BasicNeeds1Screen, navigationOptions: {headerShown: false} },
    BasicNeeds2: {screen: BasicNeeds2Screen, navigationOptions: {headerShown: false} },
    BasicNeeds3: {screen: BasicNeeds3Screen, navigationOptions: {headerShown: false} },

    FinalResults: {screen: FinalResultsScreen, navigationOptions: {headerShown: false} },
  },
  {
    //initialRouteName: "LandingPage2",
    initialRouteParams: "LandingPage2Screen",
    headerMode: "float"
  }
)

const AppContainer = createAppContainer(AppSwitchNavigator);
