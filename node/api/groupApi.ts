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
import { CreateGroupRequest } from '../model/createGroupRequest';
import { ErrorResponse } from '../model/errorResponse';
import { GroupListResponse } from '../model/groupListResponse';
import { GroupSchema } from '../model/groupSchema';
import { UpdateGroupRequest } from '../model/updateGroupRequest';

import { ObjectSerializer } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.miro.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export interface GroupApiMethods {
    scimCreateGroup(createGroupRequest?: CreateGroupRequest, ): Promise<{ response: Response; body?: any;  }>
    scimDeleteGroup(groupId: number, ): Promise<{ response: Response; body?: any;  }>
    scimGetGroup(groupId: number, ): Promise<{ response: Response; body: GroupSchema;  }>
    scimGetGroups(attributes?: string, filter?: string, startIndex?: number, count?: number, sortBy?: string, sortOrder?: 'ascending' | 'descending', ): Promise<{ response: Response; body: GroupListResponse;  }>
    scimUpdateGroup(groupId: number, updateGroupRequest?: UpdateGroupRequest, ): Promise<{ response: Response; body: GroupSchema;  }>
}

export function GroupApi (accessToken: string, basePath: string = defaultBasePath, logger?: (...thing: any) => void): GroupApiMethods {
    return {
        /**
         * Creates a new group.
         * @param createGroupRequest Groups creation is not supported through SCIM, therefore POST and DELETE /Groups will return 405 error code.
         */
        scimCreateGroup: async function (createGroupRequest?: CreateGroupRequest, ) : Promise<{ response: Response; body?: any;  }> {
            const localVarPath = '/scim/Groups';
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json', 'application/scim+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(createGroupRequest, "CreateGroupRequest"))
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

            const body = bodyAsJson

            return({response, body})
        },
        /**
         * Groups deletion is not supported through SCIM, therefore POST and DELETE /Groups will return 405 error code.
         * @param groupId 
         */
        scimDeleteGroup: async function (groupId: number, ) : Promise<{ response: Response; body?: any;  }> {
            const localVarPath = '/scim/Groups/{groupId}'
                .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json', 'application/scim+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new Error('Required parameter groupId was null or undefined when calling scimDeleteGroup.');
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

            const body = bodyAsJson

            return({response, body})
        },
        /**
         * Retrieves a group by id.
         * @param groupId 
         */
        scimGetGroup: async function (groupId: number, ) : Promise<{ response: Response; body: GroupSchema;  }> {
            const localVarPath = '/scim/Groups/{groupId}'
                .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json', 'application/scim+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new Error('Required parameter groupId was null or undefined when calling scimGetGroup.');
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "GroupSchema");

            return({response, body})
        },
        /**
         * Retrieves a list of groups. Use <b>startIndex</b> and <b>count</b> query parameters to receive paginated results. Supports sorting and the filter parameter.
         * @param attributes A comma-separated list of attribute names to return in the response. Example attributes&#x3D;id,displayName
         * @param filter You can request a subset of resources by specifying the filter query parameter containing a filter expression. Attribute names and attribute operators used in filters are case insensitive. The filter parameter must contain at least one valid expression. Each expression must contain an attribute name followed by an attribute operator and an optional value. &lt;br&gt; eq &#x3D; equal&lt;br&gt; ne &#x3D; not equal&lt;br&gt; co &#x3D; contains&lt;br&gt; sw &#x3D; starts with&lt;br&gt; ew &#x3D; ends with&lt;br&gt; pr &#x3D; preset (has value)&lt;br&gt; gt &#x3D; greater than&lt;br&gt; ge &#x3D; greater than or equal to&lt;br&gt; lt &#x3D; less than&lt;br&gt; le &#x3D; less than or equal to&lt;br&gt; and &#x3D; Logical \&quot;and\&quot;&lt;br&gt; or &#x3D; Logical \&quot;or\&quot;&lt;br&gt; not &#x3D; \&quot;Not\&quot; function&lt;br&gt; () &#x3D; Precedence grouping &lt;br&gt;The value must be passed within parenthesis. &lt;br&gt;Example: filter&#x3D;(displayName eq \&quot;Product Team\&quot;)
         * @param startIndex Start index (1-based). Example startIndex&#x3D;1
         * @param count Specifies the desired maximum number of query results per page. Example count&#x3D;12
         * @param sortBy Specifies the attribute whose value will be used to order the response. Example sortBy&#x3D;displayName
         * @param sortOrder Defines the order in which the \&#39;sortBy\&#39; parameter is applied. Allowed values are \&#39;ascending\&#39; and \&#39;descending\&#39;. Example sortOrder&#x3D;ascending
         */
        scimGetGroups: async function (attributes?: string, filter?: string, startIndex?: number, count?: number, sortBy?: string, sortOrder?: 'ascending' | 'descending', ) : Promise<{ response: Response; body: GroupListResponse;  }> {
            const localVarPath = '/scim/Groups';
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json', 'application/scim+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            if (attributes !== undefined) {
                localVarQueryParameters.append('attributes', ObjectSerializer.serialize(attributes, "string"));
            }

            if (filter !== undefined) {
                localVarQueryParameters.append('filter', ObjectSerializer.serialize(filter, "string"));
            }

            if (startIndex !== undefined) {
                localVarQueryParameters.append('startIndex', ObjectSerializer.serialize(startIndex, "number"));
            }

            if (count !== undefined) {
                localVarQueryParameters.append('count', ObjectSerializer.serialize(count, "number"));
            }

            if (sortBy !== undefined) {
                localVarQueryParameters.append('sortBy', ObjectSerializer.serialize(sortBy, "string"));
            }

            if (sortOrder !== undefined) {
                localVarQueryParameters.append('sortOrder', ObjectSerializer.serialize(sortOrder, "'ascending' | 'descending'"));
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "GroupListResponse");

            return({response, body})
        },
        /**
         * Updates an existing group resource, overwriting values for specified attributes. Attributes that are not provided will remain unchanged. PATCH only updates the fields provided.
         * @param groupId 
         * @param updateGroupRequest The body of a PATCH request must contain the attribute Operations, whose value is an array of one or more PATCH operations. Each PATCH operation object must have exactly one op member.
         */
        scimUpdateGroup: async function (groupId: number, updateGroupRequest?: UpdateGroupRequest, ) : Promise<{ response: Response; body: GroupSchema;  }> {
            const localVarPath = '/scim/Groups/{groupId}'
                .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));
            let localVarQueryParameters = new URLSearchParams();
            let localVarHeaderParams: Record<string, string> = {}
            const produces = ['application/json', 'application/scim+json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            } else {
                localVarHeaderParams.Accept = produces.join(',');
            }

            // verify required parameter 'groupId' is not null or undefined
            if (groupId === null || groupId === undefined) {
                throw new Error('Required parameter groupId was null or undefined when calling scimUpdateGroup.');
            }


            const resource = new URL(localVarPath, basePath)
            resource.search = localVarQueryParameters.toString()


const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(ObjectSerializer.serialize(updateGroupRequest, "UpdateGroupRequest"))
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

            const body = ObjectSerializer.deserialize(bodyAsJson, "GroupSchema");

            return({response, body})
        },
    }
}
