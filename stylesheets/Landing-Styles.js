import { StyleSheet} from "react-native"

const landingStyles = StyleSheet.create({
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

    optionButtonContainer: {
        width: "50%",
        margin: 5,
        padding: 10,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",

    },

    buttonContainer: {
        width: "70%",
        margin: 50,
        padding: 10,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 5,
    },

    buttonText: {
        width: "80%",
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    }
})

export { landingStyles }