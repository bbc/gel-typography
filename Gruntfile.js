module.exports = function(grunt) {

    // get the current mode
    mode = grunt.option( 'mode' ) || 'dev';

    // store the paths
    grunt.config('dir', {
        assets:      'assets/',
        assets_js:   '<%= dir.assets %>' + 'js/',
        assets_sass: '<%= dir.assets %>' + 'sass/',
        assets_css:  '<%= dir.assets %>' + 'css/',
        assets_img:  '<%= dir.static %>' + 'img/'
    });

    // everyone loves a graph
    require('time-grunt')(grunt);

    // just in time loader
    require('jit-grunt')(grunt, {
        scsslint: 'grunt-scss-lint'
    });

    // log out what mode we're running in as people like to know this kind of stuff
    if (mode == 'dev') {
        grunt.log.subhead('Running Grunt in `Development` mode');
    } else {
        grunt.log.subhead('Running Grunt in `Production` mode');
    }

    // register default task when `grunt` command is run
    grunt.registerTask('default', function() {

        // some tasks we only want to run in production mode
        if (mode == 'dev') {

            grunt.task.run([
                'sass:development',
                'scsslint',
                'watch'
            ]);

        } else {

            grunt.task.run([
                'sass:dist',
                'scsslint'
            ]);

        }

    });

    // get the tasks
    grunt.loadTasks('grunt/');

};
