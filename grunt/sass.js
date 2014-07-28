module.exports = function (grunt) {
    grunt.config('sass', {
        dist: {
            expand: true,
            cwd: '<%= dir.assets_sass %>',
            src: ['**/*.scss', '!**/_*.scss'],
            dest: '<%= dir.assets_css %>',
            ext: '.css',
            options: {
                style: 'compressed',
                defaultEncoding: 'UTF-8'
            }
        },
        development: {
            expand: true,
            cwd: '<%= dir.assets_sass %>',
            src: ['**/*.scss', '!**/_*.scss'],
            dest: '<%= dir.assets_css %>',
            ext: '.css',
            options: {
                debugInfo: false,
                lineNumbers: true,
                sourcemap: true,
                defaultEncoding: 'UTF-8',
                style: 'expanded'
            }
        }
    });
};
