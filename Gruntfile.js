var fs = require("fs");
var mkdirp = require('mkdirp');

module.exports = function(grunt) {
    var env;

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            template: {
                files: ['src/**/*'],
                tasks: ['build'],
                options: {
                    interrupt: true,
                    spawn: true,
                    debounceDelay: 250
                }
            }
        },

        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /\[\%ClickThroughUrl\%\]/g,
                            replacement: 'http://www.google.de'
                        },
                        {
                            match: /%%CLICK_URL_ESC%%/g,
                            replacement: ''
                        },
                    ]
                },
                files: [
                    {expand: true, src: ['**/*'], dest: 'build/', cwd:'src'}
                ]
            }
        },

        folder_list: {
            options: {
                // Default options, you dont need these they are just to highlight the options available.
                files: true,
                folders: false
            },
            files: {
                src : ['src/**'],
                dest: 'temp/folderlist.json'
            }
        },
        clean: {
            temp: {
                src: ['temp','build']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-folder-list');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('replacePH', 'Set a config property.', function() {

        var folderJSON = grunt.file.readJSON('temp/folderlist.json');

        for (var i = 0; i < folderJSON.length; i++) {
            if(folderJSON[i].filetype === "html" || folderJSON[i].filetype === "js"){
                var dir = folderJSON[i].location;
                //read replace config
                var config;
                try{
                    config = undefined;
                    config = grunt.file.readJSON(dir.replace(folderJSON[i].filename, 'replace.json'));
                }
                catch(e){
                    //console.info("no replace config found for",folderJSON[i].filename);
                }

                if(config){
                    var done = this.async();
                    var file = grunt.file.read(folderJSON[i].location);

                    for(var j in config){
                        var tj = j.replace('[','\\[').replace(']','\\]').replace('&','\\&').replace('?','\\?');
                        var reg = new RegExp(tj,"g");
                        file = file.replace(reg, config[j]);
                    }

                    (function(done,dir,json,file){

                        console.log(dir.replace(json.filename,'').replace('src','build'))

                        mkdirp(dir.replace(json.filename,'').replace('src','build'), function (err) {
                            fs.writeFile(dir.replace('src','build'), file, function(err) {
                                if(err) {
                                    return console.log(err);
                                }
                                done();
                            });
                        });
                    })(done,dir,folderJSON[i],file)
                }
            }
        }




    });

    grunt.registerTask('build',[
        'clean:temp',
        'folder_list',
        'replacePH'
    ]);
};