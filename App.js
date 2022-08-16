import { StyleSheet, Text, View, Button} from 'react-native';
//import { useState } from 'react/cjs/react.production.min';
import React,{useState} from 'react';
export default function App() {
  const [display,displaySet]=useState()

  function tecla(valor){
    displaySet(valor)
    // displaySet(valor.valor.length)
    // if(valorLength = 1){
    //   displaySet(valor + valor)
    //   displaySet('nada')
    // } else{
    //   displaySet('dsds')
    // }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.showResult}>
          <Text style={styles.title}>{display}</Text>
        </View>
        <View style={styles.allOptions}>
            <View style={styles.options}>
              <View style={styles.buttonOptionGray}>
                <Button color='transparent' title="C" onPress={()=>tecla()}/>
              </View>
              <View style={styles.buttonOptionGray}>
                <Button
                color='transparent'
                title="+/-" onPress={()=>tecla()}/>
              </View>
              <View style={styles.buttonOptionGray}>
                <Button
                color='transparent' title="%" onPress={()=>tecla()}/>
              </View>
              <View style={styles.buttonOptionYellow}>
                <Button
                color='transparent' title="/" onPress={()=>tecla()}/>
              </View>
            </View>
            <View style={styles.options}>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="7" onPress={()=>tecla(7)}/>
              </View>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="8" onPress={()=>tecla(8)}/>
              </View>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="9" onPress={()=>tecla(9)}/>
              </View>
              <View style={styles.buttonOptionYellow}>
                <Button
                color='transparent' title="X" onPress={()=>tecla()}/>
              </View>
            </View>
            <View style={styles.options}>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="4" onPress={()=>tecla(4)}/>
              </View>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="5" onPress={()=>tecla(5)}/>
              </View>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="6" onPress={()=>tecla(6)}/>
              </View>
              <View style={styles.buttonOptionYellow}>
                <Button
                color='transparent' title="-" onPress={()=>tecla()}/>
              </View>
            </View>
            <View style={styles.options}>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="1" onPress={()=>tecla(1)}/>
              </View>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="2" onPress={()=>tecla(2)}/>
              </View>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="3" onPress={()=>tecla(3)}/>
              </View>
              <View style={styles.buttonOptionYellow}>
                <Button
                color='transparent' title="+" onPress={()=>tecla()}/>
              </View>
            </View>
            <View style={styles.options}>
              <View style={styles.buttonOptionZero}>
                <Button
                color='transparent' title="0" onPress={()=>tecla(0)}/>
              </View>
              <View style={styles.buttonOptionBlack}>
                <Button
                color='transparent' title="," onPress={()=>tecla(',')}/>
              </View>
              <View style={styles.buttonOptionYellow}>
                <Button
                color='transparent' title="=" onPress={()=>tecla()}/>
              </View>
            </View>
        </View>
      </View>
        <Names name="Kintiz"></Names>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin:'auto',
    width:'100%',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.7)',
  },
  content:{
    width:'280px',
    height:'420px',
    backgroundColor:'black',
    display: 'flex',
    borderRadius:'10px',
    border:'1px solid black',
  },
  showResult:{
    height:'50%',
    backgroundColor:'rgba(255,255,255,0.075)',
    borderRadius:'10px',
    flex: 1,
    alignItems: 'end',
    justifyContent: 'end',
  },
  title:{
    marginEnd: '10px',
    fontSize:'50px',
    color:'white',
  },
  allOptions:{

  },
  options:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  buttonOptionGray:{
    marginTop:'10px',
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    width:'60px',
    height:'40px',
    borderRadius:'10px',
    backgroundColor:'#a5a5a5',
    fontSize:'40px',
    margin:'5px',
  },
  buttonOptionGrayHover:{
    backgroundColor:'black',
  },
  buttonOptionYellow:{
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius:'10px',
    height:'40px',
    width:'60px',
    backgroundColor:'#ef9b38',
    margin:'5px',
  },
  buttonOptionBlack:{
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius:'10px',
    height:'40px',
    width:'60px',
    backgroundColor:'rgba(255,255,255,0.2)',
    margin:'5px',
  },
  buttonOptionZero:{
    borderRadius:'10px',
    height:'40px',
    width:'130px',
    backgroundColor:'rgba(255,255,255,0.2)',
    margin:'5px',
  },
  name:{
    marginTop:'10px',
    color:'white',
    fontWeight:'bold',
  },  
});
const Names = (props) => {
  return (
    <View>
      <Text style={styles.name}>Credits: {props.name}</Text>
    </View>
  );
}