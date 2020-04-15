import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import{StyleSheet,View,Text,Image, ActivityIndicator} from 'react-native'
import * as Font from 'expo-font'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { TextInput } from 'react-native-gesture-handler';

class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
class ExploreScreen extends Component{
  constructor(){
    super();
    this.state={
      fontloaded:false
    };
  }
  async componentDidMount(){
    await Font.loadAsync({
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
    this.setState({fontLoaded:true});
  }
  
  render(){
    return(
      
      <View style={{flex:1}}>
            <View style={{height:30,backgroundColor:'#d42d4b'}}/>
            <View style={{height:55,backgroundColor:'#f13a59',justifyContent:'center',padding:20,elevation:50}}>
                  <View style={{height:30,backgroundColor:'#f13a59',borderBottomColor:'white',borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',padding:5}}>
                      <Icon name="search" style={{fontSize:24,color:'white'}}/>
                      <TextInput placeholder=" Search upcoming events"  style={{height:30,fontSize:18,marginLeft:10,color:'white' }}/>
                  </View>
                </View>
                <View style={{
                    elevation: 1,
                    backgroundColor: '#fff',
                    shadowOffset: { width: 1, height: 1 },
                    shadowColor: '#333',
                    height:'77%',
                    flexDirection:'column',
                    shadowOpacity: 0.3,
                    shadowRadius: 2,}}>
                      <View style={{margin:20}}>
                      {this.state.fontLoaded ?(
                        <Text style={{fontFamily:'roboto-regular',fontSize:17}}>Find events near</Text>
                        ):(<ActivityIndicator size="large"/>)}
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        {this.state.fontLoaded ?(
                          <Text style={{fontSize:26,fontFamily:'roboto-black'}}>Avadi</Text>
                          ):(<ActivityIndicator size="large"/>)}
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name="near-me" style={{fontSize:24,color:'#f13a59'}}/>
                            {this.state.fontLoaded ?(
                            <Text style={{color:'#f13a59',fontFamily:'roboto-black',fontSize:17}}>CHANGE</Text>
                            ):(<ActivityIndicator size="large"/>)}
                            </View>
                        </View>
                      </View>
                      <Image style={{width:'100%',height:110,marginTop:10}} source={require('./assets/map.jpeg')}/>
                      <View style={{
                          elevation: 3,
                          backgroundColor: '#fff',
                          shadowOffset: { width: 1, height: 1 },
                          shadowColor: '#333',
                          height:150,
                          margin:15,
                          shadowOpacity: 0.3,
                          shadowRadius: 2}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{height:50,width:'50%',justifyContent:'center',alignItems:'center',elevation:1,shadowColor: '#000',shadowOpacity: 0.3,shadowRadius: 1,backgroundColor:'#fff',margin:0.5}}>
                                {this.state.fontLoaded ?(
                                  <Text style={{fontFamily:'roboto-medium',fontSize:16}}>Today</Text>
                                  ):(<ActivityIndicator size="large"/>)}
                                </View>
                                <View style={{height:50,width:'50%',justifyContent:'center',alignItems:'center',elevation:1,shadowOffset: { width: 1, height: 1 },shadowColor: '#000',shadowOpacity: 0.3,shadowRadius: 1,backgroundColor:'#fff',margin:0.5}}>
                                {this.state.fontLoaded ?(
                                  <Text style={{fontFamily:'roboto-medium',fontSize:16}}>Tommorow</Text>
                                  ):(<ActivityIndicator size="large"/>)}
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{height:50,width:'50%',justifyContent:'center',alignItems:'center',elevation:1,shadowOffset: { width: 1, height: 1 },shadowColor: '#000',shadowOpacity: 0.3,shadowRadius: 1,backgroundColor:'#fff',margin:0.5}}>
                                {this.state.fontLoaded ?(
                                  <Text style={{fontFamily:'roboto-medium',fontSize:16}}>This week</Text>
                                  ):(<ActivityIndicator size="large"/>)}
                                </View>
                                <View style={{height:50,width:'50%',justifyContent:'center',alignItems:'center',elevation:1,shadowOffset: { width: 1, height: 1 },shadowColor: '#000',shadowOpacity: 0.3,shadowRadius: 1,backgroundColor:'#fff',margin:0.5}}>
                                {this.state.fontLoaded ?(
                                  <Text style={{fontFamily:'roboto-medium',fontSize:16}}>This weekend</Text>
                                  ):(<ActivityIndicator size="large"/>)}
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{height:50,width:'50%',justifyContent:'center',alignItems:'center',elevation:1,shadowOffset: { width: 1, height: 1 },shadowColor: '#000',shadowOpacity: 0.3,shadowRadius: 1,backgroundColor:'#fff',margin:0.5}}>
                                {this.state.fontLoaded ?(
                                  <Text style={{fontFamily:'roboto-medium',fontSize:16}}>Next week</Text>
                                  ):(<ActivityIndicator size="large"/>)}
                                </View>
                                <View style={{height:50,width:'50%',justifyContent:'center',alignItems:'center',elevation:1,shadowOffset: { width: 1, height: 1 },shadowColor: '#000',shadowOpacity: 0.3,shadowRadius: 1,backgroundColor:'#fff',margin:0.5}}>
                                {this.state.fontLoaded ?(
                                  <Text style={{fontFamily:'roboto-medium',fontSize:16}}>All upcoming</Text>
                                  ):(<ActivityIndicator size="large"/>)}
                                </View>
                            </View>
                            <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'center',elevation:3,shadowColor: '#000',shadowOpacity: 0.3,shadowRadius: 1,backgroundColor:'#fff',margin:0.5}}>
                            {this.state.fontLoaded ?(
                                  <Text style={{fontFamily:'roboto-medium',fontSize:16}}>Choose a date</Text>
                                  ):(<ActivityIndicator size="large"/>)}
                            </View> 
                      </View>
                      {this.state.fontLoaded ?(
                      <Text style={{marginTop:70,alignSelf:'center',fontFamily:'roboto-black',color:'#f13a59',fontSize:17}}>SEARCH GROUPS</Text>
                      ):(<ActivityIndicator size="large"/>)}
                      </View>
                      <View style={{backgroundColor:'#fff',marginTop:20,height:45,justifyContent:'center'}}>
                      {this.state.fontLoaded ?(
                      <Text style={{marginLeft:20,fontFamily:'roboto-black',fontSize:24}}>Explore Meetup</Text>
                      ):(<ActivityIndicator size="large"/>)}
            </View>
            
      </View>
      
    );}
  
  }

class NotificationsScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>NotificationsScreen</Text>
      </View>
    );
  }
}
class MessagesScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>MessagesScreen</Text>
      </View>
    );
  }
}
export default createMaterialBottomTabNavigator({
  Home:{screen:HomeScreen,
  navigationOptions:{
    tabBarLabel:'Home',
    tabBarIcon:({tintColor})=>(
      <Icon name ="home" color ={tintColor} size={24}/>
    )
  }},
  Explore:{screen:ExploreScreen,
    navigationOptions:{
      tabBarLabel:'Explore',
      tabBarIcon:({tintColor})=>(
        <Icon name ="search" color ={tintColor} size={24}/>
      )
    }},
  Notifications:{screen:NotificationsScreen,
    navigationOptions:{
      tabBarLabel:'Notifications',
      tabBarIcon:({tintColor})=>(
        <Icon name ="notifications" color ={tintColor} size={24}/>
      )
    }},
  Messages:{screen:MessagesScreen,
  navigationOptions:{
    tabBarLabel:'Messages',
    tabBarIcon:({tintColor})=>(
      <Icon name ="message" color ={tintColor} size={24}/>
    )
  }}
},
{
  initialRouteName:'Explore',
  activeTintColor:'red', 
  shifting:false,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
