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
        marginTop: 25
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
       marginTop: 95
   }
});