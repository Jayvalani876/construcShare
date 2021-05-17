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
    work: {
        marginTop: 15,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 24,
        alignSelf: 'center',
        textAlign: 'center',
    },
    video: {
        marginTop: 13,
        height: 179,
        width: 400,
    },
    started: {
        marginTop: 13,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
    },
    numbers: {
        flexDirection: 'row',
        marginTop: 33
    },
    one: {
        marginLeft: 55,
        borderWidth: 1,
        borderRadius: 15,
        height: 29,
        width: 29,
        textAlign: 'center',
        padding:5,
        backgroundColor: R.colors.red,
        color: R.colors.white
    },
    up: {
        marginTop: 4,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 12,
        marginLeft: 51
    },
    two: {
        marginLeft: 94,
        borderWidth: 1,
        borderRadius: 15,
        height: 29,
        width: 29,
        textAlign: 'center',
        padding:5,
        backgroundColor: R.colors.white,
        color: R.colors.black
    },
    service: {
        marginTop: 4,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 12,
        marginLeft: 55
    },
    three: {
        marginLeft: 55,
        borderWidth: 1,
        borderRadius: 15,
        height: 29,
        width: 29,
        textAlign: 'center',
        padding:5,
        backgroundColor: R.colors.white,
        color: R.colors.black
    },
    finish: {
        marginTop: 4,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 12,
        marginLeft: 45
    },
    portion: {
        flexDirection: 'row',
        marginTop: 15
    },
    signup: {
        // marginTop: 45,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 32,
        marginLeft: 32
    },
    learn: {
        marginTop: 11,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 13,
        marginLeft: 32,
        color: R.colors.red
    },
    sitting: {
        // marginTop: 45,
        marginRight: 31
    },
    paragraph: {
        marginTop: 7,
        marginLeft: 32,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 15,
        color: R.colors.black
    },
    but:{
        marginLeft: 16,
        marginRight: 24,
        marginTop: 20,
    }
});