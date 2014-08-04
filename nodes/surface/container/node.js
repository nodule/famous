state = new container_surface({});

on.input.classes = function() {
  state.setClasses(data);
};

on.input.attributes = function() {
  state.setProperties(data);
};

on.input.size = function() {
  state.setSize(data);
};


output = { surface: state };
