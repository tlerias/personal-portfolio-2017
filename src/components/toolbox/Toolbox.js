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
        "justifyContent": "space-around"
    },
    "Toolbox-framework": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-around"
    },
    "Toolbox-tools": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-evenly"
    }
});