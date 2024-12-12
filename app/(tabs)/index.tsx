import { StyleSheet, Platform, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import animationData from '../lottie/littleMan.json';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Song Recommendation System</Text>
      <Text style={styles.subtitle}>Group Alpha</Text>
      <Text style={styles.description}>
        Welcome to our Song Recommendation Engine. This tool recommends songs based on your
        listening preferences, helping you discover music that resonates with your taste.
      </Text>
      <LottieView
        source={animationData}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure it takes full width
    height: Platform.OS === 'web' ? '100%' : '100%', // Full viewport height on web
    backgroundImage: Platform.OS === 'web' ? 'linear-gradient(to right top, #26cebd, #0dd9a8, #41e288, #74e85c, #a8eb12)' : undefined,
    padding: 20,
  },
  title: {
    fontSize: Platform.OS === 'web' ? 54 : 24, // Use viewport width for responsive font size on web
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center', // Ensure text alignment is centered
  },
  subtitle: {
    fontSize: 28,
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333', // Dark grey color
    width: '100%', // Ensures it takes full width of its parent
  },
  description: {
    fontSize: 16,
    textAlign: 'center', // Ensures text is centered
    paddingHorizontal: 30,
    lineHeight: 24,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: '100%', // Ensures it takes full width of its parent
  },
  
});















