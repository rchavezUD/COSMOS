/*
# Copyright 2021 Ball Aerospace & Technologies Corp.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# This program may also be used under the terms of a commercial or
# enterprise edition license of COSMOS if purchased from the
# copyright holder
*/

import axios from 'axios'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      CosmosAuth.login(window.location.href)
    }
    return error
  }
)

const request = async function (
  method,
  url,
  data = {},
  params = {},
  { noAuth = false, noScope = false } = {}
) {
  if (!noAuth) {
    try {
      await CosmosAuth.updateToken(CosmosAuth.defaultMinValidity)
    } catch (error) {
      CosmosAuth.login()
    }
    params['token'] = localStorage.getItem('token')
  }
  if (!noScope && !params['scope']) {
    params['scope'] = localStorage.scope
  }
  return axios({
    method,
    url,
    data,
    params,
    headers: { Authorization: localStorage.getItem('token') },
  })
}

export default {
  get: function (path, params, options) {
    return request('get', path, null, params, options)
  },

  put: function (path, data, params, options) {
    return request('put', path, data, params, options)
  },

  post: function (path, data, params, options) {
    return request('post', path, data, params, options)
  },

  delete: function (path, params, options) {
    return request('delete', path, null, params, options)
  },
}
