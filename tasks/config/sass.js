module.exports = function(grunt) {

    grunt.config.set('sass', {
        dev: {
            options: {
                sourceMaps: true
            },
            files: [{
                expand: true,
                cwd: 'assets/styles/',
                src: ['importer.scss'],
                dest: '.tmp/public/styles/',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-sass');
}