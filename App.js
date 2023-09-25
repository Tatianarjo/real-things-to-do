import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import Task from './components/Task';
import get2doImage from './components/Get2do.png';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the task being edited

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (editIndex !== -1) {
      // If we are editing a task, update the task
      const updatedTasks = [...taskItems];
      updatedTasks[editIndex] = task;
      setTaskItems(updatedTasks);
      setTask('');
      setEditIndex(-1);
    } else {
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const editTask = (index) => {
    setTask(taskItems[index]); // Set the input field to the task text being edited
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setTask('');
    setEditIndex(-1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Image source={require('./components/Get2do.png')} style={{ width: 200, height: 200 }} />
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <View key={index} style={styles.taskContainer}>
              {editIndex === index ? ( // Display input field if in edit mode
                <>
                  <TextInput
                    style={styles.input}
                    placeholder={'Edit task'}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                  />
                  <TouchableOpacity onPress={() => handleAddTask()} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => cancelEdit()} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => editTask(index)}>
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={editIndex === -1 ? 'I Get To...' : 'Edit task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>{editIndex === -1 ? '+' : 'Save'}</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FF42',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#068da9',
    borderWidth: 1,
    flex: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FB2576',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: '#fff',
  },
  editButton: {
    padding: 5,
  },
  editButtonText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

//#ECF8F9
//#7e1717
//#e55807
//#068da9