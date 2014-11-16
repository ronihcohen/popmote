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
                src: ['index.html'],
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
                    src: ['.tmp/concat/*.js']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'modules/**/*.js', 'common/**/*.js']
        },
        ngtemplates:  {
            app:        {
                src:      'modules/**/*.html',
                dest:     '.tmp/concat/templates.js',
                options:  {
                    module: 'popmote',
                    usemin: 'app.js',
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true, // Only if you don't use comment directives!
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                }

            }
        }
    });

    grunt.registerTask('default',[
        'jshint',
        'clean:dist',
        'copy:html',
        'useminPrepare',
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'uglify',
        'filerev',
        'usemin',
        'clean:tmp'
    ]);
};