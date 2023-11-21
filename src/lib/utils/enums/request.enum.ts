/**
 * Enum representing the value to be stored in request interface.
 * @enum
 */
export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
}

export enum RequestDefault {
  NAME = "API Request Name",
  METHOD = RequestMethod.GET,
}

export enum RequestDataType {
  JSON = "JSON",
  XML = "XML",
  HTML = "HTML",
  TEXT = "Text",
  JAVASCRIPT = "JavaScript",
}

export enum RequestDataset {
  FORMDATA = "Form Data",
  URLENCODED = "URL Encoded",
  RAW = "Raw",
  NONE = "None",
}

export enum RequestSection {
  PARAMETERS = "Parameters",
  AUTHORIZATION = "Authorization",
  HEADERS = "Headers",
  REQUEST_BODY = "Request Body",
}

/**
 * Enum representing the properties of a request interface.
 * @enum
 */
export enum RequestProperty {
  METHOD = "method",
  BODY = "body",
  URL = "url",
  HEADERS = "headers",
  QUERY_PARAMS = "queryParams",
  AUTO_GENERATED_HEADERS = "autoGeneratedHeaders",
  RESPONSE = "response",
  STATE = "state",
  AUTH = "auth",
  REQUEST_IN_PROGRESS = "requestInProgress",
}

export enum RequestAuthProperty {
  BEARER_TOKEN = "bearerToken",
  BASIC_AUTH = "basicAuth",
  API_KEY = "apiKey",
}
