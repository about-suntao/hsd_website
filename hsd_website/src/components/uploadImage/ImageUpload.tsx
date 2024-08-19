import React, { useState, useEffect } from 'react';
import { Upload, message } from 'antd';
import { UploadFile, UploadChangeParam } from 'antd/es/upload/interface';
import { RcFile } from 'antd/lib/upload';
import { PlusOutlined } from '@ant-design/icons';
import fetchRequest from '@/utils/fetchRequest';
import getToken from '@/utils/getToken';

interface ImageUploadProps {
  tips?: string;
  maxCount?: number;
  maxSize?: number;
  acceptedTypes?: string[];
  onChange: (urls: string[]) => void;
  initialFileList?: UploadFile[];
}

const ImgType = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

const ImageUpload: React.FC<ImageUploadProps> = ({ tips, maxCount = 1, maxSize = 10, acceptedTypes = ImgType, onChange, initialFileList = [] }) => {
  const [fileList, setFileList] = useState<UploadFile[]>(initialFileList);

  useEffect(() => {
    if (initialFileList.length > 0) {
      setFileList(initialFileList);
    }
  }, [initialFileList]);

  const beforeUpload = (file: RcFile) => {
    const isAcceptedType = acceptedTypes.includes(file.type);
    if (!isAcceptedType) {
      message.error(`仅支持上传 ${acceptedTypes.join(', ')} 文件!`);
    }

    const isLtMaxSize = file.size / 1024 / 1024 < maxSize;
    if (!isLtMaxSize) {
      message.error(`文件大小不能超过 ${maxSize}MB!`);
    }
    return isAcceptedType && isLtMaxSize;
  };

  const customRequest = async (options: any) => {
    const formData = new FormData();
    formData.append('file', options.file);
    const token = getToken()?.token || null;

    const response = await fetchRequest.post('/oos/upload', formData, {
      'token': token,
    });
    if (response.code === 200) {
      options.onSuccess({ url: response.data.url }, options.file);
    }
  };

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-maxCount);
    newFileList = newFileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);

    const urls = newFileList
      .filter(file => !!file.url)
      .map(file => file.url!);
    onChange(urls);
  };

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={customRequest}
    >
      {fileList.length >= maxCount ? null : <div>
        <PlusOutlined />
        <p style={{ color: 'gray' }}>{tips}</p>
      </div>}
    </Upload>
  );
};

export default ImageUpload;
