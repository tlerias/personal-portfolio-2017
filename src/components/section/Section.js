import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Section": {
        "color": "#FFF",
        "paddingTop": 10,
        "paddingRight": 60,
        "paddingBottom": 10,
        "paddingLeft": 60
    }
});