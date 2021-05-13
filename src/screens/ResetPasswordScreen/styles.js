import {StyleSheet} from 'react-native';


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex:1,
        backgroundColor: R.colors.white
    },
    logo: {
        marginTop: 78,
        alignSelf: 'center',
        width: 74,
        height: 74
    },
    reset: {
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
        marginTop: 25
    },
    password: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        marginHorizontal: 32,
        color: R.colors.grey,
        marginTop: 23 
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
        marginHorizontal: 13,
        margin: 5,
        height: 25,
        width: 24,
        resizeMode : 'stretch',
        alignItems: 'center',
        marginLeft:13,
        marginTop: 7
    },
    imagestyle: {
        marginHorizontal: 13,
        margin: 5,
        height: 25,
        width: 20,
        resizeMode : 'stretch',
        alignItems: 'center',
        marginLeft:13,
        marginTop: 6
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
    butt:{
        marginTop: 25,
        marginRight: 33,
        marginLeft: 32
    },
    but:{
        marginTop: 15,
        marginRight: 33,
        marginLeft: 32,
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