import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screen/Home";
import Profile from "../screen/Profile";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackRoutes;