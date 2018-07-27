// import libraries for making component 
import React from 'react';
import { Text, View } from 'react-native';

// make component 

const Header = (props) => {
    const { textStyle, viewStyle } = styles;                             // decontructuring

    return (
        <View style={viewStyle}>                                              
         <Text style={textStyle}> {props.headerText} </Text>                
        </View>
    );                                                                       //properties
};

const styles = {
    viewStyle: {
        backgroundColor: '#fffe4b5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
};

// make component available to other parts of the app

export { Header };
