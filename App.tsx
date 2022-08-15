
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import Loading from './components/Loading'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/Profile'
import AuthScreen from './components/Auth'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from './utils/colors';
import { UserWrapper, useUserContext } from './context/user';
import CategoryScreen from './screens/Category';
import MealsScreen from './screens/Meals';
import MealsHeader from './components/MealsHeader';
import MealsItem from './screens/MealsItem';
import { FavoritesWrapper } from './context/favorites';
import FavoritesScreen from './screens/Favorites';
import ExploreScreen from './screens/Explore';
import { supabase } from './utils/supabase';
import 'react-native-url-polyfill/auto'

export default function App() {

  const user = supabase.auth.user()
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)


  React.useEffect(() => {
    if (user) {
      setIsAuthenticated(true)
    }
  }, [user])

  let [fontsLoaded] = useFonts({
    'montserratBold': Montserrat_700Bold,
  });


  if (!fontsLoaded) {
    return <Loading />
  }

  const AuthenticatedRoutes = () => {
    const Tab = createBottomTabNavigator();


    return (


      <Tab.Navigator
        sceneContainerStyle={{}}
        screenOptions={{
          headerShown: false,
          tabBarStyle: { paddingVertical: 16, height: 95, justifyContent: 'center' },
          tabBarActiveTintColor: Colors.secondary,
          tabBarLabelStyle: { fontFamily: 'montserratBold', fontSize: 12, color: 'black' }

        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ }) => (<Ionicons name="ios-star-outline" size={24} color={Colors.dark} />),
          }}

          name="Explore" component={ExploreScreen} />
        <Tab.Screen
          options={{
            headerShown: true,
            tabBarIcon: ({ }) => (<MaterialCommunityIcons name="format-list-group" size={24} color={Colors.dark} />),
          }} name="Categories" component={CategoryScreen} />


        <Tab.Screen
          options={{

            tabBarIcon: ({ }) => (<Ionicons name="heart-outline" size={24} color={Colors.dark} />),
          }} name="Favorites" component={FavoritesScreen} />
        <Tab.Screen
          options={{

            tabBarIcon: ({ }) => (<Ionicons name="ios-settings-outline" size={24} color={Colors.dark} />),
          }} name="Profile" component={ProfileScreen} />

        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarShowLabel: false,
            headerShown: true,
            header: (({ route, navigation }) => (<MealsHeader route={route} navigation={navigation} />)),
            tabBarIcon: () => null,
            tabBarStyle: { opacity: 0 },
            tabBarItemStyle: { position: 'absolute' }
          }} name="Meals" component={MealsScreen} />

        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarShowLabel: false,
            headerShown: true,
            header: (({ route, navigation }) => (<MealsHeader route={route} navigation={navigation} />)),
            tabBarIcon: () => null,
            tabBarStyle: { opacity: 0 },
            tabBarItemStyle: { position: 'absolute' }
          }} name="MealsItem" component={MealsItem} />
      </Tab.Navigator>

    )
  }

  const Navigation = () => {

    return (
      <NavigationContainer>
        {isAuthenticated && (<AuthenticatedRoutes />)}
        {!isAuthenticated && (<AuthScreen />)}
      </NavigationContainer>
    )
  }

  return (

    <UserWrapper>
      <FavoritesWrapper>
        <Navigation />
      </FavoritesWrapper>
    </UserWrapper>

  )
}