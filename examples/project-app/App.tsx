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
  {
    id: 1,
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