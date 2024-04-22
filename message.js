import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function message()
 {
    const navigation = useNavigation();
    
    return (
      <SafeAreaView>
        <Text>Welcome to my messages</Text>
        
      </SafeAreaView>
    );
  }