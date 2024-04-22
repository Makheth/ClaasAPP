import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import message from '../message';

export default function Dashboard({ route }) {
  const navigation = useNavigation();
  const email = route.params.paramemail;
  
  return (
    <SafeAreaView>
      <Text>Welcome to my dashboard</Text>
      <Text>{email}</Text>
      <Button   title="to new" onPress={
        ()=> navigation.navigate("message",{})
      }
      />
    </SafeAreaView>
  )
}
