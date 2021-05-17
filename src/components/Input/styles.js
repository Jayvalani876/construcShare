import {StyleSheet} from 'react-native';

import R from 'constants/R';

export default StyleSheet.create({
    container: {
        // flex:1,
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: R.colors.grey,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        // flex:1,
        marginRight: 30,
        marginLeft: 30
    },
    label: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        color: R.colors.grey,
        marginLeft: 25
    },
    img: {
        height: 25,
        width: 23,
        resizeMode : 'stretch',
        marginHorizontal: 15,
        alignSelf: 'center'
    },
    input: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: 'left',
        flex: 1,
        marginLeft: 10,
        // marginTop: 5
    }
});