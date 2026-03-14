import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const presionarBtn = () => {
    console.log('Presionando el botón');

    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const soltarBtn = () => {
    console.log('Soltando el botón');

    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, // La fricción es la cantidad de rebotes que tendrá la animación
      tension: 40, // La tensión es la velocidad de la animación
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{ scale: animacion }],
  };

  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarBtn()}
      >
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 28,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Animacion5;
