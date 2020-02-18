import { StyleSheet} from "react-native"

const genInfoDisclosureStyles = StyleSheet.create({
    gradientBackground:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    keyboard:{
        flex: 1, 
        flexDirection: "column", 
        //justifyContent: "center",
        alignItems: "center",
    },

    title: {
        textAlign: "center",
        fontSize: 30,
        color: "#fff",
        margin: 15,
        marginTop: 40,
    },
    
    subTitle: {
        textAlign: "center",
        fontSize: 20,
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

    numericInput: {
        borderWidth: 2,
        borderRadius: 10,
        width: 300,
        borderColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: "center",
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        marginVertical: 5,
        color: "#fff"
    },
})

export { genInfoDisclosureStyles }