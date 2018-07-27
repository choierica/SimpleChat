import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component { 
    state ={ loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDw53Btwy6KInl7_baCfY992OBsMD018N8',
    authDomain: 'simplechat-fe9d3.firebaseapp.com',
    databaseURL: 'https://simplechat-fe9d3.firebaseio.com',
    projectId: 'simplechat-fe9d3',
    storageBucket: 'simplechat-fe9d3.appspot.com',
    messagingSenderId: '566746401594'
  });

          firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  this.setState({ loggedIn: true });
              } else {
                  this.setState({ loggedIn: false });
              }
          });
    }

   renderContent() {
        switch (this.state.loggedIn) {
            case true:
              return (
                  <Card>
                      <CardSection>
                          <Button>
                              All Users
                          </Button>

                          <Button>
                              Chat Room
                          </Button>

                      </CardSection>

                      <CardSection>
              <Button onPress={() => firebase.auth().signOut()}> 
                Log Out
              </Button>
              </CardSection>
              </Card>
              );
            case false: 
             return <LoginForm />;
            default:
             return <Spinner size="large" />;
        }
    }
 

    render() {
       return (
           <View>
               <Header headerText="Welcome to SimpleChat!" />
               {this.renderContent()}
           </View>
       );
    }
}

export default App;
