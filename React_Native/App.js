/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class App extends Component<{}> {

  constructor(props){
   super(props);
   this.state = {
      text: "TextInput \n\n\n\nA foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad. The simplest use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to. A simple example:"
   }
}
  render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
      <View style={{margin:30}}>
          <TextField
              ref={this.aboutRef}
              value={data.text}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitAbout}
              returnKeyType='next'
              multiline={true}
              blurOnSubmit={true}
              label='Enter The Text To Classify'

            />
      </View>
          <LinearGradient
          colors={['#7956EC', '#2FB9F8']}
          style={styles.buttonGradient}
          start={{x: 0.0, y: 1}} end={{x: 1, y: 1.2}}
          locations={[0,0.6,0.6]}
          >

          <Button
          style={styles.buttonGradient,styles.buttonText}

            title="Analyze"
            color="#fff"
            accessibilityLabel="Learn more about this purple button"
          />
          </LinearGradient>
          <View style={styles.graph}>
              <LinearGradient colors={['#F23673', '#FFC066']} style={styles.linearGradient1}/>
              <LinearGradient colors={['#009FC5', '#3CECB0']} style={styles.linearGradient2}/>
              <LinearGradient colors={['#AD2AB9', '#FF618C']} style={styles.linearGradient3}/>
          </View>
          <View style={styles.graphText}>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText1}> Databases</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText1}> Java</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText1}> Headaches And Migranes</Text>
          </View>
          </View>
          <View style={styles.graphText}>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText2}>Software</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText2}>Programming Language</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText2}>Disease</Text>
          </View>
          </View>



          <View style={styles.graphText}>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText3}>Technology and Computing</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.OutputText3}>Technology and Computing</Text>
          </View>

          <View style={styles.textContainer}>
          <Text style={styles.OutputText3}>Health and Fitness</Text>
          </View>
          </View>


      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',

  },
  graph: {
    flex: 1,
    flexDirection: 'row',
    padding:10,
    marginTop:40,
    marginBottom:40,
    alignItems: 'flex-end',

  },
  graphText: {
    flex: 0.2,
    flexDirection: 'row',
    margin:5,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  OutputText1: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  OutputText2: {
    textAlign: 'center',
  },
  OutputText3: {
    textAlign: 'center',
  },
  linearGradient1: {
    flex: 1,
    marginLeft:40,
    marginRight:40,
    borderRadius: 5,
    height:100*3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  linearGradient2: {
    flex: 1,
    marginLeft:40,
    marginRight:40,
    borderRadius: 5,
    height:75*3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3

  },
  linearGradient3: {
    flex: 1,
    marginLeft:40,
    marginRight:40,
    borderRadius: 5,
    height:50*3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3


  },
  buttonGradient: {
    flex: 0.3,
    marginLeft:30,
    marginRight:30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    height:40,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    paddingVertical: 20
  },
});
