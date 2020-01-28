import { StyleSheet} from "react-native"

const federalStyles = StyleSheet.create({
    gradientBackground:{
        flex: 1,
        justifyContent: "center",
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

    linkText: {
        textAlign: "center",
        fontSize: 20,
        color: "#add8e6",
        margin: 10,
        borderColor: "#add8e6",
        borderWidth: 2,
        borderRadius: 15,
    },

    additionalText: {
        textAlign: "center",
        fontSize: 10,
        color: "#fff",
        margin: 10,
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

    buttonText: {
        fontSize: 16,
        color: "#fff",
    },

    picker: {
        height: 50,
        width: 300,
        fontSize: 16,
        color: "#fff",
        shadowOpacity: 0.5,
    },

    pickerContainer: {
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 1,
    }
})

export { federalStyles }