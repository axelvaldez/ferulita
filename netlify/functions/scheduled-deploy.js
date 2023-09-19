const fetch = require('node-fetch')
import { schedule } from '@netlify/functions'
// This is sample build hook
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/6509053ae988627942e70b1f'

const handler = schedule('40 21 * * *', async () => {
    await fetch(BUILD_HOOK, {
      method: 'POST'
    }).then(response => {
      console.log('Build hook response:', response)
    })
  
    return {
      statusCode: 200
    }
  })

export {
  handler
}