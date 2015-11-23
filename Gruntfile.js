module.exports = function( grunt ) {

  "use strict";

  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'src/zipcode.min.js': ['zipcode.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
}