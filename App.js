import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
     {/*Today's Tasks*/}
     <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Things I Get To Do</Text>

      <View style={styles.items}>
        {/*This is where the tasks will go*/}
        <Task text={"Task 1"} />
        <Task text={"Task 2"} />
      </View>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FF42'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
    
sectionTitle: {
  fontSize: 24,
  fontWeight: "bold"
},
items: {
  marginTop: 30
}
});

//#ECF8F9
//#7e1717
//#e55807
//#068da9