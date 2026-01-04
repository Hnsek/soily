import BackgroundAction, { BackgroundTaskOptions } from "react-native-background-actions"

export type BackgroundActionOptions = {
    parameters?:Object
} & BackgroundTaskOptions

export const startBackgroundAction = (action: (taskData: unknown ) => Promise<void>, options: BackgroundActionOptions ) => {
  return BackgroundAction.start(action, options)
}

export const stopBackgroundAction = () => {
  return BackgroundAction.stop()
}

export const backgroundActionIsRunning = () => BackgroundAction.isRunning()
