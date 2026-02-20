import * as ReactNativeWeb from 'react-native-web';

// Export everything from react-native-web
export * from 'react-native-web';

// Add missing exports that some native packages expect
export const TurboModuleRegistry = {
  get: () => null,
};

// Some versions/exports of react-native-web might not include these
export const UnimplementedView = ReactNativeWeb.UnimplementedView || (() => null);
export const ViewPropTypes = ReactNativeWeb.ViewPropTypes || {};

// Default export
// Create a default export that functions as both the module object and a callable function
// This is necessary because some libraries (like lucide-react-native) might be transpiled in a way
// that attempts to call the default import as a function.
const ReactNative = () => {
  return null;
};

// Copy all properties from react-native-web to our function
Object.assign(ReactNative, ReactNativeWeb);

// Add our custom/missing exports
Object.assign(ReactNative, {
  TurboModuleRegistry,
  UnimplementedView,
  ViewPropTypes,
});

// Default export
export default ReactNative;
