# react-native-stories

Whatsapp, Instagram like story component for react-native

## Demo

![alt text](https://i.ibb.co/VqkYFNf/Whats-App-Image-2019-12-14-at-7-00-49-PM.jpg "Logo Title Text 1")

[Live in Action](https://drive.google.com/file/d/1UId6DI8Lf7qOm0tXPNv1C1bCQFiE3BIg/view?usp=sharing)

## Installing

```
npm install --save react-native-stories
```

## Usage

```javascript
import StoryImages from "react-native-stories";
```

```javascript
render() {
  const images = [{ uri: 'myImageUrl' }]
  ...some code
  return(
    <StoryImages
      images={images || []}
      color={myColor}
    />
    ...your code continued
  ).
}
```

## Props

| **PropName**           | **PropType** |                  **Purpose** |  **Required**  |
| ---------------------- | :----------: | ---------------------------: | :------------: |
| images                 |   `Array`    |      Images to show as story |      Yes       |
| color                  |   `String`   |        Color of progress bar | No _(#FED94D)_ |
| containerStyle         |   `Object`   |              Container style |       No       |
| progressContainerStyle |   `Object`   | Progress bar container style |       No       |
| imageStyle             |   `Object`   |                  Image style |       No       |
| duration               |   `Number`   |    Duration for progress bar | No _(6000ms)_  |
|

## Built With

- [React Native](https://facebook.github.io/react-native/docs/getting-started)
- [React](https://reactjs.org/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/letsjynx/react-native-stories/tags).

## Authors

- **Anshuman Bhardwaj** - _Initial work_ - [Anshuman71](https://github.com/Anshuman71)

## Acknowledgments

- WhatsApp and Instagram story components
