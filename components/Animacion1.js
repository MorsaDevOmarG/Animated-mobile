import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

const Animacion1 = () => {
  // Para ANIMTED, no requieres la segunda variable, ya que ANIMATED se encargará de modificarla
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(); //
  }, [animacion]);

  return (
    <Animated.View
      style={{
        opacity: animacion,
        // transform: [
        //   {
        //     translateY: animacion.interpolate({
        //       inputRange: [0, 1],
        //       outputRange: [100, 0],
        //     }),
        //   },
        // ],
      }}
    >
      <Text style={styles.texto}>Animación 1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion1;
