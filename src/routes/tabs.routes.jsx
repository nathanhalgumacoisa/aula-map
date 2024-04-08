import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Location from "../screen/Location";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
       name="Location"
      component={Location} 
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;