import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F1DE',
    },
    listContainer: {
      flex: 1,
      backgroundColor: '#F4F1DE',
      marginVertical:20, 
    },
    itemContainer:{
      height:80,
      justifyContent: 'center',
      backgroundColor: '#3D405B',
      marginHorizontal: 20,
      marginVertical:5,
      borderRadius: 5,
    },
    item: {
      marginHorizontal:10,
      marginVertical:10,
      color: 'white',
      fontSize: 16, 
      fontWeight: 'bold',
    },

    modalContainer: {
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 60,
      paddingVertical:20,
    },
    modalTitle: {
      fontSize:16,
      fontWeight:'bold',
      marginBottom:10,
    },
    modalDetailContainer: {
      paddingVertical:20,
    },
    modalMessage: {
      fontSize:14,
      color:'#F2CC8F',
    },
    selectedCompra: {
      fontSize:14,
      color:'#F2CC8F',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom:20,
    },
    buttonContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }
  });
  