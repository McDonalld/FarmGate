module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-reanimated/plugin',
        {
          relativeSourceLocation: true,
        },
      ],
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@': './app' // matches "paths" in tsconfig.json
        }
      }]
    ]
  };
};