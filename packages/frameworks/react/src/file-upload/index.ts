import type {
  FileAcceptDetails as FileUploadFileAcceptDetails,
  FileChangeDetails as FileUploadFileChangeDetails,
  FileRejectDetails as FileUploadFileRejectDetails,
} from '@zag-js/file-upload'
import { useFileUploadContext, type FileUploadContext } from './file-upload-context'
import { FileUploadDropzone, type FileUploadDropzoneProps } from './file-upload-dropzone'
import { FileUploadItem, type FileUploadItemProps } from './file-upload-item'
import {
  FileUploadItemDeleteTrigger,
  type FileUploadItemDeleteTriggerProps,
} from './file-upload-item-delete-trigger'
import { FileUploadItemGroup, type FileUploadItemGroupProps } from './file-upload-item-group'
import { FileUploadItemName, type FileUploadItemNameProps } from './file-upload-item-name'
import { FileUploadItemPreview, type FileUploadItemPreviewProps } from './file-upload-item-preview'
import {
  FileUploadItemPreviewImage,
  type FileUploadItemPreviewImageProps,
} from './file-upload-item-preview-image'
import {
  FileUploadItemSizeText,
  type FileUploadItemSizeTextProps,
} from './file-upload-item-size-text'
import { FileUploadLabel, type FileUploadLabelProps } from './file-upload-label'
import { FileUploadRoot, type FileUploadRootProps } from './file-upload-root'
import { FileUploadTrigger, type FileUploadTriggerProps } from './file-upload-trigger'

export const FileUpload = {
  Root: FileUploadRoot,
  Dropzone: FileUploadDropzone,
  Item: FileUploadItem,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreview: FileUploadItemPreview,
  ItemPreviewImage: FileUploadItemPreviewImage,
  ItemSizeText: FileUploadItemSizeText,
  Label: FileUploadLabel,
  Trigger: FileUploadTrigger,
}

export {
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadRoot,
  FileUploadTrigger,
  useFileUploadContext,
}

export type {
  FileUploadContext,
  FileUploadDropzoneProps,
  FileUploadFileAcceptDetails,
  FileUploadFileChangeDetails,
  FileUploadFileRejectDetails,
  FileUploadItemDeleteTriggerProps,
  FileUploadItemGroupProps,
  FileUploadItemNameProps,
  FileUploadItemPreviewImageProps,
  FileUploadItemPreviewProps,
  FileUploadItemProps,
  FileUploadItemSizeTextProps,
  FileUploadLabelProps,
  FileUploadRootProps,
  FileUploadTriggerProps,
}
