import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Toolbox": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center"
    },
    "Toolbox-framework": {
        "display": "flex",
        "flexWrap": "wrap",
        "flexDirection": "row",
        "justifyContent": "space-around"
    },
    "Toolbox-tools": {
        "width": "50%",
        "fontSize": 0.8,
        "flexWrap": "wrap",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-evenly"
    }
});