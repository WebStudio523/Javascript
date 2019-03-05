> [Wiki](Home) » [[Internal Components]] » [[Textures]] » **texture**

# texture

Creates a [THREE.Texture](https://threejs.org/docs/#api/textures/Texture)

## Attributes

### url
``` string ``` *``` required ```*: The URL to load the texture from.

Currently textures can be loaded from URLs only.

Used as the first parameter for [TextureLoader.load](https://threejs.org/docs/#api/loaders/TextureLoader.load)

**Default**: `''`

### slot
``` one of ['map', 'specularMap', 'lightMap', 'aoMap', 'emissiveMap', 'bumpMap', 'normalMap', 'displacementMap', 'roughnessMap', 'metalnessMap', 'alphaMap', 'envMap'] ```

**Default**: `'map'`

### repeat
``` THREE.Vector2 ```: Sets the [repeat property of the Texture](https://threejs.org/docs/#api/textures/Texture.repeat).

Default: `(1, 1)`.

**Default**: `new THREE.Vector2(1, 1)`

### offset
``` THREE.Vector2 ```: Sets the [offset property of the Texture](https://threejs.org/docs/#api/textures/Texture.offset).

Default: `(0, 0)`.

**Default**: `new THREE.Vector2(0, 0)`

### wrapS
``` one of [THREE.RepeatWrapping, THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping] ```

**Default**: `THREE.ClampToEdgeWrapping`

### wrapT
``` one of [THREE.RepeatWrapping, THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping] ```

**Default**: `THREE.ClampToEdgeWrapping`

### anisotropy
``` number ```

**Default**: `1`

### crossOrigin
``` string ```: Sets the [crossOrigin property of the TextureLoader](https://threejs.org/docs/#api/loaders/TextureLoader.crossOrigin).

### onLoad
``` function ```: Callback to be called when the texture was loaded.

### onProgress
``` function ```: Callback to be called while the texture is loading.

### onError
``` function ```: Callback to be called when the texture was not loaded.

### magFilter
``` one of [THREE.LinearFilter, THREE.NearestFilter] ```

**Default**: `THREE.LinearFilter`

### minFilter
``` one of [THREE.LinearMipMapLinearFilter, THREE.NearestFilter, THREE.NearestMipMapNearestFilter, THREE.NearestMipMapLinearFilter, THREE.LinearFilter, THREE.LinearMipMapNearestFilter] ```

**Default**: `THREE.LinearMipMapLinearFilter`

### resourceId
``` string ```: The resource id of this object, only used if it is placed into [[resources]].

**Default**: `''`

## Notes:

If you would like to assign this texture to a material, 
you can do this by declaring the texture within:

```jsx
<...material>
  <texture url={...} .../>
</...material>
```

This component can be added into [&lt;resources/&gt;](resources)! See [[Resource Types]] for more information.

===

|**[View Source](../blob/master/src/lib/descriptors/Material/TextureDescriptor.js)**|
 ---|
