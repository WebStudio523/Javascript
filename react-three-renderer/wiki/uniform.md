> [Wiki](Home) » [[Internal Components]] » [[Materials]] » [[shaderMaterial]] » [[uniforms]] » **uniform**

# uniform

A single uniform value for a shader material.

See [THREE.ShaderMaterial](https://threejs.org/docs/#api/materials/ShaderMaterial).

Any modifications to uniforms will result in the recompilation of the shader.

## Attributes

### type
``` string ``` *``` required ```*: See [THREE.ShaderMaterial](https://threejs.org/docs/#api/materials/ShaderMaterial) for information about uniform types.

### name
``` string ``` *``` required ```*: The name of the uniform. This will act as the key in the [uniforms](https://threejs.org/docs/#api/materials/ShaderMaterial.uniforms) dictionary.

### value
``` any ```: See [THREE.ShaderMaterial](https://threejs.org/docs/#api/materials/ShaderMaterial) for information about uniform values.

**Default**: `null`

===

|**[View Source](../blob/master/src/lib/descriptors/Material/UniformDescriptor.js)**|
 ---|
