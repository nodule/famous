state = new image_surface(input.options);

on.input.image_url = function() {
  state.setContent(data);
};

output = { surface: state };
