import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Framework": {
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "color": "#FFF"
    },
    "Framework-logo-container": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": 200,
        "height": 100
    },
    "Framework-logo": {
        "height": 75
    },
    "Framework-detail": {
        "display": "flex",
        "flexDirection": "column",
        "fontFamily": "'Josefin Sans', sans-serif"
    },
    "Framework-detail-name": {
        "marginBottom": 5
    },
    "Framework-detail-exp": {
        "textTransform": "uppercase",
        "fontSize": 2,
        "fontWeight": "bold"
    }
});