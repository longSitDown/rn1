import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import CssTree from '../middle/cssTree'

const Buttun = (props) => {
    let styles =CssTree(props.style,'style')
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.style}
        >
            <Text style={styles.style.textStyle}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Buttun
