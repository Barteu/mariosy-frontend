import { MariosType } from './mariosType';

export interface MariosDialog {
  textBeforeUsers: string;
  usersToDisplay: string[];
  title: string;
  comment: string;
  mariosType: MariosType;
}
