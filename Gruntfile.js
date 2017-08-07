//require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
module.exports = function (grunt) {

    grunt.initConfig({
        browserify: {
            dist: {
            options: {
                ignore: [
                    './node_modules/**/seedrandom/lib/*.js',
                    'crypto'
                ],
                browserifyOptions: {
                    standalone: 'plottorifficweb',
                    debug: false
                }
            },
            files: {
                "./src/js/plottoriffic.js": ["./plottoriffic.js"]
            }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask("default", ["browserify"]);
};