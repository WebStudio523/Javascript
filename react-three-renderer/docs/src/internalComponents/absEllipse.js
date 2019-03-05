import DocInfo from '../DocInfo';

class absEllipse extends DocInfo {
  getIntro() {
    return 'Calls [THREE.Path#absEllipse]' +
      '(https://threejs.org/docs/#api/extras/core/Path.absellipse) on the parent shape';
  }

  getDescription() {
    return '';
  }

  getAttributesText() {
    return {
      x: 'The absolute center x of the ellipse',
      y: 'The absolute center y of the ellipse',
      xRadius: 'The radius of the ellipse in the x axis',
      yRadius: 'The radius of the ellipse in the y axis',
      startAngle: 'The start angle in radians',
      endAngle: 'The end angle in radians',
      clockwise: 'Sweep the ellipse clockwise.',
      rotation: 'The rotation angle of the ellipse in radians, counterclockwise from the' +
      ' positive X axis.',
    };
  }
}

module.exports = absEllipse;
