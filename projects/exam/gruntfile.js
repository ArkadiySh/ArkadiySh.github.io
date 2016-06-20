module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['css/src/reset.css', 
              'css/src/fonts.scss', 
              'css/src/variables.scss',
              'css/src/style320px.scss',
              'css/src/style768px.scss',
              'css/src/style1440px.scss'],

        dest: 'css/src/style.main.scss'
      }
    },

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
      my_target: {
        files: {
          'js/dist/script.min.js': ['js/dist/script.main.js']
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/dist',
          src: ['*.css', '!*.min.css'],
          dest: 'css/dist',
          ext: '.min.css'
        }]
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/src',
          src: ['*main.scss'],
          dest: 'css/dist',
          ext: '.css'
        }]
      }
    },

    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/src/*.scss'],
        tasks: ['concat', 'uglify', 'sass', 'cssmin' ],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['concat', 'sass']);

};