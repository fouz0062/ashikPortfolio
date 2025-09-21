import profile from '@/assets/images/profile.jpg';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={profile} style={styles.profile} />
      </View>
      <Text style={styles.title}>Mohamed Ashik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    padding: 20,
  },
  imageWrapper: {
    alignSelf: 'center',
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#1a2b4c',
    borderWidth: 2,
    elevation: 8,
    backgroundColor: '#000', 
    overflow: 'hidden',
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  title: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 5,
    fontWeight:'bold'
  }
});