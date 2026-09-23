import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task === '') {
      return;
    }

    setTasks([...tasks, task]);
    setTask('');
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <Text style={styles.subtitle}>Things I need to do</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          placeholderTextColor="#888"
          value={task}
          onChangeText={setTask}
        />

        <Pressable style={styles.addButton} onPress={addTask}>
          <Text style={styles.addText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskText}>{item}</Text>

            <Pressable onPress={() => deleteTask(index)}>
              <Text style={styles.deleteText}>X</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 25,
    paddingTop: 70
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  },

  subtitle: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 25
  },

  inputArea: {
    flexDirection: 'row',
    marginBottom: 25
  },

  input: {
    flex: 1,
    backgroundColor: '#333',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginRight: 10
  },

  addButton: {
    backgroundColor: '#5c7cfa',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center'
  },

  addText: {
    color: 'white',
    fontWeight: 'bold'
  },

  taskCard: {
    backgroundColor: '#303030',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  taskText: {
    color: 'white',
    fontSize: 16
  },

  deleteText: {
    color: '#ff7777',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
