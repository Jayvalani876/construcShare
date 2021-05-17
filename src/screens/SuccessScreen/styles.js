import {StyleSheet} from 'react-native';


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex:1,
        backgroundColor: R.colors.white,
        marginTop: 20
    },
    logo: {
        marginTop: 106,
        alignSelf: 'center',
        width: 202,
        height: 154,
        marginLeft: 86,
        marginRight: 86
    },
    success: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 30,
        color: R.colors.black,
        marginTop: 27,
        alignSelf: 'center',
        textAlign: 'center'
    },
    welcome: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.grey,
        marginTop: 12,
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: 138,
        marginRight: 138
    },
    email: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.black,
        marginTop: 12,
        alignSelf: 'center',
        textAlign: 'center',
    },
    continue: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.grey,
        marginTop: 58,
        alignSelf: 'center',
        textAlign: 'center',
    },
    need: {
        marginTop: 30
    },
    but:{
        marginTop: 46,
        marginLeft: 33,
        marginRight: 33,
    }
});