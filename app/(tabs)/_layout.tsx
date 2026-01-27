import { Tabs } from "expo-router";
import CustomTabBar from "../../Components/CustomeTabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Services" />
      <Tabs.Screen name="Cart" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}