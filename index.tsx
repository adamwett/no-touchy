import React, { type ReactElement, type ReactNode } from "react";
import { TouchableOpacity } from "react-native";

// you can change the type of the component you want to disable here
const disableMe = TouchableOpacity;

const cloneWithDisabled = (element: ReactNode): ReactNode | null => {
    if (React.isValidElement(element)) {

        if (element.type === disableMe) {
            // biome-ignore lint: this is safe because we are checking the type of the element
            return React.cloneElement(element as ReactElement<any>, { disabled: true });
        }
        return React.cloneElement(
            element,
            {},
            React.Children.map(element.props.children, (child) => cloneWithDisabled(child)), // recurse
        );
    }
    return element;
};

interface DisableTouchablesProps {
    children: React.ReactNode;
}

export const NoTouchy: React.FC<DisableTouchablesProps> = (props: DisableTouchablesProps) => {
    return React.Children.map(props.children, cloneWithDisabled)
};
