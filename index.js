/**
 * @format
 */

import { AppRegistry } from 'react-native';
import BackgroundFetch from "react-native-background-fetch";
import App from './App';
import { name as appName } from './app.json';
import { updateNotification } from './src/components/BackgroundTask';

const headlessTask = async (event) => {
    if (event.timeout) {
      BackgroundFetch.finish(event.taskId);
      return;
    }

    updateNotification()

    BackgroundFetch.finish(event.taskId);
  };
  
  
BackgroundFetch.registerHeadlessTask(headlessTask);

AppRegistry.registerComponent(appName, () => App);
