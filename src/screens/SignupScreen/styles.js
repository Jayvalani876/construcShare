import {StyleSheet} from 'react-native';


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex:1,
        backgroundColor: R.colors.white
    },
    containerView: {
        marginTop: 20,
    },
    logo: {
        marginTop: 20,
        alignSelf: 'flex-end',
        width: 25,
        height: 25,
        marginRight: 31
    },
    accLog: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 32
    },
    acc: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.black,
        marginTop: 15,
        marginRight: 5
    },
    login:{
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.red,
        marginTop: 13
    },
    hello: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 42,
        color: R.colors.black,
        marginTop: 20,
        alignSelf: 'center',
        textAlign: 'center'
    },
    createAccount:{
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.black,
        marginTop: 25,
        alignSelf: 'center',
        textAlign: 'center'
    },
    email: {
        marginTop: 17,
    },
    but: {
        marginTop: 31
    },
    rap: {
        flexDirection: 'row',
    },
    txt: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 22,
        color: R.colors.black,
        marginTop: 32,
        marginLeft: 56
    },
    img: {
        marginTop: 22,
        height: 102,
        width: 102,
        marginRight: 62
    },
    connect:{
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.black,
        marginTop: 16,
        marginLeft: 57,
        marginRight: 57
    },

    but: {
        marginHorizontal: 29,
        marginVertical: 20, 
        marginTop: 15
    },
});