import {StyleSheet} from 'react-native';


import R from 'constants/R';


export default StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: R.colors.black,
    },
    background: {
        // alignSelf: 'center',
        height: '50%',
        width: '100%',
        alignSelf: 'center',
        flex: 1
    },
    nonUen: {
        marginTop: 15,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.black,
        alignSelf: 'center',
        textAlign: 'center'
    },
    content: {
        marginTop: 16,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 17,
        color: R.colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        marginRight: 45,
        marginLeft: 46,
    },
    registeredUen: {
        marginTop: 16,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.lightgrey,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderColor: R.colors.lightgrey
    },
    but: {
        marginTop: 25,
        // marginVertical: 33,
        marginRight: 33,
        marginLeft: 33,
    },
    button: {
        marginTop: 10,
        // marginVertical: 33,
        marginRight: 33,
        marginLeft: 33,
    },
});