module.exports = function(grunt){
    grunt.initConfig({         
        pkg: grunt.file.readJSON('package.json'),

        concat:{
            options:{
                seperator:'\n\n//-----------------------\n',
                banner: '\n\n//--------------------------\n'/*Its used to demacate scripts*/
            },
           dist:{
               src: ['scriptJs/*.js'/*This get any js file*/],
               dest:'dist/script.js'
           } 
        },//Js initial configurations.

        sass:{
            dist:{
                files:{                    
                 src:'sass/style.scss',
                 dest:'dist/css/style.css'
                }
            }
        },//Sass configurations.

        cssmin:{
            minify:{
                src:'dist/css/style.css',
                dest:'dist/css/minified/style.min.css'
            }
        },//Minifying the style sheet

        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'dist/css/minified/styleMedia.min.css',
                        '*.html'
                    ]
                },
                option:{
                    watchTask: true,
                    server:'./'
                }
            }
        },//Browser-sync

        watch:{
            css:{
                files:'sass/style.scss',
                tasks:['sass', 'cssmin']
            }
        }//Watching sass.

    });//All component configuration function. 




    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['concat', 'browserSync', 'sass', 'watch'] );

};