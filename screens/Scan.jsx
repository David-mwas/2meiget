import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, ActivityIndicator, StyleSheet, ToastAndroid, useWindowDimensions } from "react-native";
import {
  Camera,
  useCameraDevices,
  useCameraPermission,
} from "react-native-vision-camera";

const Scan = () => {
  const checkPermissions = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission === "not-determined") {
      requestPermissions();
    }
    if (cameraPermission === "denied") {openSettings()
}  };
const openSettings = () => {
  ToastAndroid.show(
    "Camera permission denied. Please allow it.,",
    ToastAndroid.LONG
  );
  Linking.openSettings();
};
const requestPermissions = async () => {
  const newCameraPermission = await Camera.requestCameraPermission();
  if (newCameraPermission === "denied") openSettings();
};

useEffect(() => {
  checkPermissions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const devices = useCameraDevices();
  const [cameraDevice, setCameraDevice] = useState("back");

  const [flashState, setFlashState] = useState("off");

  const toggleFlash = () => {
    if (flashState === "on") setFlashState("off");
    if (flashState === "off") setFlashState("auto");
    if (flashState === "auto") setFlashState("on");
  };
  const camera = useRef(null);
    const [base64Data, setBase64Data] = useState(null);
  const [imageExtension, setImageExtension] = useState(null);
    const takePicture = async () => {
      const photo = await camera.current?.takePhoto({
        flash: flashState,
        skipMetadata: true,
        qualityPrioritization: "speed",
      });

      if (photo) {
        setImagePath(`file://${photo.path}`);
        const base64Image = await RNFetchBlob.fs.readFile(photo.path, "base64");

        setBase64Data(base64Image);
        setImageExtension(photo.path.slice(-3));
      }
    };

    const { width, height } = useWindowDimensions();
  const [imagePath, setImagePath] = useState(null);
    const imagePickerOptions = {
      mediaType: "photo",
      cropping: true,
      width: StoryDimensions.width,
      height: StoryDimensions.height,
      includeBase64: true,
      forceJpg: true,
  };
  const [uploading, setUploading] = useState(false);

  const handleImage = (res) => {
    if (res.data) {
      setImagePath(`data:${res.mime};base64,${res.data}`);
      setBase64Data(res.data);
    }
  };
    const selectFromGallery = async () => {
      try {
        const res = await ImagePicker.openPicker(imagePickerOptions);
        if (res) handleImage(res);
      } catch (err) {
        console.error("[selectFromGallery]", err);
      }
    };

    const toggleCamera = useCallback(() => {
      setCameraDevice((currState) => (currState === "back" ? "front" : "back"));
    }, []);




  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={devices[cameraDevice] || devices.back}
        isActive={isFocused && isAppForeground}
        photo={true}
        enableZoomGesture
        focusable
        preset="low"
      />
    </View>
  );
};

export default Scan;
