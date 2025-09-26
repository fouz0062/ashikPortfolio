import profile from '@/assets/images/profile.jpg';
import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={profile} style={styles.profile} />
      </View>
      <Text style={styles.title}>Mohamed Ashik</Text>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnTxt}>About</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnTxt}>Skills</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn}><Text style={styles.btnTxt}>Experience</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnTxt}>Contact</Text></TouchableOpacity>
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
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: 10,
    fontFamily: 'Poppins_700Bold',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#1a2b4c',
    marginVertical: 5,
    width: 100,
    marginHorizontal: 'auto',
    borderRadius:10
  },
    btnTxt: {
      color: '#f8f8ff',
      fontSize: 15,
      paddingVertical:2
  }
});