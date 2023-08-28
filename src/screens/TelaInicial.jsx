import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "../utils/styles";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes, list } from "firebase/storage";
import { Text } from "react-native-paper";
import FeedPhotos from "./FeedScreen";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const uploadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();

      // Upload the blob to Firebase Storage
      const storageRef = ref(storage, "images/" + Date.now()); // Update the path as needed
      const uploadTask = uploadBytes(storageRef, blob);

      // Wait for the upload to complete
      await uploadTask;

      // Get the download URL and store it in Firestore
      const imageURL = await getDownloadURL(storageRef);
      addImageToFirestore(imageURL);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const addImageToFirestore = async (imageURL) => {
    try {
      const ref = collection(db, "images");
      await addDoc(ref, { imageURL }); // Store the image URL in Firestore

      console.log("Image URL added to Firestore");
    } catch (error) {
      console.error("Error adding image URL to Firestore: ", error);
    }
  };

  async function pageTokenExample() {
    const storage = getStorage();
    const listRef = ref(storage, "files/uid");

    if (firstPage.nextPageToken) {
      const secondPage = await list(listRef, {
        maxResults: 100,
        pageToken: firstPage.nextPageToken,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        <h2> Upload de Imagens </h2>
        <FeedPhotos />
      </Text>
      <Button
        style={styles.button}
        title="Pick an image from camera roll"
        onPress={pickImage}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Upload image" onPress={uploadImage} disabled={!image} />
    </View>
  );
}
