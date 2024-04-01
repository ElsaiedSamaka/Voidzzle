import {useRef,useState} from "react";

const FileInput = (props:any) => {
  const {register , onFileChange} = props;
  const hiddenInputRef = useRef();

  const [preview, setPreview] = useState('');

  const { ref: registerRef, ...rest } = register('img');

  const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const urlImage = URL.createObjectURL(file);
      setPreview(urlImage);
      onFileChange(file); 
    }
  };

  const onUpload = () => {
    hiddenInputRef.current?.click();
  };

  const uploadButtonLabel = preview ? 'Change image' : 'Upload image';

  return (
    <>
      <input
        type="file"
        name="img"
        {...rest}
        onChange={handleUploadedFile}
        ref={(e) => {
          registerRef(e);
          hiddenInputRef.current = e as any;
        }}
      />
      <img src={preview} style={{ width: '8rem' }} alt="img" />
      <button onClick={onUpload}>{uploadButtonLabel}</button>
    </>
  );
};

export default FileInput; 
