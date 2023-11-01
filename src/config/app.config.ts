interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Project Manager'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Project Manager', 'Developer', 'Quality Assurance'],
  tenantName: 'Company',
  applicationName: 'Vkanban',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage projects', 'Manage project tasks', 'Assign tasks to developers', 'Manage task status'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8834cdea-735c-4c48-9661-04fbb6bc1e13',
};
