import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBaground,
    Platform,
    ImagePickerIOS
} from "react-native";

import{DrawerItems} from "react-navigation-drawer"
import {Avtar} from "React-navigation-elements";
import firebase from "firebase";
import db from "../config";
import { Component } from "react";


export default class CustomSideBarMenu extends Component {
    state = {
        userId: firebase.auth().currentUser.email,
        image:"#",
        name: "",
        docId: "",
        
    
    };
}

selectPicture = async () => {
    const {cancelled,uri} = await ImagePicker.launchImageLibaryAsync({
        mediaTypes:ImagePicker.mediaTypeOptions.All,
        allowsEditting:true,
        aspect:[4,3],
    }) 
}






