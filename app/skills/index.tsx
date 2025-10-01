import BottomNav from '@/components/BottomNav';
import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import excel from '../../assets/images/excel.png';
import powerBi from '../../assets/images/PowerBi.png';
import python from '../../assets/images/python.png';
import SQL from '../../assets/images/SQL.png';

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const skills = [
    { name: 'Microsoft Excel', image: excel },
    { name: 'Microsoft Power BI', image: powerBi },
    { name: 'Python', image: python },
    { name: 'SQL', image: SQL }
  ];

  // Group skills into pairs
  const skillRows = [];
  for (let i = 0; i < skills.length; i += 2) {
    skillRows.push(skills.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Core Fulfillment & Logistics Skill</Text>
          <FlatList
            data={[
              { key: 'Order Fulfillment & Replenishment' },
              { key: 'Warehouse Management Systems (WMS)' },
              { key: 'Inventory Control & Accuracy' },
              { key: 'Demand Forecasting' },
              { key: 'Delivery Scheduling' },
              { key: 'Returns Management' },
              { key: 'Cycle Counting & Stock Taking' },
              { key: 'SAP Fiori & ERP Systems' },
              { key: 'Planning, Budgeting & Forecasting' },
            ]}
            renderItem={({ item, index }) => <Text style={styles.item}>-  {item.key}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.title}>Technical & Analytical Skill</Text>
          {skillRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tech}>
              {row.map((skill, colIndex) => (
                <View key={colIndex} style={styles.techcontainer}>
                  <Text style={{fontSize:15, marginBottom:5}}>{skill.name}</Text>
                  <Image source={skill.image} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                </View>
              ))}
            </View>
          ))}
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
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: '#333',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 40,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  tech: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  techcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderBlockColor: '#333',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
  },
});