state = new video_surface(input.options);

on.input.video_url = function() {
  state.setContent(data);
};

output = { surface: state };
