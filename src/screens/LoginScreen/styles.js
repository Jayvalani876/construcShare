import {StyleSheet} from "react-native";


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex:1,
        backgroundColor: R.colors.white
    },
    containerView: {
        flex:1,
        // marginHorizontal: 32,
        marginTop: 113,
    },
    logo: {
        // marginTop: 52,
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
    email: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        marginHorizontal: 32,
        color: R.colors.grey,
        marginTop: 38 
    },
    password: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        marginHorizontal: 32,
        color: R.colors.grey,
        marginTop: 28 
    },
    selectionstyle:{
        flexDirection: 'row',
        marginLeft: 32,
        marginRight: 32,
        borderColor: R.colors.grey,
        borderWidth: 1,
        height: 40,
        borderRadius: 5 ,
        marginTop: 11,
    },
    imgstyle: {
        marginHorizontal: 10,
        margin: 5,
        // height: 10,
        // width: 13,
        resizeMode : 'stretch',
        alignItems: 'center',
        marginLeft:15
    },
    imgstyle: {
        marginHorizontal: 13,
        margin: 5,
        // height: 10,
        // width: 13,
        resizeMode : 'stretch',
        alignItems: 'center',
        marginLeft:15
    },
    txtimput: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: 'left',
    },
    forgetpass: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 11,
        color: R.colors.black,
        marginTop: 7,
        textAlign: 'right',
        marginRight: 32,
    },
    button: {
        marginHorizontal: 29,
        marginVertical: 20, 
    },
    rap: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    noaccount: {
        color: R.colors.grey,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
    },
    signup: {
        color: R.colors.red,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        
    },
    help: {
        marginTop: 52,
        alignSelf: 'center',
        width: 58,
        height: 58
    },
    needhelp: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 12,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 11
    },
});
