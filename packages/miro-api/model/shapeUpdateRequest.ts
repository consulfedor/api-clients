/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {Geometry} from './geometry'
import {Parent} from './parent'
import {PositionChange} from './positionChange'
import {ShapeDataForUpdate} from './shapeDataForUpdate'
import {ShapeStyleForUpdate} from './shapeStyleForUpdate'

export class ShapeUpdateRequest {
  'data'?: ShapeDataForUpdate
  'style'?: ShapeStyleForUpdate
  'position'?: PositionChange
  'geometry'?: Geometry
  'parent'?: Parent

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'ShapeDataForUpdate',
    },
    {
      name: 'style',
      baseName: 'style',
      type: 'ShapeStyleForUpdate',
    },
    {
      name: 'position',
      baseName: 'position',
      type: 'PositionChange',
    },
    {
      name: 'geometry',
      baseName: 'geometry',
      type: 'Geometry',
    },
    {
      name: 'parent',
      baseName: 'parent',
      type: 'Parent',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ShapeUpdateRequest.attributeTypeMap
  }
}
