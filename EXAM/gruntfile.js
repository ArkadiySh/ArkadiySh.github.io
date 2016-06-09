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
        tasks: ['concat', 'sass' ],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'sass']);

};