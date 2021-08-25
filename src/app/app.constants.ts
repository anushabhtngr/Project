import { environment } from '../environments/environment';

function createUrl(actionName: string): string {
    return `${environment.apiURL}${actionName}`;
}

export const appApiPaths = {
    getUserList: createUrl('listUsers')
}