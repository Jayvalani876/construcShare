import {StyleSheet} from 'react-native';


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex:1,
        backgroundColor: R.colors.white
    },
    logo: {
        marginTop: 43,
        alignSelf: 'flex-end',
        width: 25,
        height: 25,
        marginRight: 31
    },
    verification: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 24,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 21
    },
    girl: {
        marginTop: 25,
        alignSelf: 'center',
        height: 278,
        width: 90
    },
    hurry: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 19 
    },
    mailSent: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 18,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 27
    },
    email: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.grey,
        marginTop: 25,
        textShadowColor: R.colors.offwhite,
        textShadowRadius: 10,
    },
    clickMail: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 22,
        marginRight: 46,
        marginLeft: 38
    },
    findMail: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 50
    },
    resendMail:{
        marginTop: 17,
        marginRight: 20,
        marginLeft: 20
    }
});