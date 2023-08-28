import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import { db } from "../config/firebase";

const firestore = firebase.firestore();

const FeedPhotos = () => {
  const imagesRef = collection(db, "images");
  const [images] = useCollectionData(imagesRef, { idField: "id" });

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.imageURL }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  imageContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default FeedPhotos;
