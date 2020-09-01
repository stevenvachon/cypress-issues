'use strict';

module.exports = (req, res, next) => {
  const headers = {
    'cache-control': 'no-cache',
    'connection': 'keep-alive',
    //'content-type': 'application/json',
    'dd-pool': 'dogweb_query',
    'pragma': 'no-cache',
    //'server': 'nginx/1.17.8',
    'strict-transport-security': 'max-age=15724800;',
    'transfer-encoding': 'chunked',
    'vary': 'Accept-Encoding',
    'x-content-type-options': 'nosniff, nosniff',
    'x-dd-debug': 'Ih+MLH0K0u2lh0ad0UVH9qgBLGoeS3BZ4L/MMjs0xkWNCubd/tCsP2oV8f53aite',
    'x-dd-version': '35.2896185',
    'x-ratelimit-limit': '600',
    'x-ratelimit-period': '3600',
    'x-ratelimit-remaining': '582',
    'x-ratelimit-reset': '160',
    'x-xss-protection': '1; mode=block'
  };

  Object.entries(headers).forEach(([key, value]) => res.header(key, value));
  next();
};
