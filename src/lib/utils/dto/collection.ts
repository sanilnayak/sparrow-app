import type { KeyValuePair } from "../interfaces/request.interface";

export interface CreateDirectoryPostBody {
  name: string;
  description: string;
}

export interface CreateCollectionPostBody {
  name: string;
  workspaceId: string;
}

export interface UpdateCollectionName {
  name: string;
}

export interface UpdateFolderName {
  name: string;
}

export interface Headers {
  name: string;
  description: string;
}

export interface QueryParams {
  name: string;
  description: string;
  checked: boolean;
}

export interface UpdateRequestName {
  collectionId: string;
  workspaceId: string;
  folderId?: string;
  items: {
    name: string;
    type: string;
  };
}

export interface DeleteRequestName {
  collectionId: string;
  workspaceId: string;
  folderId?: string;
  items: {
    name: string;
    type: string;
  };
}

export interface CreateApiRequestPostBody {
  collectionId: string;
  workspaceId: string;
  folderId?: string;
  items: {
    id?: string;
    name: string;
    type: string;
    request?: {
      method: string;
      url?: string;
      body?: unknown;
      headers?: KeyValuePair[];
      queryParams?: KeyValuePair[];
    };
    items?: {
      id?: string;
      name: string;
      type: string;
      request: {
        method: string;
        url?: string;
        body?: unknown;
        headers?: KeyValuePair[];
        queryParams?: KeyValuePair[];
      };
    };
  };
}
