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
               dest:'dist/script/script.js'
           } 
        },//Js initial configurations.

        sass:{
            dist:{
               
                files:{ 
                    'dist/css/style.css' : 'sass/style.scss'
                    /*
                 src:'sass/style.scss',
                 dest:'dist/css/style.css'    */             
                }
            }
        },//Sass configurations.

        cssmin:{
            minify:{
                src:'dist/css/style.css',
                dest:'dist/css/minified/style.min.css'
            }
        },//Minifying the style sheet

        /* browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'dist/css/minified/styleMedia.min.css',
                        '*.html',
                        '*.js'
                    ]
                },
                option:{
                    watchTask: true,
                    server:'./dist'
                }
            }
        }, //Browser-sync */        

        compressImages:{
            prod : {
                input_path: 'src/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
                output_path: 'build/img/',
                 options: {
                    compress_force: false, 
                    statistic: true, 
                    autoupdate: true,
                    pathLog: './log/lib/compress-images'
                },
                jpg: {
                     engine: 'mozjpeg',
                    command: ['-quality', '60']
                },
                png: {
                    engine: 'pngquant',
                    command: ['--quality=20-50']
                },
                svg: {
                    engine: 'svgo',
                    command: '--multipass'
                },
                gif: {
                    engine: 'gifsicle',
                    command: ['--colors', '64', '--use-col=web']
                }
            }
        },

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
    grunt.loadNpmTasks('grunt-compress-images');
    //grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'compressImages', 'watch'] );

};