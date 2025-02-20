import {Image, StyleSheet} from 'react-native';

export default function Logo(){
  return (
     <Image
        style={styles.logo}
        source={require('../assets/7.jpg')} // Use require() for local images
      />
  )
}

const styles = StyleSheet.create({
  logo: {
  
    width: 150,
    height: 120,
    borderRadius:30,
    marginTop:30,
    marginBottom:30,
  },
});