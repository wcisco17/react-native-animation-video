# VERSION 1.1.3

# react-native-animation-video

## Getting started

`$ npm install @wcisco17/react-native-animation-video --save`

## Usage Example with Typescript
```tsx
import RNAnimationVideo, { RNAnimation } from '@wcisco17/react-native-animation-video';
import * as React from 'react';

const apps: RNAnimation = [
  {
    id: 0,
    name: "John Doe",
    views: "1,000",
    source: require("./assets/fitness.jpg"),
    businessTitle: "Cafe Lapin",
    location: 'Mars',
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
  },
];

const App: React.FC = () => {
  return (
    <RNAnimationVideo
      items={apps}
      isIcon
    />
  );
};

export default App;
```

## Usage Example with normal JSX
```jsx
import RNAnimationVideo from '@wcisco17/react-native-animation-video';
import React from 'react';

const apps = [
  {
    id: 0,
    name: "John Doe",
    views: "1,000",
    source: require("./assets/fitness.jpg"),
    businessTitle: "Cafe Lapin",
    location: 'Mars',
    videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
  },
];

const App = () => {
  return (
    <RNAnimationVideo
      items={apps}
      isIcon
    />
  );
};

export default App;
```

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-animation-video` and add `RNAnimationVideo.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAnimationVideo.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAnimationVideoPackage;` to the imports at the top of the file
  - Add `new RNAnimationVideoPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-animation-video'
  	project(':react-native-animation-video').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-animation-video/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-animation-video')
  	```
