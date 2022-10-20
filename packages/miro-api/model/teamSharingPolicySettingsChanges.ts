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
 * Team sharing policy settings
 */
export class TeamSharingPolicySettingsChanges {
  /**
   * Allow listed domains
   */
  'allowListedDomains'?: Array<string>
  /**
   *  * \"company_admins\": Only company admins can create assets in a team * \"admins\": Both team and company admins can create assets in a team. * \"all_members\": all_members
   */
  'createAssetAccessLevel'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.CreateAssetAccessLevelEnum[keyof typeof TeamSharingPolicySettingsChanges.CreateAssetAccessLevelEnum]
  /**
   *  Default board access * \"private\": Only board owners can access * \"view\":    Anyone in the team can view * \"comment\": Anyone in the team can comment * \"edit\":    Anyone in the team can edit
   */
  'defaultBoardAccess'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.DefaultBoardAccessEnum[keyof typeof TeamSharingPolicySettingsChanges.DefaultBoardAccessEnum]
  /**
   *  Default organization access * \"private\": Only board owners can access * \"view\":    Anyone in the team can view * \"comment\": Anyone in the team can comment * \"edit\":    Anyone in the team can edit
   */
  'defaultOrganizationAccess'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.DefaultOrganizationAccessEnum[keyof typeof TeamSharingPolicySettingsChanges.DefaultOrganizationAccessEnum]
  /**
   *  Default project access * \"private\": Only board owners can access * \"view\":    Anyone in the team can view
   */
  'defaultProjectAccess'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.DefaultProjectAccessEnum[keyof typeof TeamSharingPolicySettingsChanges.DefaultProjectAccessEnum]
  /**
   *  * \"allowed\": Allow move board to team * \"not_allowed\": Not allow move board to team
   */
  'moveBoardToAccount'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.MoveBoardToAccountEnum[keyof typeof TeamSharingPolicySettingsChanges.MoveBoardToAccountEnum]
  /**
   *  * \"enabled\": Enabled. Restrict to listed domain. * \"disabled\": Disabled. No domain restriction. * \"enabled_with_external_users_access\": Enabled. Restrict to listed domain but allows external users to access.
   */
  'restrictAllowedDomains'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.RestrictAllowedDomainsEnum[keyof typeof TeamSharingPolicySettingsChanges.RestrictAllowedDomainsEnum]
  /**
   *  * \"allowed\": Allow sharing on team * \"not_allowed\": Not allow sharing on team
   */
  'sharingOnAccount'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.SharingOnAccountEnum[keyof typeof TeamSharingPolicySettingsChanges.SharingOnAccountEnum]
  /**
   *  * \"allowed\": Allow sharing on organization * \"allowed_with_editing\": Allow sharing with editing on organization * \"not_allowed\": Not allow sharing on organization
   */
  'sharingOnOrganization'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.SharingOnOrganizationEnum[keyof typeof TeamSharingPolicySettingsChanges.SharingOnOrganizationEnum]
  /**
   *  * \"allowed\": Allow sharing via public link * \"allowed_with_editing\": Allow sharing with editing via public link * \"not_allowed\": Not allow sharing via public link
   */
  'sharingViaPublicLink'?:
    | string
    | typeof TeamSharingPolicySettingsChanges.SharingViaPublicLinkEnum[keyof typeof TeamSharingPolicySettingsChanges.SharingViaPublicLinkEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'allowListedDomains',
      baseName: 'allowListedDomains',
      type: 'Array<string>',
    },
    {
      name: 'createAssetAccessLevel',
      baseName: 'createAssetAccessLevel',
      type: 'TeamSharingPolicySettingsChanges.CreateAssetAccessLevelEnum',
    },
    {
      name: 'defaultBoardAccess',
      baseName: 'defaultBoardAccess',
      type: 'TeamSharingPolicySettingsChanges.DefaultBoardAccessEnum',
    },
    {
      name: 'defaultOrganizationAccess',
      baseName: 'defaultOrganizationAccess',
      type: 'TeamSharingPolicySettingsChanges.DefaultOrganizationAccessEnum',
    },
    {
      name: 'defaultProjectAccess',
      baseName: 'defaultProjectAccess',
      type: 'TeamSharingPolicySettingsChanges.DefaultProjectAccessEnum',
    },
    {
      name: 'moveBoardToAccount',
      baseName: 'moveBoardToAccount',
      type: 'TeamSharingPolicySettingsChanges.MoveBoardToAccountEnum',
    },
    {
      name: 'restrictAllowedDomains',
      baseName: 'restrictAllowedDomains',
      type: 'TeamSharingPolicySettingsChanges.RestrictAllowedDomainsEnum',
    },
    {
      name: 'sharingOnAccount',
      baseName: 'sharingOnAccount',
      type: 'TeamSharingPolicySettingsChanges.SharingOnAccountEnum',
    },
    {
      name: 'sharingOnOrganization',
      baseName: 'sharingOnOrganization',
      type: 'TeamSharingPolicySettingsChanges.SharingOnOrganizationEnum',
    },
    {
      name: 'sharingViaPublicLink',
      baseName: 'sharingViaPublicLink',
      type: 'TeamSharingPolicySettingsChanges.SharingViaPublicLinkEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamSharingPolicySettingsChanges.attributeTypeMap
  }
}

export namespace TeamSharingPolicySettingsChanges {
  export const CreateAssetAccessLevelEnum = {
    CompanyAdmins: 'company_admins',
    Admins: 'admins',
    AllMembers: 'all_members',
  } as const
  export const DefaultBoardAccessEnum = {
    Private: 'private',
    View: 'view',
    Comment: 'comment',
    Edit: 'edit',
  } as const
  export const DefaultOrganizationAccessEnum = {
    Private: 'private',
    View: 'view',
    Comment: 'comment',
    Edit: 'edit',
  } as const
  export const DefaultProjectAccessEnum = {
    Private: 'private',
    View: 'view',
  } as const
  export const MoveBoardToAccountEnum = {
    Allowed: 'allowed',
    NotAllowed: 'not_allowed',
  } as const
  export const RestrictAllowedDomainsEnum = {
    Enabled: 'enabled',
    EnabledWithExternalUserAccess: 'enabled_with_external_user_access',
    Disabled: 'disabled',
  } as const
  export const SharingOnAccountEnum = {
    Allowed: 'allowed',
    NotAllowed: 'not_allowed',
  } as const
  export const SharingOnOrganizationEnum = {
    Allowed: 'allowed',
    AllowedWithEditing: 'allowed_with_editing',
    NotAllowed: 'not_allowed',
  } as const
  export const SharingViaPublicLinkEnum = {
    Allowed: 'allowed',
    AllowedWithEditing: 'allowed_with_editing',
    NotAllowed: 'not_allowed',
  } as const
}