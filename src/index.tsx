import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
  View,
  Text,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const LINKING_ERROR =
  `The package 'react-native-unity-show' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type UnityShowProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'UnityShowView';

// const UnityShowView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<UnityShowProps>(ComponentName)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };

class UnityShow extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  render() {
    // @ts-ignore
    // const { color, style } = this.props;

    // return <UnityShowView color={color} style={style} />;
    return (
      <View>
        <Text>{DeviceInfo.getUserAgent()}</Text>
      </View>
    );
  }
}

export default UnityShow;
