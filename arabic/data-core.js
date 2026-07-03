/* Mizan Arabic — curriculum registry.
   Tracks are defined across data-*.js files and assembled here. */
window.MIZAN = { tracks: [] };

function defineTrack(track) {
  track.units = track.units || [];
  window.MIZAN.tracks.push(track);
}

function addUnits(trackId, units) {
  const t = window.MIZAN.tracks.find(x => x.id === trackId);
  if (t) t.units.push(...units);
}
