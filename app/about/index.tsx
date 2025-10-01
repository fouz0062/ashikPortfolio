import BottomNav from '@/components/BottomNav';
import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import profile from '../../assets/images/profile.jpg';
export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.imageWrapper}>
            <Image source={profile} style={styles.profile} />
          </View>
          <Text style={styles.title}>Mohamed Ashik</Text>
          <View style={styles.description}>
            <Text style={{paddingBottom:10}}>I’m a Service Fulfillment Specialist with 8+ years of experience leading logistics and replenishment projects at IKEA. My work blends operational strategy with technical expertise in Python, SQL, and Microsoft Power Platform including Power BI and Power Automate to streamline supply chain systems and drive efficiency.</Text>
           <Text style={{paddingBottom:10}}> With a Master’s in Product Design & Development and certifications in rapid prototyping, project quality, and data modeling, I bring a hands-on, solution-focused mindset to every challenge. I’ve also contributed to social impact through volunteering with Røde Kors Hovedstaden, coordinating logistics between donors and Red Cross butik locations.</Text>
            <Text style={{paddingBottom:10}}>I thrive in hybrid environments, lead with precision, and am passionate about building systems that work smarter.</Text>
          </View>
        </ScrollView>
      </View>
   <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  imageWrapper: {
    alignSelf: 'center',
    marginTop: 50,
    width: 100,
    height: 100,
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
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    padding: 20,
    textAlign: 'justify',
  },

});