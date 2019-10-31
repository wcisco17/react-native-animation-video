// typings for react-native-animation-video
import * as React from 'react';

interface App {
    id: number;
    name: string;
    views: string;
    businessTitle: string;
    location: string;
    source: any;
    videoUrl: string | any;
}
export type Apps = App[];

interface ComponentProps extends React.Props<RNAnimationVideo> {
    items: App,
    itemsArr: Apps
    position: Position
}

export class RNAnimationVideo extends React.PureComponent<ComponentProps, {}> {
    items: Apps;
    isIcon: boolean;
}
