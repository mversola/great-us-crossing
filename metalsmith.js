var metalsmith = require('metalsmith');
var Handlebars   = require('handlebars');
var _            = require('lodash');
var fs           = require('fs');
var permalinks   = require('metalsmith-permalinks');
var partial = require('metalsmith-partial');
var templates = require('metalsmith-templates');
var markdown     = require('metalsmith-markdown')
 
// Helper to add logical operaters to the if condition
  Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
      case '==':
        return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  });

  // Register all partials in `template/partials`
  var partialFiles = []
  try {
    partialFiles = fs.readdirSync('templates/partials')
  } catch (e) {}
  _.each(partialFiles,function(file) {
    var name = file.split(".")[0];
    var contents = fs.readFileSync(__dirname+"/templates/partials/"+file).toString();
    Handlebars.registerPartial(name, contents);
  });
 


metalsmith(__dirname)
  .source('./src')
  .destination('./dist')
  .use(markdown())
  .use(permalinks({
      pattern: ':title',
      relative: false
  }))
  .use(partial({
    directory: 'templates/partials', 
    engine: 'handlebars'
  }))
  .use(templates({
    engine: 'handlebars',
    directory: './templates'
  }))
  .build(function(err, files) {
  		if (err) {
			console.log(err);
		} else {
			console.log("Success!");
		} // end if
  });
  
