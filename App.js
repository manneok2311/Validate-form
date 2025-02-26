import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Keyboard } from 'react-native';

export default function App() {
  
  return (

    <View style={styles.container}>
      <Text>
      
      </Text>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.line} />
      <Text style={{fontSize: 20 , fontWeight: 'bold'}} >Nhập số điện thoại</Text>
      <Text>

      </Text>
      <Text style={styles.subtitle}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
      />
      

      <TouchableOpacity style={styles.button} onPress={() => alert('Thành công')}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3,
    elevation: 5, 
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    fontSize: 16,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 8,
    borderBottomWidth:1,
    // backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    
    width: '100%',
    padding: 15,
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#C0C0C0',
    fontWeight: 'bold',
  },
});
