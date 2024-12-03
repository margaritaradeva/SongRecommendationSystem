import { StyleSheet, Platform, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Song Recommendation System</Text>
      <Text style={styles.subtitle}>Group Alpha</Text>
      <Text style={styles.description}>
        Welcome to our Song Recommendation Engine. This tool recommends songs based on your
        listening preferences, helping you discover music that resonates with your taste.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...(Platform.OS === 'web' ? {
      backgroundImage: 'linear-gradient(to right top, #26cebd, #0dd9a8, #41e288, #74e85c, #a8eb12)'
    } : {}),
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 24,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});















