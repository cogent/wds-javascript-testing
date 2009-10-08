console = {
  info : function() {
    print('[I] ' + arguments[0]);
  }
};

(function() {
  function suite(location) {
    var required = {};

    var bootstrap = function() {
      load('./js/rhino/env.rhino.js');
      window.location = location;
      load('./js/rhino/jquery.js');
    }

    var require = function(js_path) {
      if(undefined === required[js_path]) {
        // print('require (Y): ' + js_path);

        load(js_path);
        required[js_path] = true;

        return this;
      }
      else {
        // print('require (N): ' + js_path);
      }
    };

    var setup = function() {
      $('head script').each(function() {
        require(['./spec/fixtures/', this.src].join(''));
      });

      load('./js/jquery.ajax_queue.js');

      $.ajaxSetup({
        async : false // env.js appears to be incapable of more than 2 async requests
      });
    }

    var execute = function() {
      $(document).trigger('screwunit.execute');
    }

    bootstrap();
    setup();

    (function($) {
      $(Screw).bind('after', function() {
        quit();
      });
    })(jQuery);

    execute();

    return {
      require : require
    }
  };

  suite('http://localhost:4567/');
})();
