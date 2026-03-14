import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

const Animacion2 = () => {
  // Para ANIMTED, no requieres la segunda variable, ya que ANIMATED se encargará de modificarla
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450,
      duration: 1000,
      /**
       * Si animas width o height, usa useNativeDriver: false.
       * Si animas opacity o transform (por ejemplo scale, translateX), usa useNativeDriver: true.
       */
      useNativeDriver: false,
    }).start(); //
  }, []);

  return (
    <Animated.View
      style={[
        styles.caja,
        {
          width: animacion,
          height: animacion,
        },
      ]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion2;
