export function uploadImage (imgData, fileName) {
  let formData = new FormData()
  formData.append('formats', 'ORIGINAL')
  formData.append('contextId', 'default')
  formData.append('allowPublicAccess', 'true')
  formData.append('upload', imgData, fileName)
  return fetch('https://documentservice-qa.stg-prsn.com/api/v1/documents/upload', {
    headers: {
      'Accept': 'application/json',
      'x-tenantId': 'pb',
      'correlation-id': 'test',
      'X-Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MDExNTQ3NjF9.GhTWuYiajI_ssiLLRmHKXxILAVcA7hnsOrAGfyhHBkwFwAy6DfVfzj8CK7_aw6B8NfXqP91InK0lQH9P1IL-Iw'
    },
    method: 'POST',
    body: formData
  })
}