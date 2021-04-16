import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ContactDetails = (props) => {
  return (
    <View>
    </View>
  )
}

ContactDetails.navigationOptions = (nav) => {
  return {
    headerTitle: nav.navigation.getParam('name')
  }
}

export default ContactDetails;

const styles = StyleSheet.create({})