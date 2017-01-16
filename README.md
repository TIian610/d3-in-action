## Synopsis

D3.js in action
**ELIJAH MEEKS, 2015**



## Motivation
Learn D3.


## Installation

**1. Insstall Node and npm** 
	
	http://nodejs.org
	$ which node
	/usr/local/bin/node

	$ node test.js

	$ which npm
	which npm
	/usr/local/bin/npm

	$ npm list

	$ npm init
	(create package.json)

	$ node es6/ch01-magic-run.js

	# Remove node_modules
	rm -fr node_modules

	# Reinstall packages
	npm i
	
	$ npm init (package.json is created)
	$ npm install (node modules are created)

# Remove node_modules

	rm -fr node_modules

# Reinstall packages
	
	npm i


# Install dependencies
	
	$ npm install name_of_the package (will install the dependency, but won’t store it into package.json)
	$ npm install --save name_of_the package (saves the dependency into the dependencies section, so it will be always downloaded)
	$ npm install --save-dev name_of_the package (will save the dependency into the devDependencies section. )

**2. Install Gulp**
	
	$ npm install --save-dev gulp

    $ npm install --save-dev gulp-sass

**3.a.  Setting Up Our Gulpfile & Running Gulp**
	
	Lint our JavaScript. (Seriously. Do it.)
	Compile our Sass files. (Browsers can’t read that stuff...)
	Concatenate our JavaScript. (Reduce HTTP Requests!)
	Minify and rename concatenated files. (Every little bit counts!)
	
	$ gulp -version
	$ npm install --save-dev gulp
	$ gulp

	All in one installation:
	$ npm install jshint gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename --save-dev

    Create .jshintrc 

**3-b. Install gulp-eslint (instead of jshint)**

	$ ./node_modules/.bin/eslint -v
	$ npm install gulp-eslint

	Create .eslintrc (see ls -a)

	$ ./node_modules/.bin/eslint ./es6/test.js

	$ npm run lint
	$ gulp


**4. Create Our gulpfile**

	https://travismaynard.com/writing/getting-started-with-gulp


**5. SASS: Create source Maps**

	https://www.sitepoint.com/simple-gulpy-workflow-sass/

	$ npm install gulp-sourcemaps --save-dev


**6. Install autoprefixer (gulp-sass) and Sass Doc**
 
	$ npm install gulp-autoprefixer --save-dev
	$npm install sassdoc --save-dev


**7. Install Browser sync (server)**

	$ npm install browser-sync --save-dev


**8. Install Modernizr**

	$ npm install --save-dev gulp-modernizr

	In Gulp:

	var modernizr = require('gulp-modernizr');

	gulp.task('modernizr', function() {
		gulp.src('./js/*.js')
		.pipe(modernizr())
		.pipe(gulp.dest("build/"))
	});


**9. Git Repo**

	$ git init
	$ git status
	$ git remote add origin https://github.com/<user>/<repository>.git
	$ git remote -v
	$ git pull origin master (copy files from remote to local)
	$ git add .
	$ git commit -m "First commit"
	$ git remote add origin https://github.com/user/repo.git
	$ git remote -v


**10. Install Babel**

	$ npm install --save-dev babel-cli
	$ npm install babel-preset-es2015 --save-dev
	$ npm install --save-dev babel-polyfill

	$ npm run build

	package.json:
	"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "build": "babel es6 -d dist",
	    "babel-version": "babel --version"
	  }

	Instead of running Babel directly from the command line we’re going to put our commands in npm scripts which will use our local version.
	$ npm run build
	$ npm run babel-version

	Alternatively, you can reference the babel cli inside of node_modules:
	$ ./node_modules/.bin/babel es6 -d dist


**11. Create .babelrc (not for gulp-babel)**

	{
	  "presets": ["es2015"]
	}


**12. Gulp-babel**

	$ npm install --save-dev gulp-babel babel-preset-es2015

	gulpfile.js
	const babel = require('gulp-babel');
 
	gulp.task('default', () => {
		return gulp.src('src/app.js')
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulp.dest('dist'));
	});


	$ gulp



**12. Open files on TextEdit**

	$ open -a TextEdit filename 


**13. Install D3**

    $ npm install d3



**14. Installl Compass**

    $ compass -v
    $ gem uninstall sass && gem uninstall compass
    $ gem install sass
    $ gem install compass --pre
    $ npm install gulp-compass --save-dev



## License

MIT



