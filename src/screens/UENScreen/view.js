import React, {useState} from 'react';
import {View, Text, Image, TextInput, Button, ProgressBarAndroidComponent, TouchableOpacity} from 'react-native';

///components
import Input from 'src/components/Input';
import Press from 'src/components/Press';
import Select from 'src/components/Select';

///styles
import styles from './styles';

///constants
import R from 'constants/R';

const UENScreen = (props) => {
    const [isSelected, setSelection] = useState(false);

return (
<View style = {styles.rootView}>
    <View style={styles.container}>
        <Text style={styles.step}>{R.strings.uen.step}</Text>
        <Image 
            source={R.images.img_logo_large}
            style= {styles.logo}
        />
    </View>
    <Text style={styles.bitMore}>{R.strings.uen.bitMore}</Text>
    <View style={styles.Container}>
        <Image 
            source={R.images.img_right_tick}
            style={styles.redTick}
        />
        <Image 
            source={R.images.img_red_dash}
            style={styles.redDash}
        />
        <Image 
            source={R.images.img_white_tick}
            style={styles.whiteTick}
        />
        <Image 
            source={R.images.img_white_dash}
            style={styles.redDash}
        />
        <Image 
            source={R.images.img_empty_tick}
            style={styles.emptyTick}
        />
    </View>
    <View style={styles.container}>
        <Text style={styles.signUp}>{R.strings.uen.signUp}</Text>
        <Text style={styles.profileSetup}>{R.strings.uen.profileSetup}</Text>
        <Text style={styles.getStarted}>{R.strings.uen.getStarted}</Text>
    </View>
    <Text style={styles.access}>{R.strings.uen.access}</Text>
    <Input
        style= {[styles.input, styles.uen]}
        // image = {R.images.ic_mail}
        label = {R.strings.uen.uen}
        id = "email"
        placeholder = {R.strings.uen.emailPlaceholder}
        onInputChangeHandler = { text => {
            setEmail(text)
        }}
    />
    <Input
        style= {[styles.input, styles.name]}
        label = {R.strings.uen.companyName}
        id = "email"
        placeholder = {R.strings.uen.xyz}
        onInputChangeHandler = { text => {
            setEmail(text)
        }}
    />
    <Text style={styles.content}>{R.strings.uen.content}</Text>
    <Select
        value={isSelected}
        onSelectChangeHandler={setSelection}
        label={R.strings.uen.check1}
        style={[styles.check1, styles.Select]}
    />
    <Select
        value={isSelected}
        onSelectChangeHandler={setSelection}
        label={R.strings.uen.check2}
        style={[styles.check1, styles.Select]}
    />
    <Press 
        title={R.strings.uen.submit}
        paint={R.colors.red}
        style={[styles.butt, styles.but]}
    />
    <View style={styles.free}>
        <Text style={styles.freeLancer}>{R.strings.uen.freeLancer}</Text>
        <Press 
            title={R.strings.uen.click}
            paint={R.colors.red}
            style={[styles.butt, styles.but]}
        />
    </View>
</View>
)
}

export default UENScreen;