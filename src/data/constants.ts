export const AUTH_TOKEN_KEY = "__demo__eva__token";
export const AUTH_USER_KEY = "__demo__eva__user";

export const appRoles:any = {
  roleCrmView: "CRM_VIEW",
  roleCrmEdit: "CRM_EDIT",

  roleAuthUserView: "AUTH_USER_VIEW",
  roleAuthUserEdit: "AUTH_USER_EDIT",

  roleAuthGroupView: "AUTH_GROUP_VIEW",
  roleAuthGroupEdit: "AUTH_GROUP_EDIT",

  roleTagView: "AUTH_TAG_VIEW",
  roleTagEdit: "AUTH_TAG_EDIT",

  roleGroupView: "GROUP_VIEW",
  roleGroupEdit: "GROUP_EDIT",

  roleVolunteer: "VOLUNTEER",
  roleTeamLead: "TEAMLEAD",
};

export const redux = {
  doLogin: "DO_LOGIN",
  doLogout: "DO_LOGOUT",
  doSearch: "DO_SEARCH",
};

export const localRoutes = {
  dashboard: "/dashboard",
  contacts: "/people/contacts",
  contactsDetails: "/people/contacts/:contactId",
  groups: "/people/groups",
  users: "/admin/users",
  usersGroups: "/admin/user-groups",
  tags: "/admin/tags",
  settings: "/admin/settings",
  volcalendar: "/volcalendar",
  voldashboard: "/voldashboard",
  volblockedDate: "/volblockedDate",
  volviewteam: "/volviewteam",
  teamleadcalendar: '/teamleadcalendar',
  assignedtasks: '/assignedtasks',
  assigntask: '/assigntask',
  viewVolunteers: "/volunteers/view-volunteers",
  addVolunteers: "/volunteers/add-volunteers",
  addTasks: "/tasks/add-tasks",
  viewTasks:"/tasks/view-tasks",
  help: "/help", 

  ministries: "/ministries" // Added by Daniel - to be placed in the XRemoteSelect component in AddVolunteer. It contains the ministry names
};

const debug = process.env.NODE_ENV !== "production";

export const url = debug ? "http://localhost:4002" : "http://hgjyuk.com/server";

export const remoteRoutes = {

  authServer: url,
  login: url + "/api/auth/login",
  profile: url + "/api/auth/profile",
  register: url + "/api/auth/register",
  resetPass: url + "/reset",
  contacts: url + "/api/crm/contacts",
  contactSearch: url + "/api/crm/contact/search",
  contactById: url + "/api/crm/contacts/id",
  contactsPerson: url + "/api/crm/people",
  contactsOnePerson: url + "/api/crm/people", // Added by Daniel
  contactsPersonVolunteer: url + "/api/crm/people/volunteers", // Added by Daniel
  contactsPersonOneVolunteer: url + "/api/crm/people/volunteers", // Added by Daniel
  contactsPersonsAndTheirGroups: url + "/api/crm/people/personsAndTheirGroups", // Persons and all the groups they are part of and active in i.e. ministries and other community groups
  contactsChc: url + "/api/crm/person/chc",
  contactsEmail: url + "/api/crm/emails",
  tags: url + "/api/tags",
  users: url + "/api/users",
  userGroups: url + "/api/user-groups",
  contactsPhone: url + "/api/crm/phones",
  contactsAddress: url + "/api/crm/addresses",
  contactsIdentification: url + "/api/crm/identifications",
  contactsRequests: url + "/api/crm/requests",
  groups: url + "/api/groups/groups",
  groupsCombo: url + "/api/groups/combo",
  groupsCategories: url + "/api/groups/categories",

  groupsCategoriesById: url + "/api/groups/category/{id}", // Added by Daniel
  groupsMemberships: url + "/api/groups/member", // Added by Daniel
  groupsMembership: url + '/api/groups/member',

  contactsCompany: url + "/api/crm/contact/company",
  contactsAvatar: url + "/api/crm/contact/avatar",

  volunteers: url + "/api/services/volunteering/persons", // Added by Daniel
  ministries: url + "/api/services/volunteering/ministries", // Added by Daniel
  day: url + '/api/appointment/day',
  appointments: url + "/api/appointment/appointments",
  assignedTasks: url + "/api/appointment-task/assignedTasks",
  appointmentTask: url + "/api/appointment-task",
  userTask: url + "/api/user-task",
  userTasks: url + "/api/user-task/userTasks",
  singleUserTask: url + "/api/user-task",
  tasks: url + "/api/tasks",
  blockedDate: url + '/api/blocked-date',
  //viewTasks: url + "/api/tasks / { id } / update",
};