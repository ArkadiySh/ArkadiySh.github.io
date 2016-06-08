module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/src',
          src: ['*.scss'],
          dest: 'css/dist',
          ext: 'main.css'
        }]
      }
    },

    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/src/*.scss'],
        tasks: ['sass'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass']);

};