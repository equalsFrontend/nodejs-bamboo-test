module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'bower_components/jquery/jquery.js',
            'bower_components/underscore/underscore.js',
            'test/**/*Spec.js',
            'test/**/*Src.js'
        ],

        exclude: [

        ],

        preprocessors: {

        },

        reporters: ['junit', 'spec'],

        junitReporter: {
            outputDir: 'test/log', // results will be saved as $outputDir/$browserName.xml
            suite: ''
        },

        port: 9876,

        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: true
    });
};
