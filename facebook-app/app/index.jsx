import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

function Index() {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>


       <TextInput style={{textAlign:"center", color:"black", }} placeholder="English (UN)"/>

      <Image
        style={{
          position: "absolute",
          top: "15%",
          left: 190,
          right: 0,
          width: 50,
          height: 50,
          borderRadius: 25,
          alignSelf: "center",
          transform: [{ translateY: -25 }],
        }}
        source={{
          uri: "https://pixabay.com/get/gd7b3531d4f8952fc25ca6c8a84af6aa61048769735ef2bbf5e24b504287b15e819655552e870c2f76fa6d7d2708ae51a4d22daef85522a0c58c30ae7c88965ec_1920.jpg",
        }}
      />


<TextInput
  style={{
    position: "absolute",
    left: 20,
    right: 20,
    top: "40%",
    transform: [{ translateY: -30 }],
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    color: "black",
    borderRadius: 30,
    paddingLeft: 20,
    textAlign: "center",
  }}
  placeholder="Mobile number or email"
/>

<TextInput
  style={{
    position: "absolute",
    left: 20,
    right: 20,
    top: "47%",
    transform: [{ translateY: -30 }],
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    color: "black",
    borderRadius: 30,
    paddingLeft: 20,
    textAlign: "center",
  }}
  placeholder="Password"
/>


  <TouchableOpacity
    style={{
      position: "absolute",
      left: 20,
      right: 20,
      top: "55%",
      transform: [{ translateY: -25 }],
      borderColor: "blue",
      borderWidth: 1,
      backgroundColor: "blue",
      height: 50,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
      Log in
    </Text>
  </TouchableOpacity>
 

{/* <TextInput style={{ marginHorizontal: 20, marginBottom: 400, borderColor:"blue", borderWidth:5, borderSize:30, backgroundColor:"blue",textAlign:"center", textcolor:"white", 
height:50, borderRadius:30,paddingleft:20,}} placeholder="Log in" /> */}



<TouchableOpacity
  style={{
    position: "absolute",
    left: 20,
    right: 20,
    top: "60%",
    transform: [{ translateY: -25 }],
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text style={{ color: "black", textAlign: "center" }}>Forgot Password?</Text>
</TouchableOpacity>


<TouchableOpacity
    style={{
      position: "absolute",
      left: 20,
      right: 20,
      top: "90%",
      transform: [{ translateY: -25 }],
      borderColor: "blue",
      borderWidth: 1,
      backgroundColor: "white",
      height: 50,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ color: "blue", fontSize: 20, fontWeight: "bold" }}>
      Create new account
    </Text>
  </TouchableOpacity>

<Image
        style={{
          position: "absolute",
          top: "97%",
          left: 160,
          width: 115,
          height: 40,
          alignSelf: "center",
          transform: [{ translateY: -25 }],
        }}
        source={{
          uri: "https://pixabay.com/get/g90c08b263e8e4ffa36654649fafdc39ee23576cbb623e66ee075e9b9897b379c3b6279dd725e0690096110c413eb026c0f5dbbdc86300eec4d34656bcfcce614_1920.png",
        }}
      />




{/* <TextInput style={{ marginHorizontal: 20, marginBottom: 20, borderColor:"blue", borderWidth:1, borderSize:30, backgroundColor:"white",textAlign:"center", 
textcolor:"white", height:50, borderRadius:30,paddingleft:20,}} placeholder="Create new account" /> */}


    </SafeAreaView>
  )
}

export default Index




