import {StyleSheet} from 'react-native';

import R from 'constants/R';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 20
    },
    select:{
        alignSelf: 'center'
    },
    label:{
        marginLeft: 17,
        fontFamily: R.fonts.sofiaMedium,
        fontSize: 15,
        color: R.colors.grey,
    },
});