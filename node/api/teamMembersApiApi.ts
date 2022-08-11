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
import { InvitationResult } from '../model/invitationResult';
import { TeamMember } from '../model/teamMember';
import { TeamMemberChanges } from '../model/teamMemberChanges';
import { TeamMemberInvite } from '../model/teamMemberInvite';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface TeamMembersApiApiMethods {
    enterpriseDeleteTeamMember(orgId: string, teamId: string, memberId: string, ): Promise<{ response: Response; body: object;  }>
    enterpriseGetTeamMember(orgId: string, teamId: string, memberId: string, ): Promise<{ response: Response; body: TeamMember;  }>
    enterpriseGetTeamMembers(orgId: string, teamId: string, limit?: number, cursor?: string, filterQuery?: string, ): Promise<{ response: Response; body: Array<TeamMember>;  }>
    enterpriseInviteTeamMember(orgId: string, teamId: string, teamMemberInvite: TeamMemberInvite, ): Promise<{ response: Response; body: InvitationResult;  }>
    enterpriseUpdateTeamMember(orgId: string, teamId: string, memberId: string, teamMemberChanges: TeamMemberChanges, ): Promise<{ response: Response; body: TeamMember;  }>
}

export function TeamMembersApiApi (accessToken: string, basePath: string = defaultBasePath, logger?: (...thing: any) => void): TeamMembersApiApiMethods {
    return {
        /**
         * Deletes team member from team by id.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Delete team member from team
         * @param orgId The id of an Organization.
         * @param teamId The id of a Team.
         * @param memberId The id of a Team member.
         */
        enterpriseDeleteTeamMember: async function (orgId: string, teamId: string, memberId: string, ) : Promise<{ response: Response; body: object;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
                .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseDeleteTeamMember.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseDeleteTeamMember.');
            }

            // verify required parameter 'memberId' is not null or undefined
            if (memberId === null || memberId === undefined) {
                throw new Error('Required parameter memberId was null or undefined when calling enterpriseDeleteTeamMember.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'DELETE',
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "object");

            return({response, body})
        },
        /**
         * Retrieves team member by id.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get team member
         * @param orgId The id of an Organization.
         * @param teamId The id of a Team.
         * @param memberId The id of a Team member.
         */
        enterpriseGetTeamMember: async function (orgId: string, teamId: string, memberId: string, ) : Promise<{ response: Response; body: TeamMember;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
                .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetTeamMember.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeamMember.');
            }

            // verify required parameter 'memberId' is not null or undefined
            if (memberId === null || memberId === undefined) {
                throw new Error('Required parameter memberId was null or undefined when calling enterpriseGetTeamMember.');
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "TeamMember");

            return({response, body})
        },
        /**
         * Retrieves team members by cursor.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary List team members
         * @param orgId The id of an Organization.
         * @param teamId The id of a Team.
         * @param limit Limit for the number of team members returned in the result list.
         * @param cursor The ID of the team member used as the reference for pagination. To retrieve the first portion of the collection don\&#39;t pass a cursor value. To retrieve the next portion of the collection, set the &#x60;cursor&#x60; parameter value to the ID of the last team member you received in the response of the previous request.
         * @param filterQuery Filtering query
         */
        enterpriseGetTeamMembers: async function (orgId: string, teamId: string, limit?: number, cursor?: string, filterQuery?: string, ) : Promise<{ response: Response; body: Array<TeamMember>;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members'
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetTeamMembers.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeamMembers.');
            }

            if (limit !== undefined) {
                localVarQueryParameters.append('limit', ObjectSerializer.serialize(limit, "number"));
            }

            if (cursor !== undefined) {
                localVarQueryParameters.append('cursor', ObjectSerializer.serialize(cursor, "string"));
            }

            if (filterQuery !== undefined) {
                localVarQueryParameters.append('filterQuery', ObjectSerializer.serialize(filterQuery, "string"));
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "Array<TeamMember>");

            return({response, body})
        },
        /**
         * Invites a new member to an existing team.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Invite team members
         * @param orgId The id of an Organization.
         * @param teamId The id of a Team.
         * @param teamMemberInvite 
         */
        enterpriseInviteTeamMember: async function (orgId: string, teamId: string, teamMemberInvite: TeamMemberInvite, ) : Promise<{ response: Response; body: InvitationResult;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members'
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseInviteTeamMember.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseInviteTeamMember.');
            }

            // verify required parameter 'teamMemberInvite' is not null or undefined
            if (teamMemberInvite === null || teamMemberInvite === undefined) {
                throw new Error('Required parameter teamMemberInvite was null or undefined when calling enterpriseInviteTeamMember.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(teamMemberInvite, "TeamMemberInvite"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "InvitationResult");

            return({response, body})
        },
        /**
         * Updates team member role in team by id.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Update team member
         * @param orgId The id of an Organization.
         * @param teamId The id of a Team.
         * @param memberId The id of a Team member.
         * @param teamMemberChanges 
         */
        enterpriseUpdateTeamMember: async function (orgId: string, teamId: string, memberId: string, teamMemberChanges: TeamMemberChanges, ) : Promise<{ response: Response; body: TeamMember;  }> {
            const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
                .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
                .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseUpdateTeamMember.');
            }

            // verify required parameter 'teamId' is not null or undefined
            if (teamId === null || teamId === undefined) {
                throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateTeamMember.');
            }

            // verify required parameter 'memberId' is not null or undefined
            if (memberId === null || memberId === undefined) {
                throw new Error('Required parameter memberId was null or undefined when calling enterpriseUpdateTeamMember.');
            }

            // verify required parameter 'teamMemberChanges' is not null or undefined
            if (teamMemberChanges === null || teamMemberChanges === undefined) {
                throw new Error('Required parameter teamMemberChanges was null or undefined when calling enterpriseUpdateTeamMember.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(teamMemberChanges, "TeamMemberChanges"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "TeamMember");

            return({response, body})
        },
    }
}
