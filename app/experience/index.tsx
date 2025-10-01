import BottomNav from "@/components/BottomNav";
import { Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.company}>IKEA</Text>
            <Text style={styles.duration}>8 yrs 3 mos</Text>
          </View>

          {experienceData.map((role, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.role}>{role.title}</Text>
              <Text style={styles.type}>{role.type}</Text>
              <Text style={styles.period}>{role.period}</Text>
              <Text style={styles.location}>{role.location}</Text>
              <Text style={styles.skillsTitle}>Skills:</Text>
              <Text style={styles.skills}>{role.skills.join(" · ")}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <BottomNav />
    </View>
  );
}
function getYearsAndMonths(
  startDate: string | Date,
  endDate: string | Date = new Date()
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const result = getYearsAndMonths("2024-08-01", getFormattedDate());
const experienceData = [
  {
    title: "Service Fulfillment Operation Specialist",
    type: "Full-time",
    period: `Aug 2024 – Present · ${result.years} yrs ${result.months} mos`,
    location: "Høje Taastrup, Denmark · Hybrid",
    skills: [
      "SAP Fiori",
      "Planning Budgeting & Forecasting",
      "Financial Analysis",
      "Microsoft Power BI",
    ],
  },
  {
    title: "Team Leader - Replenishment",
    type: "Full-time",
    period: "Nov 2022 – Aug 2024 · 1 yr 10 mos",
    location: "Copenhagen, Denmark · On-site",
    skills: [
      "Analytical Skills",
      "Power Automate",
      "Microsoft Office",
      "WMS",
      "SQL",
      "KPIs",
      "Power Apps",
      "Excel",
    ],
  },
  {
    title: "Project Lead",
    type: "Full-time",
    period: "Sep 2021 – Nov 2022 · 1 yr 3 mos",
    location: "Copenhagen, Denmark",
    skills: [
      "MS Project",
      "Process Improvement",
      "Supplier Management",
      "Project Planning",
      "Revit",
    ],
  },
  {
    title: "Outbound Team Leader",
    type: "Full-time",
    period: "Dec 2020 – Sep 2021 · 10 mos",
    location: "Brøndby Municipality, Denmark",
    skills: ["Service Levels", "KPIs", "Communication", "Root Cause Analysis"],
  },
  {
    title: "Customer Relations Team Leader",
    type: "Full-time",
    period: "Jun 2020 – Dec 2020 · 7 mos",
    location: "Brøndby Municipality, Denmark",
    skills: ["Service Levels", "KPIs", "Communication", "Root Cause Analysis"],
  },
  {
    title: "Leader Trainee",
    type: "Full-time",
    period: "Mar 2019 – Jun 2020 · 1 yr 4 mos",
    location: "Copenhagen, Denmark",
    skills: ["Service Levels", "KPIs", "Communication"],
  },
  {
    title: "Team Supervisor",
    type: "Full-time",
    period: "Jan 2019 – Feb 2019 · 2 mos",
    location: "Copenhagen, Denmark",
    skills: ["Service Levels", "KPIs", "Communication"],
  },
  {
    title: "Worker",
    type: "Full-time",
    period: "Jul 2017 – Dec 2018 · 1 yr 6 mos",
    location: "Denmark",
    skills: ["Service Levels", "KPIs", "Data Extraction"],
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8ff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  company: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
    color: "#1A2B4C",
  },
  duration: {
    fontSize: 14,
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  role: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A2B4C",
  },
  type: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  period: {
    fontSize: 14,
    color: "#333",
  },
  location: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  skillsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    color: "#1A2B4C",
  },
  skills: {
    fontSize: 13,
    color: "#444",
    marginTop: 4,
  },
});
