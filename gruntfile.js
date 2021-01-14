module.exports = function(grunt){
    const mozjpeg = require('imagemin-jpegtran');
    const pngquant = require('imagemin-optipng');
    const gifsicle = require('imagemin-gifsicle');

//const imageminJpegtran = require('imagemin-jpegtran');
//const imageminPngquant = require('imagemin-pngquant');

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

         browserSync:{
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
        }, //Browser-sync  

       imagemin:{
           dynamic: {
              files: [{
                cwd:'images/',
                expand: true,
                src:['**/*.{png, jpg}'],
                dest: 'dist/images'
              }]
                
            },
           /*static:{
                options:{
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use:[
                        pngquant({quality:[0.5, 0.5]}),
                        mozjpeg({quality: 50})
                    ] 
                },
                files:{
                    'dist/images/img.png': 'src/img.png',
                    'dist/images/img.jpg': 'src/img.jpg'
                }
           }*/
           
       },//Image compression

       /*cacheBust:{
         taskName:{
             options:{
                assets:[
                    'assets/**.sass', 'js/*'
                ]
            },
            src:['index.html']
         }  
       },*/

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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'imagemin', 'browserSync', 'watch'] );

};