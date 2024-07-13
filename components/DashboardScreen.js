import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { fetchProblems, addProblem, updateProblem } from '../services/firestoreService';
import { firebase } from '../services/firebaseConfig';

const DashboardScreen = () => {
  const [problems, setProblems] = useState([]);
  const [newProblem, setNewProblem] = useState({
    title: '',
    link: '',
    difficulty: '',
    category: '',
    status: '',
    firstAttemptDate: '',
    notes: '',
    revisitDate: '',
    lastRevisitDate: '',
    revisitFrequency: '',
    timeTaken: '',
    spaceComplexity: '',
    timeComplexity: '',
    languageUsed: '',
    attemptsCount: '',
    solutionLink: '',
    reviewStatus: '',
    peerReview: '',
    tags: '',
    similarProblems: '',
    companyTags: ''
  });

  useEffect(() => {
    const loadProblems = async () => {
      const userId = firebase.auth().currentUser.uid;
      const snapshot = await fetchProblems(userId);
      const problemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProblems(problemsData);
    };
    loadProblems();
  }, []);

  const handleAddProblem = async () => {
    const userId = firebase.auth().currentUser.uid;
    await addProblem(userId, newProblem);
    setNewProblem({
      title: '',
      link: '',
      difficulty: '',
      category: '',
      status: '',
      firstAttemptDate: '',
      notes: '',
      revisitDate: '',
      lastRevisitDate: '',
      revisitFrequency: '',
      timeTaken: '',
      spaceComplexity: '',
      timeComplexity: '',
      languageUsed: '',
      attemptsCount: '',
      solutionLink: '',
      reviewStatus: '',
      peerReview: '',
      tags: '',
      similarProblems: '',
      companyTags: ''
    });
    const snapshot = await fetchProblems(userId);
    const problemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProblems(problemsData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <FlatList
        data={problems}
        renderItem={({ item }) => (
          <View style={styles.problemItem}>
            <Text>{item.title}</Text>
            <Text>Difficulty: {item.difficulty}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Status: {item.status}</Text>
            <Text>First Attempt Date: {item.firstAttemptDate}</Text>
            <Text>Notes: {item.notes}</Text>
            <Text>Revisit Date: {item.revisitDate}</Text>
            <Text>Last Revisit Date: {item.lastRevisitDate}</Text>
            <Text>Revisit Frequency: {item.revisitFrequency}</Text>
            <Text>Time Taken: {item.timeTaken}</Text>
            <Text>Space Complexity: {item.spaceComplexity}</Text>
            <Text>Time Complexity: {item.timeComplexity}</Text>
            <Text>Language Used: {item.languageUsed}</Text>
            <Text>Attempts Count: {item.attemptsCount}</Text>
            <Text>Solution Link: {item.solutionLink}</Text>
            <Text>Review Status: {item.reviewStatus}</Text>
            <Text>Peer Review: {item.peerReview}</Text>
            <Text>Tags: {item.tags}</Text>
            <Text>Similar Problems: {item.similarProblems}</Text>
            <Text>Company Tags: {item.companyTags}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Problem Title"
        value={newProblem.title}
        onChangeText={(text) => setNewProblem({ ...newProblem, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Problem Link"
        value={newProblem.link}
        onChangeText={(text) => setNewProblem({ ...newProblem, link: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Difficulty"
        value={newProblem.difficulty}
        onChangeText={(text) => setNewProblem({ ...newProblem, difficulty: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={newProblem.category}
        onChangeText={(text) => setNewProblem({ ...newProblem, category: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={newProblem.status}
        onChangeText={(text) => setNewProblem({ ...newProblem, status: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="First Attempt Date (YYYY-MM-DD)"
        value={newProblem.firstAttemptDate}
        onChangeText={(text) => setNewProblem({ ...newProblem, firstAttemptDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={newProblem.notes}
        onChangeText={(text) => setNewProblem({ ...newProblem, notes: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Revisit Date (YYYY-MM-DD)"
        value={newProblem.revisitDate}
        onChangeText={(text) => setNewProblem({ ...newProblem, revisitDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Revisit Date (YYYY-MM-DD)"
        value={newProblem.lastRevisitDate}
        onChangeText={(text) => setNewProblem({ ...newProblem, lastRevisitDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Revisit Frequency"
        value={newProblem.revisitFrequency}
        onChangeText={(text) => setNewProblem({ ...newProblem, revisitFrequency: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Time Taken"
        value={newProblem.timeTaken}
        onChangeText={(text) => setNewProblem({ ...newProblem, timeTaken: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Space Complexity"
        value={newProblem.spaceComplexity}
        onChangeText={(text) => setNewProblem({ ...newProblem, spaceComplexity: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Time Complexity"
        value={newProblem.timeComplexity}
        onChangeText={(text) => setNewProblem({ ...newProblem, timeComplexity: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Language Used"
        value={newProblem.languageUsed}
        onChangeText={(text) => setNewProblem({ ...newProblem, languageUsed: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Attempts Count"
        value={newProblem.attemptsCount}
        onChangeText={(text) => setNewProblem({ ...newProblem, attemptsCount: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Solution Link"
        value={newProblem.solutionLink}
        onChangeText={(text) => setNewProblem({ ...newProblem, solutionLink: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Review Status"
        value={newProblem.reviewStatus}
        onChangeText={(text) => setNewProblem({ ...newProblem, reviewStatus: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Peer Review"
        value={newProblem.peerReview}
        onChangeText={(text) => setNewProblem({ ...newProblem, peerReview: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Tags"
        value={newProblem.tags}
        onChangeText={(text) => setNewProblem({ ...newProblem, tags: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Similar Problems"
        value={newProblem.similarProblems}
        onChangeText={(text) => setNewProblem({ ...newProblem, similarProblems: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Company Tags"
        value={newProblem.companyTags}
        onChangeText={(text) => setNewProblem({ ...newProblem, companyTags: text })}
      />
      <Button title="Add Problem" onPress={handleAddProblem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  problemItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default DashboardScreen;
