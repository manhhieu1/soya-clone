import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image ,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const DATA = Array(10).fill('').map((e, i) => ({
    id: i + 1,
    photo: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1703-copy-200x300.jpg',
    name: `Caramel Macchiato ${i + 1}`,
    price: '50.000 đ',
  }))

export default function odering() {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{margin: 15}}>
          <View style={{}}>
            <Image
              style={{width:200,height:150,borderRadius:10}}
              source={{ uri: item.photo, }}
            />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        </TouchableOpacity>
    )
    return (
        <View style={{backgroundColor:'#f2eff4'}}>
            <View>
                <Text>Danh mục</Text>
                <ScrollView horizontal={true} style={{marginHorizontal:15}} showsHorizontalScrollIndicator={false}>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Image></Image>
                            <Text>SOYA MILK</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={{backgroundColor:'white'}}>
                <Text>Tất cả các món</Text>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
                style={{ marginBottom: 450}}
                >

                </FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btn:{
        height: 70,
        width: 130,
        backgroundColor:'white',
        borderRadius:10,
        margin:5
    }
})