import { styles } from './styles';
import { useState } from 'react';
import { Input } from './components/index';
import { Text, TextInput, Button, View, FlatList, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  const [text, setText] = useState ('');
  const [compras, setCompras] = useState ([]);
  const [modalVisible, setModalVisible] = useState (false);
  const [selectedCompra, setSelectedCompra] = useState('null');

  const onAddCompra = () => {
    if (text.lengh === 0) return;
    setCompras([
      ...compras,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText ('');
  };

  const onHandlerCompra =(id) => {
    setModalVisible(true);
    const selectedCompra =compras.find(compra => compra.id === id);
    setSelectedCompra(selectedCompra);
  };

  const onHandlerCancelModal= () => {
    setModalVisible(!modalVisible);
    setSelectedCompra('null');
  };

  const onHandlerDeleteCompra= (id) => {
    setCompras(compras.filter(compra => compra.id !== id))
    setModalVisible(!modalVisible);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={()=> onHandlerCompra(item.id)}>
    <Text style={styles.item}>{item.value}
    </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Input
        buttonColor={'red'}
        buttonTitle={'Agregar'}
        value={text}
        placeholder='Agrega tu compra'
        onChangeText={(text) =>setText(text)}
        onHandlerButton={onAddCompra()}
        />
      <View style={styles.listContainer}>
        <FlatList
          renderItem={renderItem}
          data={compras}
          keyExtractor={(item) => item.id }
        />
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Compra</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedEvent}>{selectedCompra.value}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
            title='Cancel'
            color='#E07A5F'
            onPress={()=>onHandlerCancelModal()}/>
            <Button
            title='Delete'
            color='#E07A5F'
            onPress={()=>onHandlerDeleteCompra(selectedCompra.id)}
           />
          </View>
        </View>
      </Modal>
    </View>
  );
}