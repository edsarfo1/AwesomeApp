/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import Navigation from './containers/Navigation';

import FlatListDemo from './containers/FlatListDemo';
// import MyTabs from './containers/Navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LocationHelper} from './src/helpers';

const App = () => {
  LocationHelper.startLocationTracking();

  return <Navigation />;
};

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="User Info" component={UserInfo} />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 100,
//   },
//   tinyPic: {
//     width: 100,
//     height: 100,
//   },
// });

// class DisplayImage extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           style={styles.tinyPic}
//           source={{
//             uri: 'https://www.automobiliardent.com//upload/article/1525169921square.jpg',
//           }}
//           style={{width: 400, height: 400}}
//         />
//       </View>
//     );
//   }
// }

/*const Member = props => {
  return (
    <View>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const Team = () => {
  return (
    <View>
      <Member name = "Lakshmi" />
      <Member name = "Anusha" />
      <Member name = "Viktor" />
      <Member name = "Ali" />
    </View>
  );
};*/

// export default function HomePage() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomebox}>Welcome!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     backgroundColor: 'lightgrey',
//   },
//   welcomebox: {
//     backgroundColor: 'lightblue',
//     padding: 20,
//   },
// });

/*{
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}*/

/*function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      /*<StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/*const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});*/

// export default HelloWorldApp;
// export default DisplayImage;
/*export default Team*/
// export default FlatListDemo;
// export default HomePage;
// export default MyTabs;
export default App;
