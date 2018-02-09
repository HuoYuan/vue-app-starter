import { request } from '@/utils'

export default {
  async find() {
    return request({
      path: '/group/find'
    })
  },
  async findOne({ childGroupId, organizationId = '' }) {
    return request({
      path: '/template/find',
      query: {
        groupId: childGroupId, // for REST API
        organizationId
      }
    })
  },
  async sort({ childGroups }) {
    return request({
      method: 'POST',
      path: '/rank',
      body: {
        organizationId: childGroups[0].organizationId,
        groupIds: childGroups.map(childGroup => childGroup._id),
      }
    })
  },
  async add({ name, parentId }) {
    return request({
      method: 'POST',
      path: '/group/create',
      body: {
        name: name.trim(),
        parentId,
      }
    })
  },
  async update({ id, newName }) {
    return request({
      method: 'PUT',
      path: '/group/update',
      body: {
        _id: id,
        name: newName.trim(),
      }
    })
  },
  async remove({ id }) {
    return request({
      method: 'DELETE',
      path: '/group/delete',
      query: {
        id
      }
    })
  }
}
