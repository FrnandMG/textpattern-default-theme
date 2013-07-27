module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: 'sass/**',
                tasks: ['sass']
            }
        },

        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        cssmin: {
            main: {
                files: {
                    'css/default.min.css': [
                        'css/default.css'
                    ],
                    'css/ie8.min.css': [
                        'css/ie8.css'
                    ]
                }
            }
        },

        copy: {
            core: {
                files: [
                    {expand: true, cwd: 'bower_components/html5shiv/dist/', src: ['html5shiv.js'], dest: 'js/'}
                ]
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('sass', ['compass', 'cssmin']);
    grunt.registerTask('build', ['sass', 'copy:core']);
};