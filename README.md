# VERSION 1.1.3

# react-native-animation-video
<p>
  React Native Animation is a transition Component rendering a video content when the Modal Expands.
</p>

## Video link of the component below 
https://storage.cloud.google.com/github-video/react-animation-video.mov

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
