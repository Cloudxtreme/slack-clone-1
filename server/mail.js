Meteor.startup(function () {
  smtp = {
    username: 'me@dallaskoncir.com',
    password: 'JdNOuKT4pC_I6xi8GwYcMQ',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});