import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FullScreenImageProps {
  route: { params: { uri: string } };
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ route }) => {
  const { uri } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.lineContainer}>
            <View style={[styles.line, { top: 15 }]} />
          </View>
          <View style={styles.lineContainer}>
            <View style={[styles.line, { top: 17, marginTop: 4 }]} />
          </View>
        </View>
        <View style={styles.center}>
          <Image source={require('./image/logo2.png')} style={styles.logo} />
        </View>
        <View style={styles.lowerRight}>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Icon name="shopping-cart" size={30} color="white" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Icon name="search" size={30} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.centerContent}>
        <Image source={require('./image/xbox.jpg')} style={styles.xboxImage} />
      </View>
      <TouchableOpacity
        style={styles.elevatedButton}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Pre-Order Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  left: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  lineContainer: {
    marginBottom: 4,
  },
  line: {
    height: 4,
    width: 39,
    backgroundColor: 'white',
  },
  center: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 60,
    backgroundColor: 'transparent',
  },
  lowerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
    color: 'white',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xboxImage: {
    width: 200,
    height: 200,
  },
  elevatedButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FullScreenImage;
