import { StyleSheet} from "react-native"

const basicStyles = StyleSheet.create({
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
        margin: 5,
    },

    questionMoreInfoContainer: {
        flexDirection: "row",
    },

    moreInfoContainer: {
        width: 25,
        margin: 5,
        padding: 5,
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: -30,
        backgroundColor: "#89cff0",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 25 ,
        shadowOffset : { width: 1, height: 13},
    },

    questionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -130,
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

    linkText: {
        textAlign: "center",
        fontSize: 20,
        color: "#003366",
        margin: 10,
        borderColor: "#003366",
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
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
    progressBarContainer:{
        position: "absolute",
        bottom: 5,
    }

})

export { basicStyles }