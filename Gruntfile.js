module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.config.init({
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin:{
            html:['dist/index.html']
        },
        copy:{
            html: {
                src: ['**/*.html','!**/node_modules/**'],
                dest: 'dist/'
            }
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            source: {
                files: [{
                    src: [
                        'dist/modules/*.js*',
                        'dist/*.js'
                    ]
                }]
            }
        },
        clean: {
            tmp: ['.tmp'],
            dist: ['dist']
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dist: {
                    src: ['.tmp/concat/modules/*.js']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'modules/**/*.js', 'common/**/*.js']
        }
    });

    grunt.registerTask('default',[
        'jshint',
        'clean:dist',
        'copy:html',
        'useminPrepare',
        'concat',
        'ngAnnotate',
        'uglify',
        'filerev',
        'usemin',
        'clean:tmp'
    ]);
};