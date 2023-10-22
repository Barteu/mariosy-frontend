export interface Marios {
  externalId: string;
  creatorExternalId: string;
  receiversExternalIds: string[];
  title: string;
  comment: string;
  type: string;
  creatorFirstName: String;
  creatorLastName: String;
  creationTimestamp: Date;
  receiversNames: string[];
}

export interface MariosPayload {
  creatorExternalId: string;
  receiversExternalIds: string[];
  title: string;
  comment: string;
  type: number;
}
