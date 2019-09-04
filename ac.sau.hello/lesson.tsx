import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

export default class Lesson extends React.Component{
    render(){
        return(
        <View style={styles.conatiner}>
            <Text>수업 이름</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner: {
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#FF6663'
    }

});