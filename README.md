# huandao

通过搭建一个 RN 项目，记录过程。

## 初始化项目

`react-native init huandao`

按照官网的指引，初始化一个项目。mac 的话，最好先装好 cocoapods: `sudo gem install cocoapods`

运行 `react-native run-ios` 之前，先进入 `ios` 目录，执行 `pod install`。

## 搭配 react-navigation

首先，安装依赖: `yarn add react-navigation react-navigation-stack react-native-gesture-handler`;

然后，进入 `ios` 目录，执行 `pod install`;

最后，最好重新安装一次 app `react-native run-ios`，以后就可以，`react-native start`;