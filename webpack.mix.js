const mix = require('laravel-mix');

mix.browserSync('git.localhost')
	.setPublicPath('test')
	.setResourceRoot('/test/')
	// .webpackConfig({ 'devtool': 'inline-source-map' })
	.webpackConfig({ 'devtool': 'source-maps' })
	.js('test/main.js', 'build.js')	
	.disableSuccessNotifications()
	.disableNotifications()
	.browserSync({
		proxy: 'git.localhost',
		files: ['test/**/*']
	});