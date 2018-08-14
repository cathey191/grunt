module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			target: {
				files: [
					{
						expand: true,
						cwd: 'css/',
						src: ['*.css', '!*.min.css'],
						dest: 'css/',
						ext: '.min.css'
					}
				]
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/script.min.js': ['js/*.js']
				}
			}
		},
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ['css/*.css']
			},
			lax: {
				options: {
					import: false
				},
				cwd: 'css/',
				src: ['css/*.css']
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			all: ['Gruntfile.js', 'js/*.js']
		},
		sass: {
			dist: {
				options: {
					style: 'expand'
				},
				files: {
					'css/style.css': 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['css/style.css', 'sass/style.scss'],
				tasks: ['sass', 'csslint', 'cssmin']
			},
			js: {
				files: ['js/script.js'],
				tasks: ['jshint', 'uglify']
			}
		}
	});

	// grunt.loadNpmTasks();
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// grunt.registerTask();
	grunt.registerTask('default', ['sass', 'cssmin', 'csslint']);
	grunt.registerTask('min', ['cssmin', 'uglify']);
	grunt.registerTask('lint', ['sass', 'csslint', 'jshint']);
	grunt.registerTask('w', ['watch']);
};
