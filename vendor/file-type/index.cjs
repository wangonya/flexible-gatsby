'use strict'

let fileTypeModule

async function loadFileType() {
  fileTypeModule ||= import('file-type-modern')
  return fileTypeModule
}

async function fromBuffer(input, options) {
  const fileType = await loadFileType()
  return fileType.fileTypeFromBuffer(input, options)
}

async function fromFile(path, options) {
  const fileType = await loadFileType()
  return fileType.fileTypeFromFile(path, options)
}

async function fromStream(stream, options) {
  const fileType = await loadFileType()
  return fileType.fileTypeFromStream(stream, options)
}

async function fromTokenizer(tokenizer, options) {
  const fileType = await loadFileType()
  return fileType.fileTypeFromTokenizer(tokenizer, options)
}

async function fromBlob(blob, options) {
  const fileType = await loadFileType()
  return fileType.fileTypeFromBlob(blob, options)
}

async function stream(readableStream, options) {
  const fileType = await loadFileType()
  return fileType.fileTypeStream(readableStream, options)
}

const compatibilityApi = {
  fromBuffer,
  fromFile,
  fromStream,
  fromTokenizer,
  fromBlob,
  stream,
}

module.exports = compatibilityApi
module.exports.default = compatibilityApi
module.exports.fileTypeFromBuffer = fromBuffer
module.exports.fileTypeFromFile = fromFile
module.exports.fileTypeFromStream = fromStream
module.exports.fileTypeFromTokenizer = fromTokenizer
module.exports.fileTypeFromBlob = fromBlob
module.exports.fileTypeStream = stream
