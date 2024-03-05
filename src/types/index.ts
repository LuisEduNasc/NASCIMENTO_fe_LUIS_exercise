export interface Teams {
    id: string;
    name: string;
}

export interface TeamOverview {
    id: string;
    name: string;
    teamLeadId: string;
    teamMemberIds: string[];
}

export interface MemberData {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    location: string;
    avatarUrl: string;
}

export interface ListItemColumn {
    key: string;
    value: string;
}

export interface ListItem {
    id: string;
    url?: string;
    columns: Array<ListItemColumn>;
    navigationProps?: MemberData | Teams;
}

export interface TeamOverviewData {
    teamLead?: MemberData;
    teamMembers?: MemberData[];
}
