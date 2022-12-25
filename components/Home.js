import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'

const Home = () => {
  return (
    <>
    <View style={{
      height:60,
      width: 412,
      backgroundColor: "#8B2CF5",
      paddingTop: 60,
      paddingBottom: 60,
      marginBottom:30,
    }}>
      <TextInput
        style={{
          height: 40,
          width:300,
          marginLeft:10,
          paddingLeft:10,
          backgroundColor: "#FFFFFF",
          borderRadius:10,
        }}
        placeholder="Cari Jasa"
      />
    </View>
    
    <ScrollView>

        <View style={{
          
        }}>
          <Text style={{
            fontWeight: "bold",
            fontSize:16,
          }}>
            Kategori
          </Text>
        </View>

        <View>
          <Text>
            Elektronik
          </Text>
          <Text>
            Otomotif
          </Text>
          <Text>
            Pertukangan  
          </Text>
          <Text>
            Perawatan Diri
          </Text>
          <Text>
            TIK
          </Text>
          <Text>
            Service Lainnya
          </Text>
        </View>

      </ScrollView></>
  );
}

export default Home;