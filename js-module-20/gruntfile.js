module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },

    uglify: {
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },

    concat_css: {
      options: {
        // Task-specific options go here. 
      },
      all: {
        src: ["css/src/*.css"],
        dest: "css/dist/style.main.css"
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          // cwd: 'css',
          src: ['css/dist/*.css'],
          dest: '',
          ext: '.min.css'
        }]
      }
    },

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

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin', 'sass']);

};