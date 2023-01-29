import React from "react";
import {StyleSheet, Image, Text, View } from 'react-native';
import styled from "styled-components";

export default function Header() {
    return (
        <View>
            <View style={styles.main}> 
                <LogoImage source={require('../assets/logo.jpeg')}/>
                <Text style={styles.text}>treatment</Text>
                <Text>trecking</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        backgroundColor: '#fff',
        height: 100,
        width: '100%',
        flexDirection:'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
    }
});

const LogoImage = styled.Image`
    top: -5px
    height: 30px;
    width: 30px;
    
`
