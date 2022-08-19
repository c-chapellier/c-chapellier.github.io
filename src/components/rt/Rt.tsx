/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react'
import './Rt.scss'
import createModule from '../../webasm/rt.mjs'
import InputField from '../inputField/InputField'

interface RtProps {
  args: string
}

interface Vec3 {
  x: number
  y: number
  z: number
}

interface Sphere {
  center: Vec3
  color: Vec3
  radius: number
}

interface Scene {
  pixelHeight: number
  pixelWidth: number
  camera: Vec3
  nSpheres: number
  spheres: Sphere[]
}

const Rt: React.FC<RtProps> = (props) => {
  const [image, setImage] = React.useState('')
  const [scene, setScene] = React.useState<Scene>({
    pixelHeight: 400,
    pixelWidth: 400,
    camera: {
      x: 0,
      y: 0,
      z: -70
    },
    nSpheres: 1,
    spheres: [
      {
        center: { x: 0, y: 0, z: 0 },
        color: { x: 0.1, y: 0.3, z: 0.5 },
        radius: 10
      }
    ]
  })

  const updateScene = (keys: string, value: any): void => {
    const recursive = (content: any, keys: string[], depth: number): any => {
      const obj = content

      if (depth < keys.length - 1) {
        if (keys[depth][0] >= '0' && keys[depth][0] <= '9') {
          const i = parseInt(keys[depth])
          keys[depth] = keys[depth].substring(String(i).length + 1, keys[depth].length);
          (obj as any)[keys[depth]][i] = recursive((obj as any)[keys[depth]][i], keys, ++depth)
        } else {
          (obj as any)[keys[depth]] = recursive((obj as any)[keys[depth]], keys, ++depth)
        }
        return obj
      }

      if (keys[depth][0] >= '0' && keys[depth][0] <= '9') {
        const i = parseInt(keys[depth])
        keys[depth] = keys[depth].substring(String(i).length + 1, keys[depth].length);
        (obj as any)[keys[depth]][i] = value
      } else {
        (obj as any)[keys[depth]] = value
      }

      return obj
    }

    const obj: Scene = recursive(scene, keys.split('.'), 0)
    setScene({ ...obj })
  }

  createModule().then((Module: any) => {
    const api = {
      create_buffer: Module.cwrap('create_buffer', 'number', ['number'])
      // destroy_buffer: Module.cwrap('destroy_buffer', '', ['number'])
    }

    const utf8Encode = new TextEncoder()
    const a = utf8Encode.encode(JSON.stringify(scene))

    const inputPtr = api.create_buffer(a.length)
    Module.HEAPU8.set(a, inputPtr)

    const outputPtr = Module._rt(inputPtr)

    const base64Size = ((26 + (scene.pixelWidth * scene.pixelHeight * 3)) * 4 / 3) + 2
    const myArr = new Uint8Array(base64Size)
    myArr.set(Module.HEAPU8.subarray(outputPtr, Number(outputPtr) + base64Size))

    const utf8Decode = new TextDecoder()
    const msg = utf8Decode.decode(myArr)

    setImage(msg)

    // api.destroy_buffer(p)
  })

  return (
    <div className='rt'>
      <img src={`data:image/bmp;base64,${image}`} />
      <form className='inputScene'>
        <InputField name='pixelHeight' value={scene.pixelHeight} setValue={(value: number) => { updateScene('pixelHeight', value) }} />
        <InputField name='pixelWidth' value={scene.pixelWidth} setValue={(value: number) => { updateScene('pixelWidth', value) }} />

        <div className='inputVec3'>
          <InputField name='camera.x' value={scene.camera.x} setValue={(value: number) => { updateScene('camera.x', value) }} />
          <InputField name='camera.y' value={scene.camera.y} setValue={(value: number) => { updateScene('camera.y', value) }} />
          <InputField name='camera.z' value={scene.camera.z} setValue={(value: number) => { updateScene('camera.z', value) }} />
        </div>

        <div className='inputSphere'>
          <InputField name='0 spheres.radius' value={scene.spheres[0].radius} setValue={(value: number) => { updateScene('0 spheres.radius', value) }} />

          <div className='inputVec3'>
            <InputField name='0 spheres.center.x' value={scene.spheres[0].center.x} setValue={(value: number) => { updateScene('0 spheres.center.x', value) }} />
            <InputField name='0 spheres.center.y' value={scene.spheres[0].center.y} setValue={(value: number) => { updateScene('0 spheres.center.y', value) }} />
            <InputField name='0 spheres.center.z' value={scene.spheres[0].center.z} setValue={(value: number) => { updateScene('0 spheres.center.z', value) }} />
          </div>

          <div className='inputVec3'>
            <InputField name='0 spheres.color.x' value={scene.spheres[0].color.x * 255} setValue={(value: number) => { updateScene('0 spheres.color.x', value / 255) }} />
            <InputField name='0 spheres.color.y' value={scene.spheres[0].color.y * 255} setValue={(value: number) => { updateScene('0 spheres.color.y', value / 255) }} />
            <InputField name='0 spheres.color.z' value={scene.spheres[0].color.z * 255} setValue={(value: number) => { updateScene('0 spheres.color.z', value / 255) }} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Rt
