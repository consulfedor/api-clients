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

/**
 * @internal
 * Contains information about the parent this item must be attached to. A maximum of 1000 items can be attached to a frame. Passing `null` for `parent.id` directly attaches an item to the canvas.
 */
export class Parent {
  'id'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Parent.attributeTypeMap
  }
}
