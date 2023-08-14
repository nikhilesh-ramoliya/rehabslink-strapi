'use strict';

/**
 * center-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::center-request.center-request');
