import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login:', email, password);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Please sign in to continue</Text>
        </View>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#DB4437" />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#4267B2" />
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => router.push("/home")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" style={styles.buttonIcon} />
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  socialButtonsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#666',
    fontSize: 14,
  },
  inputContainer: {
    gap: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#666',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonIcon: {
    marginLeft: 8,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signUpText: {
    color: '#666',
    fontSize: 14,
  },
  signUpLink: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
