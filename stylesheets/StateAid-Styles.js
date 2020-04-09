import { StyleSheet} from "react-native"

const stateStyles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89cff0"
    },

    keyboard:{
        flex: 1, 
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
    },

    optionContainer: {

        alignItems: "center",
    },

    dropMenuContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 1,
        margin: 10,
        alignItems: "center",
    },

    title: {
        textAlign: "center",
        fontSize: 30,
        color: "#fff",
        margin: 5,
    },
    
    subTitle: {
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        margin: 5,
        padding: 5,
    },

    resultTitle: {
        textAlign: "center",
        fontSize: 19,
        color: "#fff",
        margin: 10,
    },
    
    resultSubTitle: {
        textAlign: "center",
        fontSize: 14,
        color: "#fff",
        margin: 10,
    },

    linkText: {
        textAlign: "center",
        fontSize: 20,
        color: "#aaa",
        margin: 10,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
    },

    additionalText: {
        textAlign: "center",
        fontSize: 10,
        color: "#fff",
        margin: 10,
    },

    buttonOption: {
        alignItems: "center",

    },

    buttonContainer: {
        width: "70%",
        margin: 30,
        padding: 20,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 5,
        backgroundColor: "#89cff0",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 25 ,
        shadowOffset : { width: 1, height: 13},
    },

    optionButtonContainer: {
        width: 200,
        margin: 5,
        padding: 5,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89cff0",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 25 ,
        shadowOffset : { width: 1, height: 13},
    },

    buttonOptionContainerSelect: {
        width: 200,
        margin: 5,
        padding: 5,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#add8e6",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 25 ,
        shadowOffset : { width: 1, height: 13},
    },

    buttonText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center"
    },

    resultButtonText: {
        fontSize: 13,
        color: "#fff",
        textAlign: "center"
    },

    picker1: {
        height: 50,
        width: 100,
        fontSize: 16,
        color: "#fff",
        shadowOpacity: 0.5,
    },
    picker2: {
        height: 50,
        width: 200,
        fontSize: 16,
        color: "#fff",
        shadowOpacity: 0.5,
        borderWidth: 2,
        borderColor: "#fff",
    },

    
    table: {
        height: 500,
        borderColor: "#fff",
        borderWidth: 2,
        
    },
    wrapper: {
        flexDirection: "row",
    },
    tableTitle: {
        flex: 1,
    },
    pickerSelectedContainer:{
        borderBottomColor: "#fff",
        borderWidth: 2,
    },
    progressBarContainer:{
        position: "absolute",
        bottom: 5,
    }

})

export { stateStyles }