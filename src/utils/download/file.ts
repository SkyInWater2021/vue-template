import { HYRequest } from '@/api/request'

const requestInstance = new HYRequest({})

export const typeMapping: Record<string, string> = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xls: 'application/vnd.ms-excel',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  doc: 'application/msword',
  pdf: 'application/pdf',
  default: 'text/plain', // 默认的文件下载方式
}

export function downloadFile(
  file: BlobPart,
  fileName = '未知文件',
  callback?: () => void,
) {
  const urlObject = window.URL || window.webkitURL || window
  const fileType = fileName.split('.').reverse()[0] || 'default'

  const link = document.createElement('a')
  link.href = urlObject.createObjectURL(
    new Blob([file], { type: typeMapping[fileType] }),
  )

  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  if (typeof callback === 'function') callback()
}

export function fetchFileByUrl(
  url: string,
  fileName: string,
  callback?: (response: BlobPart) => void,
) {
  requestInstance
    .request<BlobPart>({ method: 'get', url, responseType: 'blob' })
    .then((response) => {
      if (callback) callback(response)
      else downloadFile(response, fileName)
    })
}
