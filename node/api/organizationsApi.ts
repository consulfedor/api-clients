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
import { EnterpriseGetOrganizationMembers200Response } from '../model/enterpriseGetOrganizationMembers200Response';
import { Organization } from '../model/organization';
import { OrganizationMember } from '../model/organizationMember';
import { OrganizationMembersSearchQuery } from '../model/organizationMembersSearchQuery';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface OrganizationsApiMethods {
    enterpriseGetOrganization(orgId: string, ): Promise<{ response: Response; body: Organization;  }>
    enterpriseGetOrganizationMember(orgId: string, memberId: string, ): Promise<{ response: Response; body: OrganizationMember;  }>
    enterpriseGetOrganizationMembers(orgId: string, query: OrganizationMembersSearchQuery, ): Promise<{ response: Response; body: EnterpriseGetOrganizationMembers200Response;  }>
}

export function OrganizationsApi (accessToken: string, basePath: string = defaultBasePath, logger?: (...thing: any) => void): OrganizationsApiMethods {
    return {
        /**
         * Retrieves organization information.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get organization info
         * @param orgId id of the organization
         */
        enterpriseGetOrganization: async function (orgId: string, ) : Promise<{ response: Response; body: Organization;  }> {
            const localVarPath = '/v2/orgs/{org_id}'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganization.');
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "Organization");

            return({response, body})
        },
        /**
         * Retrieves organization member information for an existing organization.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get organization member
         * @param orgId id of the organization
         * @param memberId id of the organization member
         */
        enterpriseGetOrganizationMember: async function (orgId: string, memberId: string, ) : Promise<{ response: Response; body: OrganizationMember;  }> {
            const localVarPath = '/v2/orgs/{org_id}/members/{member_id}'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganizationMember.');
            }

            // verify required parameter 'memberId' is not null or undefined
            if (memberId === null || memberId === undefined) {
                throw new Error('Required parameter memberId was null or undefined when calling enterpriseGetOrganizationMember.');
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "OrganizationMember");

            return({response, body})
        },
        /**
         * Retrieves organization members based on the organization ID and the cursor, or based on the user emails provided in the request.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">organizations:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=\"blank\" href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
         * @summary Get organization members
         * @param orgId id of the organization
         * @param query query to be used for organization members retrieval
         */
        enterpriseGetOrganizationMembers: async function (orgId: string, query: OrganizationMembersSearchQuery, ) : Promise<{ response: Response; body: EnterpriseGetOrganizationMembers200Response;  }> {
            const localVarPath = '/v2/orgs/{org_id}/members'
                .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)));
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
                throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganizationMembers.');
            }

            // verify required parameter 'query' is not null or undefined
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling enterpriseGetOrganizationMembers.');
            }

            if (query !== undefined) {
                localVarQueryParameters.append('query', ObjectSerializer.serialize(query, "OrganizationMembersSearchQuery"));
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "EnterpriseGetOrganizationMembers200Response");

            return({response, body})
        },
    }
}
