// typings for react-native-animation-video
import * as React from 'react';

interface App {
    id: number;
    name: string;
    views: string;
    businessTitle: string;
    location: string;
    source: ImageRequireSource | ImageRequireSource | any;
    videoUrl: string | any;
}
export type Apps = App[];

export interface Position {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface ComponentProps extends React.Props<RNAnimationVideo> {
    items: App,
    itemsArr: Apps
    position: Position
}

export class RNAnimationVideo extends React.PureComponent<ComponentProps, {}> { }
