/**
 *
 * Ok, for this to work all nodes must be started.
 * And they *must* be started in order of wireing.
 *
 * Which would then be the setup/start phase.
 *
 * Naturally you'll have to add the Engine node somewhere.
 * And wire things together, however the engine internaly
 *
 * expects to be the first to startup
 *
 * This can be solved by giving each node the change to do
 * something during startup, hence on.start()
 *
 * The problem is, I start the engine through an async port.
 * Which is much later then this ImageSurface creation was.
 *
 * Another option is to just make sure the engine also
 * initializes it's engine earlier.
 *
 * Which could fail if this node still is created first.
 * Which it probably isn't by luck
 *
 */
state = new famous.surfaces.ImageSurface({});
on.start = function() {
  output( { surface: $.create(state) } );
};
on.input.attr = function() {
  state.setProperties($.attr);
};

on.input.classes = function() {
  state.setClasses($.classes);
};

on.input.size = function() {
  state.setSize($.size);
};

on.input.image_url = function() {
  state.setContent($.image_url);
};

output = { surface: $.create(state) };
