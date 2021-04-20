import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList ,Image} from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const DATA = Array(9).fill('').map((e, i) => ({
        id: i + 1,
        photo: 'https://storage.googleapis.com/senpoint-media-release/static/common/img/shops-contents/942a98df3f59043c6cc64e2749f3308b.jpg',
        name: `Soya Garden - ${i+1}`,
        addr: `Khu ${i+1}`,
        phone: `090909090${i+1}`,
        time: '08:00 - 23:00 (Đang mở cửa)'
      }))
export default function store() {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{marginLeft:15,marginBottom:10,marginTop:10}}>
            <View>
                
                <View style={{marginLeft:10,width:350,backgroundColor:'white',borderRadius:10}}>
                    <Image source={{uri:item.photo}} style={{height:150,width:350,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                    <Text style={{marginLeft:15}}> {item.name}</Text>
                    <Text style={{marginLeft:10}}><EvilIcons name='location' size={20}/>{item.addr}</Text>
                    <Text style={{marginLeft:15,marginBottom:8}}><IonIcons name='call-outline' size={13}/>{item.phone}</Text>
                </View>
                <View style={{position:'absolute',borderRadius:8,backgroundColor:'gray',marginTop:5,flexDirection:'row',height:25,justifyContent:'center'}}>
                    <Feather name='clock' size={20} style={{marginLeft:5,alignItems:'center',marginTop:2}}/>
                    <Text style={{marginLeft:5,textAlignVertical:'center',marginRight:5}}>{item.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
      );
    return (
        <View style={{backgroundColor:'silver'}}>        
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'white'}}>
                <View style={{borderWidth:1,borderRadius:10,flexDirection:'row',alignItems:'center',marginLeft:30,marginRight:0,height:40,borderColor:'silver',marginTop:5,width:300,marginBottom:5}}>
                    <IonIcons name="search-outline" size={20} style={{marginLeft:5}}/>
                    <TextInput placeholder={'Tìm kiếm cửa hàng'}></TextInput>
                </View>
                <TouchableOpacity>
                    <View style={{alignItems:'center',marginTop:5}}>
                        <Feather name="send" size={25} style={{marginRight:10}} color={'silver'}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:100}}>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                >
                </FlatList>
            </View>
        </View>

    )
}
