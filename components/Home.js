import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, Image, Dimensions, StatusBar } from 'react-native'

// Import Data
import Kategori from './Kategori'

// //Konstanta
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - 30;

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <SafeAreaView>

{/* Status Bar & Pencarian */}
      <StatusBar
        animated={true}
        backgroundColor="#8B2CF5"/>

      <View style={{
      height:30,
      backgroundColor: "#8B2CF5",
      paddingTop: 30,
      paddingBottom: 60,
      marginBottom:20,
    }}>
      <TextInput
        style={{
          height: 40,
          marginLeft:10,
          marginRight:10,
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
          style={{ 
            marginRight:5,
            marginBottom:15,
            paddingRight:5,
            paddingLeft:10,
            paddingBottom:15,
           }} 
          key={index}
          onPress={() => setActiveCategory(index)}
        >
          <View
            style={[
              {
                height:35,
              backgroundColor:"#EAF4F4",
              paddingTop:5,
              paddingBottom:5,
              paddingLeft:7,
              paddingRight:7,
              borderRadius:10,
              },
              activeCategory === index && {
                backgroundColor:"#DEE2FF",
              },
            ]}
          >
          <Text
            style={[
              {
                fontSize: 15,
                fontWeight: "500",
                color: "black",
              },
              activeCategory === index && {
                fontSize: 15,
                fontWeight: "700",
                color: "#8B2CF5",
              },
            ]}
          >
            {category.title}
          </Text>
          </View>
        </TouchableOpacity>
      ))}</ScrollView>

{/* List Jasa */}
      <ScrollView
        style={{
          marginBottom:200,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginVertical:10,
            marginLeft:10,
            marginRight:10,
          }}
        >
          {Kategori[activeCategory].jasa.map((item) => (
            <TouchableOpacity
              style={{
                width: ITEM_WIDTH,
                marginBottom: 20,
                backgroundColor:"#DEE2FF",
                borderRadius:10,
              }}
              key={item.id}
            >
              <Image
                style={{
                  width: "100%",
                  height: ITEM_WIDTH + 30,
                  borderRadius: 10,
                }}
                source={item.image}
              />
              <Text
                style={{
                  marginTop:10,
                  marginLeft:10,
                  fontSize:14,
                  fontWeight:"700",
                }}
              >
                {item.nama}
              </Text>
              <Text
                style={{
                  marginTop:5,
                  marginLeft:10,
                  fontSize:13,
                }}
              >
                {item.lokasi}
              </Text>
              <Text
                style={{
                  marginTop:5,
                  marginBottom:10,
                  marginLeft:10,
                  fontSize:13,
                  fontWeight:"600",
                  color: "#8B2CF5",
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