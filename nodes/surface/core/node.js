state = new famous.core.Surface({});

on.input.classes = function() {
  state.setClasses(data);
};

on.input.attributes = function() {
  state.setProperties(data);
};

on.input.size = function() {
  state.setSize(data);
};

on.input.content = function() {
  state.setContent(data);
};


output = { surface: state };
