state = new image_surface({});

on.input.properties = function() {
  state.setProperties(data);
};

on.input.classes = function() {
  state.setClasses(data);
};

on.input.size = function() {
  state.setSize(data);
};

on.input.image_url = function() {
  state.setContent(data);
};

output = { surface: state };
