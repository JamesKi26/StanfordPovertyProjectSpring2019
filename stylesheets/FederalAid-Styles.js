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
        marginTop: 10,
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

    buttonOptionContainer: {
        width: "70%",
        margin: 5   ,
        padding: 20,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 15,
    },

    buttonModalContainer: {
        width: "20%",
        margin: 5   ,
        padding: 20,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: 15,
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

    buttonOptionContainerSelect: {
        width: "70%",
        margin: 5   ,
        padding: 20,
        
        backgroundColor: "#add8e6",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 15,
    },

    buttonText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
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
    },
    modalWrapper: {
        flex: 1,
        position: "absolute",
        width: "90%",
        height: "90%",
        marginHorizontal: "5%",
        marginVertical: "5%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
    },

    modalReturn: {
        borderRadius: 5,
        padding: 5,
        borderColor: "#fff",
        borderWidth: 2,
        width: "40%",
        justifyContent: "center",
        textAlign: "center",
        margin: 30,
        position: "absolute",
        bottom: 0,
    },
    modalText: {
        fontSize: 25,
        textAlign: "center",
        color: "#fff",
        margin: 5,
    },
})

export { federalStyles }