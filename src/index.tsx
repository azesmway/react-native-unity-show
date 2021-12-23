import React from 'react';
import {
  // requireNativeComponent,
  // UIManager,
  // Platform,
  // ViewStyle,
  View,
  NativeModules,
} from 'react-native';

const { UnityShowUserAgent } = NativeModules;

// const LINKING_ERROR =
//   `The package 'react-native-unity-show' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo managed workflow\n';
//
// type UnityShowProps = {
//   color: string;
//   style: ViewStyle;
// };
//
// const ComponentName = 'UnityShowView';

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

  componentDidMount() {
    UnityShowUserAgent.getWebViewUserAgent() //asynchronous
      .then((ua: any) => {
        console.log('UnityShowUserAgent', ua)
      })
      .catch((e: any) => {
        console.error(e)
      })
  }

  render() {
    // @ts-ignore
    // const { color, style } = this.props;

    // return <UnityShowView color={color} style={style} />;
    return (
      <View />
    );
  }
}

export default UnityShow;
