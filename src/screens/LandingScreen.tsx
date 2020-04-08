import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';

import {ThemeState} from 'themes/themes';
import {ThemeContext} from 'AppContext';

const LandingScreen = () => {
  const themeState: ThemeState = useContext(ThemeContext);
  console.log('context: ', themeState);

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Design System Demo App</Text>
          <View style={styles.space} />

          <Text style={{color: themeState.theme.foreground}}>
            This is a Text color {themeState.theme.foreground}
          </Text>
          <View style={styles.space} />
          <View style={{backgroundColor: themeState.theme.background}}>
            <Button
              onPress={themeState.toggleTheme}
              title="SCHIACCIAMI"
              color={themeState.theme.foreground}
            />
          </View>
          <Separator />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  space: {
    height: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
  },
});

export default LandingScreen;
