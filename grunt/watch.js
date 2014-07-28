module.exports = function (grunt) {
    grunt.config('watch', {
        sass: {
            files: [
                '<%= dir.assets_sass %>**/*.scss'
            ],
            tasks: ['sass:development']
        },
        scsslint: {
            files: [
                '<%= dir.assets_sass %>**/*.scss'
            ]
        }
    });
};
