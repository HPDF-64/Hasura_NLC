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
  Alert,
  ActivityIndicator
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class App extends Component<{}> {

  async _Fetchdata (){
          var formBody = [];
          let formdata = new FormData();
          formdata.append("input", this.state.text);
          formBody.push("input", this.state.text);
          formBody = formBody.join("&");
          try {
           let response = await fetch(
            "https://api.anthill57.hasura-app.io/",
            {
              method: "POST",
              headers: {
               "Accept": "application/json",
               "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
              },
             body: formBody
           }
          )
          .then((response) => response.json())
          .then((responseJson) => {
            p = JSON.parse(JSON.stringify(responseJson.categories));
            return p;
      });
           if (response.status >= 200 && response.status < 300) {
              alert("authenticated successfully!!!");
           }
         } catch (errors) {

           alert(errors);
         }
  }
  async _Analyse(){

    // if (!this.state.p) {
    //   return (
    //     <ActivityIndicator
    //       animating={true}
    //       style={styles.indicator}
    //       size="large"
    //     />
    //   );
    // }
    this._Fetchdata();
      console.log("Clicked");
      for (i=0;i<3;i++){
        console.log(p[i].label);

      }
      var Row1Array = p[0].label.split('/');
      var Row2Array = p[1].label.split('/');
      var Row3Array = p[2].label.split('/');
      console.log(Row1Array[1]);
      this.setState({v1:p[0].score*100+"%"});
      this.setState({v2:p[1].score*100+"%"});
      this.setState({v3:p[2].score*100+"%"});

      this.setState({h1:Row1Array[1]});
      this.setState({h2:Row2Array[1]});
      this.setState({h3:Row3Array[1]});

      this.setState({sh1:Row1Array[2]});
      this.setState({sh2:Row2Array[2]});
      this.setState({sh3:Row3Array[2]});

      this.setState({mh1:Row1Array[3]});
      this.setState({mh2:Row2Array[3]});
      this.setState({mh3:Row3Array[3]});

      this.setState({showTheThing:true});

   //  if(this.state.showTheThing){
   //   this.setState({showTheThing:false});
   // }else{
   //   this.setState({showTheThing:true});
   // }

}

  constructor(props){
   super(props);
   this._Analyse=this._Analyse.bind(this);
   this.state = {
      text: "TextInput A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad. The simplest use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to. A simple example:",
      v1:0,
      v2:0,
      v3:0,
      h1:"Heading1",
      h2:"Heading2",
      h3:"Heading3",
      sh3:"Sub Heading3",
      sh2:"Sub Heading2",
      sh1:"Sub Heading1",
      mh1:"Mini Heading1",
      mh2:"Mini Heading2",
      mh3:"Mini Heading3"

   }
}
  render() {
    let { errors = {},v1,v2,v3, h1, h2,h3,sh1,sh2,sh3,mh1,mh2,mh3,ht1,ht2,ht3,headingFull, p, secureTextEntry, ...data } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
      <View style={{margin:30}}>
          <TextField
              ref={this.aboutRef}
              value={data.text}
              onFocus={this.onFocus}
              onChangeText={ (text) => this.setState({ text }) }
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
            onPress={this._Analyse}
          //  color="#fff"
          />
          </LinearGradient>
          { this.state.showTheThing &&

            <View>
                    <View style={styles.graph}>
                        <LinearGradient colors={['#F23673', '#FFC066']} style={styles.linearGradient1}/>
                        <LinearGradient colors={['#009FC5', '#3CECB0']} style={styles.linearGradient2}/>
                        <LinearGradient colors={['#AD2AB9', '#FF618C']} style={styles.linearGradient3}/>
                    </View>
                    <View style={styles.graphText}>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText1}> {v1}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText1}> {v2}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText1}> {v3}</Text>
                        </View>
                    </View>

                    <View style={styles.graphText}>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText1}> {h1}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText1}> {h2}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText1}> {h3}</Text>
                        </View>
                    </View>
                    <View style={styles.graphText}>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText2}>{sh1}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText2}>{sh2}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText2}>{sh3}</Text>
                        </View>
                    </View>



                    <View style={styles.graphText}>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText3}>{mh1}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText3}>{mh2}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.OutputText3}>{mh3}</Text>
                        </View>
                    </View>



         </View>
    }
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
