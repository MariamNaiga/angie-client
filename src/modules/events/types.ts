export interface IEvent {
  id: string;
  privacy: string;
  name: string;
  startDate: Date;
  endDate: Date;
  submittedAt: Date;
  submittedBy: string;
  details: string;
  venue?: any;
  categoryId: string;
  attendancePercentage: string;
  category: any;
  groupId: number;
  group: any;
  attendance: IAttendance[];
  leaders: any[];
  metaData?: MetaData;
}

export interface IAttendance {
  id: number;
  isVisitor: boolean;
  eventId: string;
  contactId: number;
}

export interface IGroupEvent {
  id: string;
  group: any;
  groupId: number;
  category: any;
  categoryId: string;
}

export enum EventCategory {
  WeeklyMC = "Weekly MC",
  Garage = "Garage",
  Evangelism = "Evangelism",
  Wedding = "Wedding",
  Baptism = "Baptism",
  MC = "MC Meeting"
}

export interface MetaData {}
