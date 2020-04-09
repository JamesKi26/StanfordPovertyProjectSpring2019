import { StyleSheet} from "react-native"

const genInfoDisclosureStyles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89cff0"
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
        paddingTop: 30,
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
        backgroundColor: "#89cff0",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 25 ,
        shadowOffset : { width: 1, height: 13},
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
    progressBarContainer:{
        position: "absolute",
        bottom: 5,
    }
})

export { genInfoDisclosureStyles }