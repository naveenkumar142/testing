import React, { useRef, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigation = useNavigation();

  const handleImagePress = (uri: string) => {
    navigation.navigate('FullScreenImage', { uri });
  };

  const animationValues = useRef(new Animated.Value(0)).current;

  const animationConfig: Animated.TimingAnimationConfig = {
    toValue: 1,
    duration: 1500,
    easing: Easing.linear,
    useNativeDriver: false,
  };

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValues, { ...animationConfig }),
        Animated.timing(animationValues, { ...animationConfig }),
        Animated.timing(animationValues, { ...animationConfig }),
      ]),
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const animatedStyles = {
    transform: [
      {
        translateX: animationValues.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20],
        }),
      },
      {
        translateY: animationValues.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20],
        }),
      },
    ],
  };

  return (
    <ParallaxScrollView
      backgroundColor="white"
      contentBackgroundColor="white"
      parallaxHeaderHeight={200}
      renderForeground={() => (
        <View style={styles.parallaxHeader}>
          <View style={styles.topContainer}>
            <View style={styles.linesContainer}>
              <View style={styles.line} />
              <View style={[styles.line, { marginTop: 4 }]} />
            </View>
            <View style={styles.logoContainer}>
              <Image source={require('./image/logo2.png')} style={styles.logo} />
              <Text style={styles.text}>Great Games</Text>
              <Text style={styles.comingSoon}>Coming Soon</Text>
            </View>
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Icon name="search" size={30} color="#33B5E5" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-cart" size={30} color="#33B5E5" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    >
      <ScrollView>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              key={index}
              source={{ uri: `https://source.unsplash.com/featured/?gaming,game${index}` }}
              style={styles.image}
            />
            <Animated.View style={[styles.shape, animatedStyles]} />
            <TouchableOpacity
              style={styles.roundButton}
              onPress={() =>
                handleImagePress(`https://source.unsplash.com/featured/?gaming,game${index}`)
              }
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  parallaxHeader: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  linesContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  line: {
    height: 4,
    width: 39,
    backgroundColor: '#33B5E5',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 60,
    backgroundColor: 'white',
  },
  text: {
    color: '#33B5E5',
    fontSize: 18,
    marginTop: 20,
  },
  comingSoon: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'normal',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  imageContainer: {
    height: 400,
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  roundButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#001F3F',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  shape: {
    width: 30,
    height: 30,
    borderRadius: 60,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});

export default Header;
