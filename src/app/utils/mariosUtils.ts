import { Marios } from 'src/app/interfaces/marios';

export function compareByCreationTimestampDesc(a: Marios, b: Marios) {
  if (a.creationTimestamp.getTime() > b.creationTimestamp.getTime()) {
    return -1;
  }
  if (a.creationTimestamp.getTime() < b.creationTimestamp.getTime()) {
    return 1;
  }
  return 0;
}

export function mapMariosDTOToMarios(data: any){
  let marios: Marios = {
    externalId: data.externalId,
    creatorExternalId: data.creatorExternalId,
    receiversExternalIds: data.receiversExternalIds,
    title: data.title,
    comment: data.comment,
    type: data.type,
    creatorFirstName: data.creatorFirstName,
    creatorLastName: data.creatorLastName,
    creationTimestamp: new Date(data.creationInstant),
    receiversNames: data.receiversNames
  }
  return marios;
}