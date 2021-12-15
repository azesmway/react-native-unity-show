import React from 'react';
import { requireNativeComponent, UIManager, Platform } from 'react-native';
const LINKING_ERROR =
  `The package 'react-native-unity-show' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';
const ComponentName = 'UnityShowView';
const UnityShowView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
class UnityShow extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    // @ts-ignore
    const { color, style } = this.props;
    return React.createElement(UnityShowView, { color: color, style: style });
  }
}
export default UnityShow;
// @ts-ignore
// const UnityShowView = requireNativeComponent(ComponentName, UnityShow);
