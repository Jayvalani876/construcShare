import {StyleSheet} from 'react-native';

import R from 'constants/R';

export default StyleSheet.create({
    container: {
        // flex: 1,
        alignSelf: 'center',
    },  
    help: {
        width: 60,
        height: 60,
    },
    needHelp: {
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 14,
        textAlign: "center",
        alignSelf: "center",
        color: R.colors.black,
        marginTop: 11,
    }, 
});