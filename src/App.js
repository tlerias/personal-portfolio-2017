import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "App": {},
    "App-logo": {
        "fontFamily": "'Josefin Sans', sans-serif",
        "display": "flex",
        "justifyContent": "flex-end",
        "backgroundColor": "#D8BFD8",
        "minWidth": 80,
        "maxWidth": 80,
        "height": 80
    },
    "App-logo-text": {
        "fontWeight": "bold",
        "fontSize": 36,
        "alignSelf": "flex-end",
        "color": "#000",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 2.5,
        "marginLeft": 0
    },
    "App-header": {
        "display": "flex",
        "flexDirection": "row",
        "backgroundColor": "#222",
        "height": 125,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "white"
    },
    "App-header-text": {
        "height": 80,
        "display": "flex",
        "fontSize": 0.9,
        "marginLeft": 0,
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "flex-start"
    },
    "App-header-subtext": {
        "fontFamily": "'Josefin Sans', sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "App-header-nav": {
        "width": "50%",
        "fontSize": 2.5,
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "flex-end",
        "flexWrap": "wrap",
        "alignSelf": "center",
        "marginLeft": "auto",
        "marginRight": 40
    },
    "App-header-icon": {
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 20
    }
});