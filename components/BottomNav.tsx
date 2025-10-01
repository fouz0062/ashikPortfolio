// components/BottomNav.tsx
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
export default function BottomNav() {
  const pathname = usePathname();
  console.log(pathname);
  const router = useRouter();

  const home = () => {
    console.log(pathname);
    if (pathname === "/about") {
      router.push("/");
    } else {
      router.push("/about");
    }
  };
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={home}>
        {pathname === "/about" ? (
          <AntDesign name="home" size={24} color="white" />
        ) : (
          <Ionicons name="person-circle-outline" size={24} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("./skills")}>
        <Ionicons name="construct-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("./experience")}>
        <Ionicons name="briefcase-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("./contact")}>
        <Ionicons name="mail-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    alignSelf: "center",
    marginTop: 50,
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#1a2b4c",
    borderWidth: 2,
    elevation: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  profile: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 10,
    fontFamily: "Poppins_700Bold",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
    padding: 20,
    textAlign: "justify",
  },

  bottomNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1a2b4c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.1)",
  },
});
