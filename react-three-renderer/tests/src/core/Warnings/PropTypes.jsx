import React from 'react';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

module.exports = (type) => {
  const { testDiv, React3, mockConsole } = require('../../utils/initContainer')(type);

  it('Shows helpful warnings with correct class names', () => {
    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene
        position={new THREE.Vector2()}
        rotation={new THREE.Vector3()}
        quaternion={new THREE.Euler()}

        fog="0xffffff"

        renderOrder="five"
        name={9}
      />
    </React3>, testDiv);

    mockConsole.expectDev('Warning: Failed prop type: Invalid prop `name` of type `number`' +
      ' supplied to `scene`, expected `string`.\n' +
      '    in scene\n' +
      '    in react3');
    mockConsole.expectDev('Warning: Failed prop type: Invalid prop `position`' +
      ' of type `Vector2`' +
      ' supplied to `scene`, expected instance of `Vector3`.\n' +
      '    in scene\n' +
      '    in react3');
    mockConsole.expectDev('Warning: Failed prop type: Invalid prop `rotation`' +
      ' of type `Vector3`' +
      ' supplied to `scene`, expected instance of `Euler`.\n' +
      '    in scene\n' +
      '    in react3');
    mockConsole.expectDev('Warning: Failed prop type: Invalid prop `quaternion`' +
      ' of type `Euler`' +
      ' supplied to `scene`, expected instance of `Quaternion`.\n' +
      '    in scene\n' +
      '    in react3');
    mockConsole.expectDev('Warning: Failed prop type: Invalid prop `renderOrder` of type `string`' +
      ' supplied to `scene`, expected `number`.\n' +
      '    in scene\n' +
      '    in react3');
    mockConsole.expectDev('Warning: Failed prop type: Invalid prop `fog` supplied to `scene`.\n' +
      '    in scene\n' +
      '    in react3');

    // should whine but still should work!
    mockConsole.expect('THREE.Euler: .setFromRotationMatrix() given unsupported order: undefined');
    mockConsole.expectThreeLog();
  });

  it('Does not show warnings when proper types are used', () => {
    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene
        position={new THREE.Vector3()}
        rotation={new THREE.Euler()}
        quaternion={new THREE.Quaternion()}
      />
    </React3>, testDiv);

    mockConsole.expectThreeLog();
  });
};
