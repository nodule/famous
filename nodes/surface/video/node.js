state = new video_surface({});

on.input.size = function() {
  state.setSize(data);
};

on.input.classes = function() {
  state.setClasses(data);
};

on.input.attributes = function() {
  state.setAttributes(data);
};

on.input.autoplay = function() {
  state.setAutoplay(data);
};

on.input.video_url = function() {
  state.setContent(data);
};

output = { surface: state };
