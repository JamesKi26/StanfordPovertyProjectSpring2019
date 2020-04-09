import { StyleSheet} from "react-native"

const landingStyles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89cff0"
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

    optionButtonText: {
        width: "80%",
        fontSize: 40,
        color: "#fff",
        textAlign: "center",
    },

    optionButtonContainer: {
        width: "50%",
        height: "15%",
        margin: 5,
        padding: 10,
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
        shadowColor: 'black',
        backgroundColor: "#89cff0",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 25 ,
        shadowOffset : { width: 1, height: 13},
    },

    buttonText: {
        width: "80%",
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
    progressBarContainer:{
        position: "absolute",
        bottom: 5,
    }
})

export { landingStyles }