'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var appConfig = {
        app: 'app',
        dist: 'dist',
        test: 'test'
    };

    grunt.initConfig({

        // Project settings
        bootstrap: appConfig,

        // The actual grunt server settings
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'dist',
                    hostname: '0.0.0.0',
                    middleware: function(connect, options) {
                        return [
                        connect.static(String(options.base)),
                        connect.directory(String(options.base))];
                    }
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        less: {
            all: {
                files: [ {
                    expand: true,
                    cwd: '<%= bootstrap.app %>/styles',
                    src: 'main.less',
                    dest: '<%= bootstrap.dist %>/styles',
                    ext: ".css" }
                ]
            }
        },
        concat: {
            js: {
                src: '<%= bootstrap.app %>/js/**/*.js',
                dest: '<%= bootstrap.dist %>/js/spec.js'
            }
        },
        copy: {
            index: {
                expand: true,
                cwd: '<%= bootstrap.app %>/',
                src: '*.html',
                dest: '<%= bootstrap.dist %>/',
                filter: 'isFile'
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: '<%= bootstrap.dist %>/libs/js'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.js',
                    'jquery-ui.js': 'jquery-ui/ui/jquery-ui.js',
                    'angular.js': 'angular/angular.js',
                    'angular-animate.js': 'angular-animate/angular-animate.js',
                    'angular-cookies.js': 'angular-cookies/angular-cookies.js',
                    'angular-resource.js': 'angular-resource/angular-resource.js',
                    'angular-sanitize.js': 'angular-sanitize/angular-sanitize.js',
                    'angular-touch.js': 'angular-touch/angular-touch.js',
                    'angular-ui-router.js': 'angular-ui-router/release/angular-ui-router.js',
                    'lodash.js': 'lodash/dist/lodash.js',
                    'lodash.compat.js': 'lodash/dist/lodash.compat.js',
                    'lodash.underscore.js': 'lodash/dist/lodash.underscore.js',
                    'bootstrap.js': 'bootstrap/dist/js/bootstrap.js'
                }
            },
            fonts: {
                files: [{
                    src: 'bootstrap/dist/fonts', dest: '<%= bootstrap.dist %>/libs/fonts'
                }]
            },
            css: {
                files: [
                    { src: 'bootstrap/dist/css/bootstrap.css', dest: '<%= bootstrap.dist %>/libs/css'},
                    { src: 'bootstrap/dist/css/bootstrap.css.map', dest: '<%= bootstrap.dist %>/libs/css'},
                    { src: 'jquery-ui/themes/base/jquery-ui.css', dest: '<%= bootstrap.dist %>/libs/css'}
                ]
            },
            images: {
                files: [
                    { src: 'jquery-ui/themes/base/images', dest: '<%= bootstrap.dist %>/libs/css/images'}
                ]
            }
        },
        karma: {
            unit: {
                configFile: '<%= bootstrap.test %>/karma.unit.js'
            }
        },
        protractor: {
            options: {
                configFile: '<%= bootstrap.test %>/protractor.conf.js',
                keepAlive: false
            },
            run: {}
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('unit', ['concat', 'less', 'bowercopy', 'copy', 'karma']);
    grunt.registerTask('e2e', ['concat', 'less', 'bowercopy', 'copy', 'connect', 'protractor']);
    grunt.registerTask('test', ['concat', 'less', 'bowercopy', 'copy', 'karma', 'connect', 'protractor']);
    grunt.registerTask('build', ['concat', 'less', 'bowercopy', 'copy', 'test']);
    grunt.registerTask('server', ['build', 'connect']);


};
