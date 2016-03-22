state = new famous.surfaces.ContainerSurface({});

on.input.classes = function() {
  state.setClasses($.classes);
};

on.input.attributes = function() {
  state.setProperties($.attributes);
};

on.input.size = function() {
  state.setSize($.size);
};


output = { surface: $.create(state) };
