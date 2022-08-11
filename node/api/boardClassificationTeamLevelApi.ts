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
import { DataClassificationTeamSettings } from '../model/dataClassificationTeamSettings';
import { UpdateBoardsDataClassificationLabel } from '../model/updateBoardsDataClassificationLabel';
import { UpdateBoardsDataClassificationLabelRequest } from '../model/updateBoardsDataClassificationLabelRequest';
import { UpdateTeamSettingsRequest } from '../model/updateTeamSettingsRequest';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface BoardClassificationTeamLevelApiMethods {
    enterpriseDataclassificationTeamBoardsBulk(orgId: string, teamId: string, updateBoardsDataClassificationLabelRequest: UpdateBoardsDataClassificationLabelRequest, ): Promise<{ response: Response; body: UpdateBoardsDataClassificationLabel;  }>
    enterpriseDataclassificationTeamSettingsGet(orgId: string, teamId: string, ): Promise<{ response: Response; body: DataClassificationTeamSettings;  }>
    enterpriseDataclassificationTeamSettingsSet(orgId: string, teamId: string, updateTeamSettingsRequest: UpdateTeamSettingsRequest, ): Promise<{ response: Response; body: DataClassificationTeamSettings;  }>
}

export function BoardClassificationTeamLevelApi (accessToken: string, basePath: string = defaultBasePath, logger?: (...thing: any) => void): BoardClassificationTeamLevelApiMethods {
    return {
        /**
         * Updates board classification for not-classified only or all boards in an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Bulk update boards classification
         * @param orgId id of the organization
         * @param teamId id of the team
         * @param updateBoardsDataClassificationLabelRequest 
         */
        enterpriseDataclassificationTeamBoardsBulk: async function (orgId: string, teamId: string, updateBoardsDataClassificationLabelRequest: UpdateBoardsDataClassificationLabelRequest, ) : Promise<{ response: Response; body: UpdateBoardsDataClassificationLabel;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/data-classification'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseDataclassificationTeamBoardsBulk.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseDataclassificationTeamBoardsBulk.');
            }

            // verify required parameter 'updateBoardsDataClassificationLabelRequest' is not null or undefined
            if (updateBoardsDataClassificationLabelRequest === null || updateBoardsDataClassificationLabelRequest === undefined) {
                throw new Error('Required parameter updateBoardsDataClassificationLabelRequest was null or undefined when calling enterpriseDataclassificationTeamBoardsBulk.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(updateBoardsDataClassificationLabelRequest, "UpdateBoardsDataClassificationLabelRequest"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "UpdateBoardsDataClassificationLabel");

            return({response, body})
        },
        /**
         * Retrieves board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get team settings
         * @param orgId id of the organization
         * @param teamId id of the team
         */
        enterpriseDataclassificationTeamSettingsGet: async function (orgId: string, teamId: string, ) : Promise<{ response: Response; body: DataClassificationTeamSettings;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/data-classification-settings'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseDataclassificationTeamSettingsGet.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseDataclassificationTeamSettingsGet.');
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "DataClassificationTeamSettings");

            return({response, body})
        },
        /**
         * Updates board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Update team settings
         * @param orgId id of the organization
         * @param teamId id of the team
         * @param updateTeamSettingsRequest 
         */
        enterpriseDataclassificationTeamSettingsSet: async function (orgId: string, teamId: string, updateTeamSettingsRequest: UpdateTeamSettingsRequest, ) : Promise<{ response: Response; body: DataClassificationTeamSettings;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/data-classification-settings'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseDataclassificationTeamSettingsSet.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseDataclassificationTeamSettingsSet.');
            }

            // verify required parameter 'updateTeamSettingsRequest' is not null or undefined
            if (updateTeamSettingsRequest === null || updateTeamSettingsRequest === undefined) {
                throw new Error('Required parameter updateTeamSettingsRequest was null or undefined when calling enterpriseDataclassificationTeamSettingsSet.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(updateTeamSettingsRequest, "UpdateTeamSettingsRequest"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "DataClassificationTeamSettings");

            return({response, body})
        },
    }
}
