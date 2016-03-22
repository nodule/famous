state = new famous.surfaces.VideoSurface({});

on.input.size = function() {
  state.setSize($.size);
};

on.input.classes = function() {
  state.setClasses($.classes);
};

on.input.attributes = function() {
  state.setAttributes($.attributes);
};

on.input.autoplay = function() {
  state.setAutoplay($.autoplay);
};

on.input.video_url = function() {
  state.setContent($.video_url);
};

output = { surface: $.create(state) };
