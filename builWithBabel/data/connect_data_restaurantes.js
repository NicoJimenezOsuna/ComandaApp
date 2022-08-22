"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//DATA CONECTION APLICATION AND OTHERS CONFIGURATIONS

/**
 *
 * SERVER PROTOCOL
 *
 * */
var HTTP_PROTOCOL = exports.HTTP_PROTOCOL = "http:";
/**
 *
 * URL SERVER
 *
 * */
// export const URL_MAIN = "//restaurante.comandapp.es/api/ws/";
var URL_MAIN = exports.URL_MAIN = "//restaurante.comandapp.es/";
/**
 *
 * URL PATH API
 *
 * */
var PATH_API = exports.PATH_API = "api/ws/";
/**
 *
 * FOLDER STORAGE API
 *
 * */
var FOLDER_STORAGE = exports.FOLDER_STORAGE = "storage/";
/**
 *
 * REQUEST HEADERS
 *
 * */
var USER_HEADERS = exports.USER_HEADERS = {
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
};