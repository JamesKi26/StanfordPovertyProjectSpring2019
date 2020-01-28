import { StyleSheet} from "react-native"

const basicStyles = StyleSheet.create({
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
        margin: 5,
    },

    questionMoreInfoContainer: {
        flexDirection: "row",
    },

    moreInfoContainer: {
        width: 25,
        margin: 10,
        padding: 5,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: -30,
    },

    questionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -130,
    },

    optionButtonContainer: {
        width: 200,
        margin: 10,
        padding: 5,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
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

    linkText: {
        textAlign: "center",
        fontSize: 20,
        color: "#add8e6",
        margin: 10,
        borderColor: "#add8e6",
        borderWidth: 2,
        borderRadius: 15,
    },

    dropMenuContainer: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: "center",
        borderRadius: 1,
        margin: 10,
        padding: 5,
    },

    picker: {
        height: 50,
        width: 75,
        fontSize: 16,
        color: "#fff",
        shadowOpacity: 0.5,
    },


})

export { basicStyles }