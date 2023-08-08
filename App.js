import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
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

     {/*Write a Task*/}
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'I Get To...'} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
     </KeyboardAvoidingView>
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
},
writeTaskWrapper: {
  position: "absolute",
  bottom: 60,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center"
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor:"#739237",
  borderRadius: 60,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1

},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: "#fff",
  borderRadius: 60,
  borderColor:"#068da9",
  borderWidth: 1,
  width: 250,

},
addText: {}
});

//#ECF8F9
//#7e1717
//#e55807
//#068da9