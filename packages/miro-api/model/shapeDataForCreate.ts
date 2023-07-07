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
 * Contains shape item data, such as the content or the type of the shape.
 */
export class ShapeDataForCreate {
  /**
   * The text you want to display on the shape. <br>**Not supported for shapes:** <ul>   <li>flow_chart_or</li>   <li>flow_chart_summing_junction</li> </ul>
   */
  'content'?: string
  /**
   * Defines the geometric shape of the item when it is rendered on the board. <details>   <summary>Basic shapes</summary>   <ul>     <li>rectangle</li>     <li>round_rectangle</li>     <li>circle</li>     <li>triangle</li>     <li>rhombus</li>     <li>parallelogram</li>     <li>trapezoid</li>     <li>pentagon</li>     <li>hexagon</li>     <li>octagon</li>     <li>wedge_round_rectangle_callout</li>     <li>star</li>     <li>flow_chart_predefined_process</li>     <li>cloud</li>     <li>cross</li>     <li>can</li>     <li>right_arrow</li>     <li>left_arrow</li>     <li>left_right_arrow</li>     <li>left_brace</li>     <li>right_brace</li>   </ul> </details> <details>   <summary>Flowchart shapes</summary>   <ul>     <li>flow_chart_connector</li>     <li>flow_chart_magnetic_disk</li>     <li>flow_chart_input_output</li>     <li>flow_chart_decision</li>     <li>flow_chart_delay</li>     <li>flow_chart_display</li>     <li>flow_chart_document</li>     <li>flow_chart_magnetic_drum</li>     <li>flow_chart_internal_storage</li>     <li>flow_chart_manual_input</li>     <li>flow_chart_manual_operation</li>     <li>flow_chart_merge</li>     <li>flow_chart_multidocuments</li>     <li>flow_chart_note_curly_left</li>     <li>flow_chart_note_curly_right</li>     <li>flow_chart_note_square</li>     <li>flow_chart_offpage_connector</li>     <li>flow_chart_or</li>     <li>flow_chart_predefined_process_2</li>     <li>flow_chart_preparation</li>     <li>flow_chart_process</li>     <li>flow_chart_online_storage</li>     <li>flow_chart_summing_junction</li>     <li>flow_chart_terminator</li>   </ul> </details>
   */
  'shape'?: string = 'rectangle'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'content',
      baseName: 'content',
      type: 'string',
    },
    {
      name: 'shape',
      baseName: 'shape',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ShapeDataForCreate.attributeTypeMap
  }
}
