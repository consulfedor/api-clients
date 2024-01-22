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
 * Contains information about the embed URL.
 */
export class EmbedUrlDataPlatform {
  /**
   * Defines how the content in the embed item is displayed on the board. `inline`: The embedded content is displayed directly on the board. `modal`: The embedded content is displayed inside a modal overlay on the board.
   */
  'mode'?: string | (typeof EmbedUrlDataPlatform.ModeEnum)[keyof typeof EmbedUrlDataPlatform.ModeEnum]
  /**
   * URL of the image to be used as the preview image for the embedded item.
   */
  'previewUrl'?: string
  /**
   * A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.
   */
  'url': string = 'https://www.youtube.com/watch?v=HlVSNEiFCBk'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'mode',
      baseName: 'mode',
      type: 'EmbedUrlDataPlatform.ModeEnum',
    },
    {
      name: 'previewUrl',
      baseName: 'previewUrl',
      type: 'string',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return EmbedUrlDataPlatform.attributeTypeMap
  }
}

export namespace EmbedUrlDataPlatform {
  export const ModeEnum = {
    Inline: 'inline',
    Modal: 'modal',
  } as const
}