module.exports = function(grunt) {

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	var config = {

		/* Path variables
		-------------------------------------------*/
		src: 'src',
		src_js: 'src/js',
		src_less: 'src/less',
		src_css: 'src/css',
		src_html: 'src/html',

		dest: 'dest',
		dest_js: 'dest/js',
		dest_css: 'dest/css',

		/* Watch
		-------------------------------------------*/
		watch: {
			options: {
				spawn: false
			},
			grunt: {
				files: ['Gruntfile.js']
			},
			css: {
				files: ['<%= src %>/**/*.less'],
				tasks: ['less']
			},
			js: {
				files: [
					'<%= src_js %>/*.js',
					'<%= src_css %>/*.css'
				],
				tasks: ['concat']
			},
			// jsmin: {
				// 	files: [
				// 		'<%= src_js %>/*.js',
				// 	],
				// 	tasks: ['uglify']
				// },
				// cssmin: {
				// 	files: [
				// 		'<%= src_css %>/*.css',
				// 	],
				// 	tasks: ['cssmin']
				// },
			html: {
				files: ['<%= src %>/**/*.html'],
				tasks: ['htmlbuild']
			},
		},

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"<%= dest_css %>/*.css",
					]
				},
				options: {
					watchTask: true,
					proxy: "http://localhost/"
				}
			}
		},

		/* CSS Min
		-------------------------------------------*/
			// cssmin: {
			// 	target: {
			// 		files: [{
			// 			expand: true,
			// 			cwd: '<%= dest_css %>',
			// 			src: ['plugins.css'],
			// 			dest: '<%= dest_css %>',
			// 			ext: '.min.css'
			// 		}]
			// 	}
			// },

			/* Uglify
			-------------------------------------------*/
			// uglify: {
			// 	dist: {
			// 		files: {
			// 			'<%= dest_js %>/plugins.min.js': ['<%= dest_js %>/plugins.js']
			// 		}
			// 	}
			// },

		less: {
			development: {
				options: {
					paths: ["less"]
				},
				files: {
					"<%= dest_css %>/style.css": "<%= src_less %>/style.less"
				}
			},
		},
		/* Concat
		-------------------------------------------*/
		concat: {
			js: {
				src: ['<%= src_js %>/*.js'],
				dest: '<%= dest_js %>/custom.js'
			}
		},
		/* HTML Build
		-------------------------------------------*/
		htmlbuild: {
			dest: {
				src: '<%= src %>/*.html',
				dest: '<%= dest %>/',
				options: {
					relative: true,
					sections: {
						layout: {
							//common
							head: '<%= src_html %>/head.html',
							header: '<%= src_html %>/header.html',
							foot: '<%= src_html %>/foot.html',
							footer: '<%= src_html %>/footer.html',

							index:{
								// body index
								accommodation: '<%= src_html %>/body-index/accommodation.html',
				 				rates: '<%= src_html %>/body-index/our-rates.html',
				 				services: '<%= src_html %>/body-index/our-services.html',
				 				reviews: '<%= src_html %>/body-index/reviews.html',
				 				slider: '<%= src_html %>/body-index/slider.html',
							}

										
						},
						section: {
							// slider_1: '<%= src_html %>/slider/slider.html',
							// slider_2: '<%= src_html %>/slider/slider_2.html',
							// slider_3: '<%= src_html %>/slider/slider_3.html',
							// slider_4: '<%= src_html %>/slider/slider_4.html',
						},
						widget: {
							// top_section: '<%= src_html %>/top_section.html',
						},
					},
					data: {
						version: "0.1.0",
						title: "Mianmi"
					}
				}
			}
		}
	};

	grunt.initConfig(config);
	grunt.registerTask('default', ['browserSync', 'watch']);
}