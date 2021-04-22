import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const DATA = Array(9).fill('').map((e, i) => ({
    id: i + 1,
    photo: 'https://soyagarden.com/content/uploads/2019/10/V%C5%A9-Ph%E1%BA%A1m-H%C3%A0m-2.jpg',
    name: `Văn hóa “Omotenashi” tại cửa hàng Soya Garden`,
    addr: `Tầng ${i + 1} tòa nhà UDIC Complex, Hoàng Đạo Thúy, Trung Hòa, Cầu Giấy`,
    phone: `0972314521`,
    time: '08:00 - 23:00 (Đang mở cửa)'
}))
export default function store() {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ marginTop: 15, marginLeft: 5 }}>
            <View>

                <View style={{ marginLeft: 10, width: '92%', backgroundColor: 'white', borderRadius: 10 }}>
                    <Image source={{ uri: item.photo }} style={{ height: 150, width: 326, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <Text style={{ marginLeft: 15, fontWeight: 'bold', marginRight: 15, marginTop: 10 }}> {item.name}</Text>
                    <View style={{flexDirection:'row',marginRight:20, width:"90%"}}>
                        <View>
                        
                        <Text style={{ marginLeft: 17, marginTop: 5 }}><EvilIcons  name='location' size={25} /></Text>

                        </View>
                        <View  style={{ marginTop: 5 ,}}>
                            <Text>{item.addr}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginRight:20, width:"90%"}}>
                        <View>
                        
                        <Text style={{ marginLeft: 17, marginTop: 5 }}><Feather  name='phone-call' size={17} /></Text>

                        </View>
                        <View  style={{ marginLeft:10,marginTop:5, marginBottom:10}}>
                            <Text>{item.phone}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ position: 'absolute', borderRadius: 8, backgroundColor: '#FECE02', marginTop: 5, marginLeft: 5, flexDirection: 'row', height: 25, justifyContent: 'center' }}>
                    <Feather name='clock' size={20} style={{ marginLeft: 5, alignItems: 'center', marginTop: 2 }} />
                    <Text style={{ marginLeft: 5, textAlignVertical: 'center', marginRight: 5}}>{item.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={{ backgroundColor: '#EFEFEF' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
                <View style={{ borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginRight: 0, height: 40, borderColor: '#EFEFEF', marginTop: 5, width:'77%', marginBottom:10 }}>
                    <IonIcons name="search-outline" size={20} color={'gray'} style={{ marginLeft: 5 }} />
                    <TextInput placeholder={'Tìm kiếm cửa hàng'}></TextInput>
                </View>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: 5 }}>
                        <Feather name="send" size={24} style={{ marginRight: 10 }} color={'silver'} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 100 }}>
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
