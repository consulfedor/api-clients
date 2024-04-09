/**
 * Miro Developer Platform
 * <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.
 *
 * The version of the OpenAPI document: v2.0
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
export class StickyNoteStylePlatformBulkCreateOperationExperimentalRelease {
  /**
   * Fill color for the sticky note. Default: `light_yellow`.
   */
  'fillColor'?:
    | string
    | (typeof StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.FillColorEnum)[keyof typeof StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.FillColorEnum]
  /**
   * Defines how the sticky note text is horizontally aligned. Default: `center`.
   */
  'textAlign'?:
    | string
    | (typeof StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.TextAlignEnum)[keyof typeof StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.TextAlignEnum]
  /**
   * Defines how the sticky note text is vertically aligned. Default: `top`.
   */
  'textAlignVertical'?:
    | string
    | (typeof StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.TextAlignVerticalEnum)[keyof typeof StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.TextAlignVerticalEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.FillColorEnum',
    },
    {
      name: 'textAlign',
      baseName: 'textAlign',
      type: 'StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.TextAlignEnum',
    },
    {
      name: 'textAlignVertical',
      baseName: 'textAlignVertical',
      type: 'StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.TextAlignVerticalEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return StickyNoteStylePlatformBulkCreateOperationExperimentalRelease.attributeTypeMap
  }
}

export namespace StickyNoteStylePlatformBulkCreateOperationExperimentalRelease {
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