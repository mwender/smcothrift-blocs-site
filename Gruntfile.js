module.exports = function(grunt){
	grunt.initConfig({
		replace:{
			renameclasses:{
				src: ['*.html','*.css'],
				overwrite: true,
				replacements:[
					{
						from: 'st.-patricks-blue',
						to:'st-patricks-blue'
					}
				]
			},
			addcss:{
				src: ['index.html'],
				overwrite: true,
				replacements:[
					{
						from: "<link rel=\"stylesheet\" id=\"ppstyle\" type=\"text\/css\" href=\"style.css\">",
						to: "<link rel=\"stylesheet\" id=\"ppstyle-amended\" type=\"text\/css\" href=\"style.css\">\n\t<link rel=\"stylesheet\" id=\"smcostyle\" type=\"text\/css\" href=\".\/css\/smco.css\">"
					}
				]
			},
			favicon:{
				overwrite: true,
				src:['*.html'],
				replacements:[{
					from: 'favicon.png',
					to: 'smcothrift.ico'
				}]
			}
		},
		watch:{
			options:{
				livereload: true
			},
			files: ['*.css','*.html','css/*.css'],
			tasks: ['replace:renameclasses', 'replace:addcss', 'replace:favicon']
		}
	});

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['replace:renameclasses', 'replace:addcss', 'replace:favicon']);
	grunt.registerTask('default', ['watch']);
}