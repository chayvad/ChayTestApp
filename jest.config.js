module.exports = {
  preset: 'react-native',
  'transformIgnorePatterns': [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-reanimated|react-redux|react-native-bouncy-checkbox)/)',
  ],
  setupFilesAfterEnv: ['./jest/jest-setup.ts'],
};
