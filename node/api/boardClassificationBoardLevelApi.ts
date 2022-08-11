/**
 * Platform Tags
 * SCIM V1 API implemented by Miro
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import fetch, {Response} from 'node-fetch';
import * as http from 'http';

/* tslint:disable:no-unused-locals */
import { BoardDataClassificationLabel } from '../model/boardDataClassificationLabel';
import { DataClassificationLabelId } from '../model/dataClassificationLabelId';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface BoardClassificationBoardLevelApiMethods {
    enterpriseDataclassificationBoardGet(orgId: string, teamId: string, boardId: string, ): Promise<{ response: Response; body: BoardDataClassificationLabel;  }>
    enterpriseDataclassificationBoardSet(orgId: string, teamId: string, boardId: string, dataClassificationLabelId: DataClassificationLabelId, ): Promise<{ response: Response; body: BoardDataClassificationLabel;  }>
}

export function BoardClassificationBoardLevelApi (accessToken: string, basePath: string = defaultBasePath, logger?: (...thing: any) => void): BoardClassificationBoardLevelApiMethods {
    return {
        /**
         * Retrieves board classification for a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get board classification
         * @param orgId id of the organization
         * @param teamId id of the team
         * @param boardId Unique identifier of the board that you want to retrieve.
         */
        enterpriseDataclassificationBoardGet: async function (orgId: string, teamId: string, boardId: string, ) : Promise<{ response: Response; body: BoardDataClassificationLabel;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/boards/{board_id}/data-classification'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'orgId' is not null or undefined
            if (orgId === null || orgId === undefined) {
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseDataclassificationBoardGet.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseDataclassificationBoardGet.');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling enterpriseDataclassificationBoardGet.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "BoardDataClassificationLabel");

            return({response, body})
        },
        /**
         * Updates board classification for an existing board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Update board classification
         * @param orgId id of the organization
         * @param teamId id of the team
         * @param boardId Unique identifier of the board that you want to update.
         * @param dataClassificationLabelId 
         */
        enterpriseDataclassificationBoardSet: async function (orgId: string, teamId: string, boardId: string, dataClassificationLabelId: DataClassificationLabelId, ) : Promise<{ response: Response; body: BoardDataClassificationLabel;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/boards/{board_id}/data-classification'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
                .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'orgId' is not null or undefined
            if (orgId === null || orgId === undefined) {
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseDataclassificationBoardSet.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseDataclassificationBoardSet.');
            }

            // verify required parameter 'boardId' is not null or undefined
            if (boardId === null || boardId === undefined) {
                throw new Error('Required parameter boardId was null or undefined when calling enterpriseDataclassificationBoardSet.');
            }

            // verify required parameter 'dataClassificationLabelId' is not null or undefined
            if (dataClassificationLabelId === null || dataClassificationLabelId === undefined) {
                throw new Error('Required parameter dataClassificationLabelId was null or undefined when calling enterpriseDataclassificationBoardSet.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(dataClassificationLabelId, "DataClassificationLabelId"))
            }

            if (typeof logger === 'function') logger('FETCH', resource.toString(), options)

            const response = await fetch(resource, options)

            if (typeof logger === 'function') logger('RESPONSE', response)

            let bodyAsJson: unknown
            try {
                bodyAsJson = await response.json()
            } catch (err) {
                // Body doesn't have valid json
            }

            if (!response.ok) {
                throw new HttpError(response, bodyAsJson, response.status)
            }

            const body = ObjectSerializer.deserialize(bodyAsJson, "BoardDataClassificationLabel");

            return({response, body})
        },
    }
}
