import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, Dimensions } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Carousel from './slideshow/Carousel'
import { dummyData } from './slideshow/Data'

const { width, heigth } = Dimensions.get('window')







const DATA = Array(10).fill('').map((e, i) => ({
  id: i + 1,
  photo: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1703-copy-200x300.jpg',
  name: `Caramel Macchiato ${i + 1}`,
  price: '50.000 đ',
}))
const DATA1 = Array(10).fill('').map((e, i) => ({
  id: i + 1,
  photo: 'https://soyagarden.com/content/uploads/2019/11/z1616805604446_605d68133f6dc4c6d05098dff3024c4c-1024x683.jpg',
  name: `TẶNG NGAY 20% KHI NẠP TIỀN VÀO TÀI KHOẢN ĐẬU ${i + 1}`,
}))
const DATA2 = Array(10).fill('').map((e, i) => ({
  id: i + 1,
  photo: 'https://soyagarden.com/content/uploads/2020/09/118649411_4295276030547354_6614295648694420106_n.jpg',
  name: `BTS MỚI | ĐỘC THÂN ẤM ÁP VỚI CHÚT NGỌT NGÀO CỦA "DEAR WINTER" ${" " + (i + 1)}`,
}))


export default function home({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.navigate('Details')}>
      <View style={{ width: 200 }}>
        <View style={{}}>
          <Image
            style={styles.imgStyle}
            source={{ uri: item.photo, }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ color: 'grey' }}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem1 = ({ item }) => (
    <TouchableOpacity style={{}} onPress={() => navigation.navigate('Details')}>
      <View style={{ flex: 1, width: '90%', marginLeft: 15, marginRight: 15 }}>
        <Image
          style={styles.imgStyle1}
          source={{ uri: item.photo, }}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{flex:1}}>
      <View style={{ backgroundColor: '#F9E131', height: 160, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}>
        <View style={{height:160,width:200, borderBottomRightRadius:200, backgroundColor:'#FECE02' }}>
        <View style={{ flexDirection: 'row', marginLeft: 35, marginTop: 5,}}>
        <TouchableOpacity onPress={() => navigation.navigate('Begin')}>

          <View>
            <Image
              source={{ uri: 'https://i.stack.imgur.com/l60Hf.png' }}
              style={{ height: 40, width: 40, borderRadius: 20 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Begin')}>

          <View style={{ backgroundColor: 'white',height:40, width: 90, borderRadius: 20, justifyContent: 'center', marginLeft: 20, }}><Text style={{ fontSize: 11, textAlign: 'center' }}>ĐĂNG NHÂP</Text></View>
        </TouchableOpacity>
        </View>
        </View>

      </View>
        <View style={{ backgroundColor: 'white', height: 110, marginLeft: 10, marginRight: 10,justifyContent:'center' , borderRadius:10, marginTop:-85,marginBottom:8}}>
          <View style={{ flexDirection: 'row', justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('./images/napdau.png')} />
              <Text> Nạp đậu</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('./images/ship.png')} />
              <Text>Giao hàng</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('./images/qrscan.png')} />
              <Text>Tích S-Point</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <View>
              <Image style={{ height: 45, width: 45, marginLeft: 5 }} source={require('./images/voucher.png')} />
              <Text>Voucher</Text>
            </View>
            </TouchableOpacity>

          </View>
        </View>
      <ScrollView showsHorizontalScrollIndicator={true} >

        <View style={{ backgroundColor: '#EFEFEF' }}>

          <View>
            <Carousel data={dummyData} />
          </View>
          <View style={{ backgroundColor: 'white', marginTop: 11, }}>
            <Text style={{ textAlign: 'left', marginTop: 15, marginBottom: 15, marginLeft: 15, fontWeight: 'bold' }}>Gợi ý cho bạn</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              style={{ marginBottom: 10 }}
            />
          </View>
          <View style={{ backgroundColor: 'white', marginTop: 5 }}>
            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
              <Text style={{ textAlign: 'left', marginBottom: 15, marginLeft: 15, fontWeight: 'bold' }}>Voucher/Khuyến mãi</Text>
              <SimpleLineIcons name='arrow-right' size={15} style={{ marginRight: 10 }} />
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
          <View style={{ backgroundColor: 'white', marginTop: 5, fontWeight: 'bold' }}>
            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
              <Text style={{ textAlign: 'left', marginBottom: 15, marginLeft: 15, fontWeight: 'bold' }}>Tin tức</Text>
              <SimpleLineIcons name='arrow-right' size={15} style={{ marginRight: 10 }} />
            </View>
            <FlatList
              data={DATA2}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              style={{ marginBottom:10 }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  imgStyle: {
    height: 130,
    width: width / 1.8,
    borderRadius: 7
  },


});