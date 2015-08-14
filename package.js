Package.describe({
  name: 'jss:tracking.js',
  version: '1.1.1',
  summary: 'Color tracking, face detection and much more.',
  git: 'https://github.com/JSSolutions/tracking.js',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles([
    'tracking.js', 
    'data/eye.js',
    'data/face.js',
    'data/mouth.js',
    'lib/dat.gui.js'
  ], 'client');

  api.export('tracking', 'client');
  api.export('dat', 'client');
});
