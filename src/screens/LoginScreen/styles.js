import { StyleSheet } from "react-native";


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: R.colors.white
    },
    containerView: {
        flex: 1,
        marginTop: 113,
    },
    logo: {
        alignSelf: 'center',
        width: 74,
        height: 74
    },
    welcome: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 30,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 29
    },
    input: {
        width: "93%",
        alignSelf: "center",
        height: 75,
    },
    password: {
        marginTop: 20
    },
    forgetPass: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 11,
        color: R.colors.black,
        marginTop: 7,
        textAlign: 'right',
        marginRight: 32,
    },
    but: {
        marginTop: 26,
        // marginVertical: 33,
        marginRight: 33,
        marginLeft: 33
    },
    rap: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    noAccount: {
        color: R.colors.grey,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
    },
    signup: {
        color: R.colors.red,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,

    },
    need: {
        marginTop: 70
    }
});
