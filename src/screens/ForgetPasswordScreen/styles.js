import {StyleSheet} from 'react-native';


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex:1,
        backgroundColor: R.colors.white
    },
    logo: {
        marginTop: 103,
        width: 176,
        height: 122,
        alignSelf: 'center',
    },
    txt_forget: {
        marginTop: 13,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: 66,
        marginRight: 65
    },
    txt_enterEmail: {
        marginTop: 17,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        marginLeft: 66,
        marginRight: 65,
        color: R.colors.grey
    },
    email: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        marginHorizontal: 32,
        color: R.colors.grey,
        marginTop: 51
    },
    selectionstyle:{
        flexDirection: 'row',
        marginLeft: 32,
        marginRight: 32,
        borderColor: R.colors.grey,
        borderWidth: 1,
        height: 40,
        borderRadius: 10 ,
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
    txtimput: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: 'left',
    },
    but:{
        marginTop: 72,
        marginLeft: 33,
        marginRight: 33,
    },
    rap: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 18
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