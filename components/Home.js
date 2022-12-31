import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, Image, Dimensions } from 'react-native'

// Import Data
import Kategori from './Kategori'

// //Konstanta
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - 30;

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <SafeAreaView>

      {/* Header & Pencarian */}
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
    
    {/* Kategori */}
    <ScrollView horizontal>
      {Kategori.map((category, index) => (
        <TouchableOpacity
          style={{ marginRight: 10 }} 
          key={index}
          onPress={() => setActiveCategory(index)}
        >
          <Text
            style={[
              {
                fontSize: 15,
                fontWeight: "500",
                color: "black",
              },
              activeCategory === index && {
                fontSize: 16,
                fontWeight: "700",
                color: "#8B2CF5",
              },
            ]}
          >
            {category.title}
          </Text>
        </TouchableOpacity>
      ))}</ScrollView>

      {/* List Jasa */}
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          {Kategori[activeCategory].jasa.map((item) => (
            <TouchableOpacity
              style={{ width: ITEM_WIDTH, marginBottom: 20}}
              key={item.id}
            >
              <Image
                style={{
                  width: "100%",
                  height: ITEM_WIDTH + 30,
                  borderRadius: 15,
                }}
                source={item.image}
              />
              <Text
                style={{
                  marginTop:10,
                  fontSize:12,
                }}
              >
                {item.nama}
              </Text>
              <Text
                style={{
                  marginTop:5,
                  fontSize:12,
                }}
              >
                {item.lokasi}
              </Text>
              <Text
                style={{
                  marginTop:5,
                  fontSize:12,
                }}
              >
                {item.kontak}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Home;