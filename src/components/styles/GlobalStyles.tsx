// src/components/styles/GlobalStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    textDecorationLine: 'underline',
    color: '#008000',
    fontSize: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#008000',
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRadius: 30,
    marginTop: 10,
    width: '70%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  linkContainer: {
    marginTop: 10,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#008000',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dayContainer: {
    marginVertical: 8,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  entryText: {
    color: 'green',
  },
  exitText: {
    color: 'red',
  },
  noRecordText: {
    fontStyle: 'italic',
    color: 'gray',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  workerButton: {
    backgroundColor: '#008000', 
    padding: 15,
    borderRadius: 5,
    marginBottom: 12,
  },
  workerButtonText: {
    color: '#fff', 
    fontSize: 16,
  },
});
