import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Logo y título principal */}
      <Text style={styles.mainTitle}>Khipu</Text>
      <Text style={styles.subtitle}>SOFTWARE CONTABLE PERUANO</Text>

      {/* Línea decorativa dorada */}
      <View style={styles.divider} />

      {/* Menú de opciones (estilo imagen) */}
      <View style={styles.menuContainer}>
        <Text style={styles.menuItem}>CONTABILIDAD</Text>
        <Text style={styles.menuItem}>ANALISIS</Text>
        <Text style={styles.menuItem}>TRIBUTACION</Text>
      </View>

      {/* Línea decorativa dorada */}
      <View style={styles.divider} />

      {/* Texto "EN LA NUBE" */}
      <Text style={styles.cloudText}>EN LA NUBE</Text>

      {/* Separador */}
      <View style={styles.spacer} />

      {/* Campos de inicio de sesión (versión oscura) */}
      <TextInput 
        style={styles.input}
        placeholder="RUC o Correo electrónico"
        placeholderTextColor="#888"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />

      {/* Botón de inicio de sesión */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>

      {/* Texto de registro */}
      <Text style={styles.footerText}>
        ¿Aún no tienes una cuenta? <Text style={styles.linkText}>Regístrate gratis</Text>
      </Text>
    </View>
  );
}

// Estilos de la aplicación - Basados en la imagen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', // Fondo negro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFD700', // Dorado
    fontWeight: '600',
    letterSpacing: 3,
    marginBottom: 20,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: '#FFD700', // Línea dorada
    marginVertical: 15,
  },
  menuContainer: {
    flexDirection: 'row', // Pone los items en horizontal
    justifyContent: 'center',
    flexWrap: 'wrap', // Permite que bajen a la siguiente línea si no caben
    marginVertical: 10,
  },
  menuItem: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 15,
    marginVertical: 5,
    letterSpacing: 1,
  },
  cloudText: {
    color: '#FFD700', // Dorado
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginVertical: 10,
  },
  spacer: {
    height: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1A1A1A', // Fondo gris oscuro para inputs
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15,
    fontSize: 16,
    color: '#FFFFFF', // Texto blanco dentro del input
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFD700', // Botón dorado
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#0D0D0D', // Texto negro sobre botón dorado
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footerText: {
    marginTop: 30,
    color: '#888',
    fontSize: 14,
  },
  linkText: {
    color: '#FFD700', // Dorado
    fontWeight: 'bold',
  },
});
