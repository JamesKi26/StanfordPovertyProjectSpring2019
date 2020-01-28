import { StyleSheet} from "react-native"

const stateStyles = StyleSheet.create({
    gradientBackground:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    keyboard:{
        flex: 1, 
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
    },

    optionContainer: {
        position: "absolute",
        top: 50,
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
        margin: 15,
    },
    
    subTitle: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
        margin: 10,
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
        position: "absolute",
        top: 220,
    },

    buttonContainer: {
        width: "70%",
        margin: 50,
        padding: 20,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 5,
    },

    optionButtonContainer: {
        width: 200,
        margin: 10,
        padding: 20,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
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
    },
})

export { stateStyles }