"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoTouchy = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
// you can change the type of the component you want to disable here
var disableMe = react_native_1.TouchableOpacity;
var cloneWithDisabled = function (element) {
    if (react_1.default.isValidElement(element)) {
        if (element.type === disableMe) {
            // biome-ignore lint: this is safe because we are checking the type of the element
            return react_1.default.cloneElement(element, { disabled: true });
        }
        return react_1.default.cloneElement(element, {}, react_1.default.Children.map(element.props.children, function (child) { return cloneWithDisabled(child); }));
    }
    return element;
};
var NoTouchy = function (props) {
    return react_1.default.Children.map(props.children, cloneWithDisabled);
};
exports.NoTouchy = NoTouchy;
