module.exports = function( grunt ) {

  "use strict";

  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'dist/zipcode.min.js': ['zipcode.js'],
          'dist/zipcode-jquery.min.js': ['zipcode-jquery.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
}