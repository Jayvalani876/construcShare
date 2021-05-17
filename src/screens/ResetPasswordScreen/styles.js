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
        marginTop: 23
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
    need: {
        marginTop: 70
    }
});