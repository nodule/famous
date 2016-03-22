state = new famous.core.Surface({});

on.input.classes = function() {
  state.setClasses($.classes);
};

on.input.attributes = function() {
  state.setProperties($.attributes);
};

on.input.size = function() {
  state.setSize($.size);
};

on.input.content = function() {
  state.setContent($.content);
};


output = { surface: $.create(state) };
