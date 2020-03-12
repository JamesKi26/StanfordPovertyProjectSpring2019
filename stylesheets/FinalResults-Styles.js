import { StyleSheet} from "react-native"

const finalResultStyles = StyleSheet.create({
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

    text: {
        textAlign: "left",
        fontSize: 15,
        color: "#fff",
        margin: 5,
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

    row: {
        width: "95%",
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
    }
})

export { finalResultStyles }