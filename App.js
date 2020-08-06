import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import FixedDimension from './components/FixedDimension';
import FlexDimension from './components/FlexDimension';
import FlexDirection from './components/FlexDirection';
import JustifyContentExample from './components/JustifyContentExample';
import ScrollViewSample from './components/VerticalScrollView';
import VerticalScrollView from './components/VerticalScrollView';
import HorizontalScrollView from './components/HorizontalScrollView';
import SampleFlatList from './components/SampleFlatList';

export default class App extends React.Component {
  render() {
    return <SampleFlatList />;
  }
}
