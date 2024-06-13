import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Alert, TextInput, Button } from 'react-native';
import { supabase } from '../utils/supabase'; // Assurez-vous que le chemin est correct

const FetchCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [companyId, setCompanyId] = useState('');

  const fetchCompanyById = async () => {
    setLoading(true);
    console.log("Fetching company with ID:", companyId);

    let { data: companies, error } = await supabase
      .from('companies')
      .select('id, name')
      .eq('id', companyId);

    if (error) {
      console.error("Error fetching company:", error);
      Alert.alert("Error", "Unable to fetch company");
    } else {
      console.log("Fetched company:", companies);
      setCompanies(companies);
    }

    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Société</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Company ID"
        value={companyId}
        onChangeText={setCompanyId}
        keyboardType="numeric"
      />
      <Button title="Fetch Company" onPress={fetchCompanyById} />
      <FlatList
        data={companies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>ID: {item.id}</Text>
            <Text>Name: {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FetchCompanies;
