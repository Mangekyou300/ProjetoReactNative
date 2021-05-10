import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEX__) {

    const trom = Reactotron.setAsyncStorageHandler(AsyncStorage)
     .configure({ host: '10.0.2.2'})
      .useReactNative()
      .use(reactotronRedux)
      .use(reactotronSaga)
       .connect();

    Tron.clear();

    console.tron = tron;

}