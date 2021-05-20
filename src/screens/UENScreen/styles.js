import {StyleSheet} from 'react-native';


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex:1,
        backgroundColor: R.colors.white,
    },
    container: {
        flexDirection: 'row'
    },
    logo: {
        marginTop: 50,
        // alignSelf: 'center',
        width: 25,
        height: 25,
        alignSelf: 'flex-end',
        marginLeft: 100
    },
    step: {
        marginTop: 50,
        alignSelf: 'center',
        textAlign: 'center',
        // alignSelf: 'flex-end',
        marginLeft: 151,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.black,
    },
    bitMore:{
        marginTop: 29,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 24,
        color: R.colors.black,
        alignSelf: 'center'
    },
    Container: {
        flexDirection: 'row',
        marginTop: 8
    },
    redTick: {
        marginLeft: 35,
    },
    redDash: {
        marginTop: 8,
        marginLeft: 15 
    },
    whiteTick: {
        marginLeft: 20
    },
    emptyTick: {
        marginLeft: 20  
    },
    signUp: {
        marginLeft: 30,
        marginTop: 6,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.grey,
    },
    profileSetup: {
        marginLeft: 75,
        marginTop: 6,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.grey,
    },
    getStarted: {
        marginLeft: 60,
        marginTop: 6,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.grey,
    },
    access: {
        marginTop: 28,
        marginLeft: 20,
    },
    uen: {
        marginTop: 15,   
    },
    name: {
        marginTop: 16,
    },
    content:{
        marginTop: 20,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.red,
        borderWidth: 1,
        borderColor: R.colors.lightgrey,
        textAlign: 'center',
        marginLeft: 25,
        marginRight: 25,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    check1: {
        marginTop: 23,
        marginRight: 101,
    },
    but: {
        marginTop: 20,
        // marginVertical: 33,
        marginRight: 33,
        marginLeft: 33
    },
    free:{
        flex: 1,
        backgroundColor: R.colors.black,
        marginTop: 17
    },
    freeLancer: {
        marginTop: 10,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 24,
        color: R.colors.white,
        alignSelf: 'center',
        textAlign: 'center'
    }
    
});