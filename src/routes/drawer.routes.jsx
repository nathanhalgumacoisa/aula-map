import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screen/Home";
import Profile from "../screen/Profile"

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;