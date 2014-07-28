module.exports = function (grunt) {
    grunt.config('scsslint', {
        allFiles: [
            '<%= dir.assets_sass %>',
        ],
        options: {
            bundleExec: true,
            config: '.scss-lint.yml',
            reporterOutput: null
        }
    });
};
