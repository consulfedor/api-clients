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
 * Contains information about the style of a sticky note item, such as the fill color or text alignment.
 */
export class StickyNoteStylePlatform {
  /**
   * Fill color for the sticky note. Default: `light_yellow`.
   */
  'fillColor'?:
    | string
    | (typeof StickyNoteStylePlatform.FillColorEnum)[keyof typeof StickyNoteStylePlatform.FillColorEnum]
  /**
   * Defines how the sticky note text is horizontally aligned. Default: `center`.
   */
  'textAlign'?:
    | string
    | (typeof StickyNoteStylePlatform.TextAlignEnum)[keyof typeof StickyNoteStylePlatform.TextAlignEnum]
  /**
   * Defines how the sticky note text is vertically aligned. Default: `top`.
   */
  'textAlignVertical'?:
    | string
    | (typeof StickyNoteStylePlatform.TextAlignVerticalEnum)[keyof typeof StickyNoteStylePlatform.TextAlignVerticalEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'StickyNoteStylePlatform.FillColorEnum',
    },
    {
      name: 'textAlign',
      baseName: 'textAlign',
      type: 'StickyNoteStylePlatform.TextAlignEnum',
    },
    {
      name: 'textAlignVertical',
      baseName: 'textAlignVertical',
      type: 'StickyNoteStylePlatform.TextAlignVerticalEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return StickyNoteStylePlatform.attributeTypeMap
  }
}

export namespace StickyNoteStylePlatform {
  export const FillColorEnum = {
    Gray: 'gray',
    LightYellow: 'light_yellow',
    Yellow: 'yellow',
    Orange: 'orange',
    LightGreen: 'light_green',
    Green: 'green',
    DarkGreen: 'dark_green',
    Cyan: 'cyan',
    LightPink: 'light_pink',
    Pink: 'pink',
    Violet: 'violet',
    Red: 'red',
    LightBlue: 'light_blue',
    Blue: 'blue',
    DarkBlue: 'dark_blue',
    Black: 'black',
  } as const
  export const TextAlignEnum = {
    Left: 'left',
    Right: 'right',
    Center: 'center',
  } as const
  export const TextAlignVerticalEnum = {
    Top: 'top',
    Middle: 'middle',
    Bottom: 'bottom',
  } as const
}