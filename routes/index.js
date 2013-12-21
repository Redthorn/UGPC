
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Form' });
};

exports.hashlist = function(req, res){
  res.render('hashlist', {title: 'Hashlist'});
};

exports.selection = function(req, res){
  res.render('selection', {title: 'Selection'});
};