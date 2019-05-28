import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
//import  TopsellersTab  from '../tab_Screens/TopsellersTab';

class _SlideTop extends React.Component {
  render () {
    // <DetailNews/>
       return (                 
          <View style={styles.ContainerSlideTop}>    
             <Image  source={require('../assets/images/anhxe.jpg')} style={styles.imgSlideTop} />
           </View> 
       )
   }
}

class _TopsellersSlide extends React.Component {
  render () {
    // <DetailNews/>
       return (                 
          <View style={styles.ContainerExploreSlide}>  
               <View style ={{  flexDirection : 'row' }}>
                    <Text style={styles.txtExp} >TopSellers</Text>
                    <Text style={styles.txtView}>View All</Text>
                </View>  
                <View style={styles.SlideContainer}>         
                    <ScrollView 
                      horizontal={true}
                      style={styles.contentContainer}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}>
                 <View style={styles.SlideContents}>
                     
                   <Image  source={require('../assets/images/anhxe.jpg')} style={styles.SlideImg} />  
                       <View  style ={{padding: 15}}>
                          <Text style={styles.SlideTxtName}>CrossStitcher</Text>
                          <Text style={styles.SlideTxtDay}>june 2019</Text>
                      </View>
                 </View>



                        
                     </ScrollView>
            </View>
            
           </View> 
       )
   }
}




export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View> 
          <Text style = {styles.txtHeader} > ZINIO </Text>
        </View>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
           <_SlideTop/>
           <_TopsellersSlide/>
         
        </ScrollView>

      </View>
    );
  }





}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SlideContainer :{
    alignItems: 'baseline',
  //  marginHorizontal:15 ,
    marginBottom: 10,
    marginTop:10 ,
  },
  txtHeader:{ 
    paddingVertical :15,
    textAlign :'center' ,
    fontSize: 27,
    fontWeight : 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    backgroundColor:'red',
  },
  contentContainer: {
   // paddingTop: 30,
  },
  ContainerSlideTop:{
  //backgroundColor : 'green',
  //height : 200 ,
  //width : '100%',
  //overfolow : 'hidden',
  },
  imgSlideTop:{
    height : 220 ,
    width : '100%',
  },
  ContainerExploreSlide:{
paddingVertical:15 ,
paddingHorizontal:15,

shadowColor: 'black',
shadowOffset: { height: -3 },
shadowOpacity: 0.9,
shadowRadius: 5,

  },
  txtExp:{
   fontSize : 20,
   fontWeight:'bold'
  },
  txtView:{
    fontSize : 18,
    textAlign: 'right',
    //alignSelf: 'flex-end'
    //right: 0,
      //left :50,
      marginLeft: 180,
  },
  SlideContents:{
    height :250 ,
    width : 130,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#d6d7da',
    overflow : 'hidden' ,
  },
  SlideImg :{
    height :170 ,
    width : 130,
  },
  SlideTxtName:{
fontSize : 13,

  },
  SlideTxtDay :{
    fontSize :10,   
  },
});
