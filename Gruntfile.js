module.exports = function (grunt) {
   // load all grunt tasks
   // grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.initConfig({
      sass: {
         bootstrap: {
            files: {
               'assets/styles/styles.css': 'assets/styles/styles.scss'
            }
         }
      },
      watch: {
         options: {
            spawn: false,
            livereload: { liveCSS: false }  // disable CSS injection
         },
         index: {
            files: [
               '!**/node_modules/**',
               '**/*.html',
               '**/*.scss',
               '**/*.js'
            ]
         },
         css: {
            files: [
               'assets/styles/*.scss'
            ],
            tasks: ['sass']
         }
      }
   });

   grunt.registerTask('default', [
      'sass',
      'watch'
   ]);

   grunt.registerTask('build', [
      'sass'
   ]);
};
