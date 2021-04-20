import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const DATA = Array(10).fill('').map((e, i) => ({
  id: i + 1,
  photo: 'https://storage.googleapis.com/senpoint-media-release/static/common/img/shops-contents/942a98df3f59043c6cc64e2749f3308b.jpg',
  name: `Trà ${i + 1}`,
  price: '50.000 đ',
}))
const DATA1 = Array(10).fill('').map((e, i) => ({
    id: i + 1,
    photo: 'https://storage.googleapis.com/senpoint-media-release/static/common/img/shops-contents/942a98df3f59043c6cc64e2749f3308b.jpg',
    name: `Trà ${i + 1}`,
    price: '50.000 đ',
  }))
  const DATA2 = Array(10).fill('').map((e, i) => ({
    id: i + 1,
    photo: 'https://storage.googleapis.com/senpoint-media-release/static/common/img/shops-contents/942a98df3f59043c6cc64e2749f3308b.jpg',
    name: `Trà ${i + 1}`,
    price: '50.000 đ',
  }))

export default function home({navigation}) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{marginLeft:15}}>
        <View >
            <View style={{}}>
                <Image
                    style={styles.imgStyle}
                    source={{ uri: item.photo, }}
                />
            </View>
            <View style={{marginTop: 10}}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
  return (
      <View>
          <View style={{backgroundColor:'yellow'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Begin')} style={{height:50,width:80,borderRadius:30}}><View><Text>Đăng nhập</Text></View></TouchableOpacity>
          </View>
      <ScrollView>
    <View style={{backgroundColor:'silver'}}>
      <View style={{backgroundColor:'white',marginTop: 90,}}>
        <Text style={{ textAlign: 'left', marginTop: 15, marginBottom: 15 ,marginLeft: 15}}>Gợi ý cho bạn</Text>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            style={{ marginBottom: 10 }}
        />
      </View>
      <View style={{backgroundColor:'white',marginTop:5}}>
          <View style={{flexDirection:'row',marginTop: 15,justifyContent:'space-between'}}>
        <Text style={{ textAlign: 'left',  marginBottom: 15 ,marginLeft: 15}}>Voucher/Khuyến mãi</Text>
        <SimpleLineIcons name='arrow-right' size={15} style={{marginRight: 10}}/>
        </View>
        <FlatList
            data={DATA1}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            style={{ marginBottom: 10 }}
        />
      </View>
      <View style={{backgroundColor:'white',marginTop:5}}>
          <View style={{flexDirection:'row',marginTop: 15,justifyContent:'space-between'}}>
        <Text style={{ textAlign: 'left',  marginBottom: 15 ,marginLeft: 15}}>Tin tức</Text>
        <SimpleLineIcons name='arrow-right' size={15} style={{marginRight: 10}}/>
        </View>
        <FlatList
            data={DATA2}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            style={{ marginBottom: 50}}
        />
      </View>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  
  imgStyle: {
    height: 100,
    width: 150,
    borderRadius: 7
  }
});