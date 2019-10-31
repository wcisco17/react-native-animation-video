# UNDER CONSTRUCTION PLEASE CHECK BACK LATER

# react-native-animation-video

## Getting started

`$ npm install @wcisco17/react-native-animation-video --save`

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

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAnimationVideo.sln` in `node_modules/react-native-animation-video/windows/RNAnimationVideo.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Animation.Video.RNAnimationVideo;` to the usings at the top of the file
  - Add `new RNAnimationVideoPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNAnimationVideo from 'react-native-animation-video';

// TODO: What to do with the module?
RNAnimationVideo;
```
  
