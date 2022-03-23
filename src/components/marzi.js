import { Marzipano } from "marzipano";

const MarzipanoImage = () => {
  var viewer = new Marzipano.Viewer(document.getElementById("pano"));

  // Create source.
  var source = Marzipano.ImageUrlSource.fromString(
    "https://cdn-std.dprcdn.net/files/acc_1554/2lxD3E"
  );

  // Create geometry.
  var geometry = new Marzipano.EquirectGeometry([
    {
      width: 4096,
    },
  ]);

  // Create view.
  var limiter = Marzipano.RectilinearView.limit.traditional(
    1024,
    (100 * Math.PI) / 180
  );
  var view = new Marzipano.RectilinearView(
    {
      yaw: Math.PI,
    },
    limiter
  );

  // Create scene.
  var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true,
  });

  // Display scene.
  scene.switchTo();

  return (
    <div>
      <div id="pano"></div>
    </div>
  );
};

export default MarzipanoImage;
