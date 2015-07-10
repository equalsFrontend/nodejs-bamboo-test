module.exports = function (grunt) {

    var tasksFile, tasks,
        bowerFile, bowerDeps = [];

    
    tasksFile = grunt.file.readJSON('Grunttasks.json');
    bowerDepsFile = grunt.file.readJSON('bower.json');

    tasks = tasksFile;
    bowerDeps = [      //THIS MUST MATCH THE FILE LIST IN karma.conf.js
        'bower_components/jquery/dist/jquery.js',
        'bower_components/underscore/underscore.js',
        'test/**/*Spec.js',
        'test/**/*Src.js'
    ];


    tasks["pkg"] = grunt.file.readJSON('package.json');
    tasks["bowerDeps"] = {
        'jsFilesForTesting': bowerDeps
    };

    
    grunt.initConfig(tasks);

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.loadNpmTasks('grunt-karma');
    
    //grunt.registerTask('default',   ['concat', 'karma:development', 'compass', 'cssmin', 'watch']);
    //grunt.registerTask('cleanall',  ['clean:all', 'copy:main']);


    grunt.registerTask('default', ['karma:development']);

};
