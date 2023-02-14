import crypto from 'crypto'

const getHashFromObject = (object: Object): string => crypto
  .createHash('md5')
  .update(JSON.stringify(object))
  .digest('hex')

export default getHashFromObject
