import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Animacion3 = () => {
  // Para ANIMTED, no requieres la segunda variable, ya que ANIMATED se encargará de modificarla
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start(); //
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.texto, { fontSize: animacion }]}>
        Animación 3
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion3;
