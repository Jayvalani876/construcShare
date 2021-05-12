import React from 'react';
import {View, Text, Image, TextInput, Button, ProgressBarAndroidComponent} from 'react-native';

import styles from './styles';

import R from 'constants/R';

const WorkingScreen = (props) => {
return (
<View style = {styles.rootView}>
    <View style={styles.containerView}>
        <Image source={R.images.img_logo_large} style = {styles.logo}/>
        <Text style={styles.work}>{R.strings.work.howItWorks}</Text>
        <Image source={R.images.img_video} style={styles.video} />
        <Text style={styles.started}>{R.strings.work.getStarted}</Text>

        <View style={styles.numbers}>
        <View>
        <Text style={styles.one}>{R.strings.work.one}</Text>
        <Text style={styles.up}>{R.strings.work.signUp}</Text>
        </View>

        <View>
        <Text style={styles.two}>{R.strings.work.two}</Text>
        <Text style={styles.service}>{R.strings.work.findService}</Text>
        </View>

        <View>
        <Text style={styles.three}>{R.strings.work.three}</Text>
        <Text style={styles.finish}>{R.strings.work.finishOff}</Text>
        </View>
        </View>

        <View style={styles.portion}>
        <View>
        <Text style={styles.signup}>{R.strings.work.signUp}</Text>
        <Text style={styles.learn}>{R.strings.work.learnMore}</Text>
        </View>
        <Image source={R.images.img_sitting} style={styles.sitting} />
        </View>

        <Text style={styles.paragraph}>{R.strings.work.para}</Text>
        <View style={styles.sign}>
        <Button 
            title={R.strings.work.signUp}
            color= {R.colors.red}
        />
        </View>

    </View>
</View>
)
}

export default WorkingScreen;