import React, { FunctionComponent, useState } from "react";
import MaterialButton from "./MaterialButton";
import { mdiImage } from '@mdi/js'
import Icon from "@mdi/react";
import { useTheme, ThemeProviderProps, EmotionTheming } from "emotion-theming";
import styled from "./styled";

interface Props{};

const FileUpload: FunctionComponent<Props> = props => {
  const theme: any = useTheme();

  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleUpload = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image as Blob, image?.name)
    const config = { headers: { 'content-type': 'multipart/form-data' } }		
		
    try {
      console.log("uploading file...noooot", image)
    } catch (error) {
      console.log(error.response)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Hack for typescript null check
    if(e.target && e.target.files) {
      setImage(e.target.files[0]);
    } 
    if(e.target && e.target.files) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div style={{ marginTop: "10%", textAlign: "center" }}>
      <label htmlFor="upload-button">
        {
          imagePreview ? <img src={ imagePreview } width="100%" height="100%" alt="preview" /> : (
            <>
              <Icon path={mdiImage}
                title="Image"
                size={3}
                color={theme.colors.pink}
              />
              <h5> Upload your photo</h5>
            </>
          )
        }
      </label>
      <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleChange}/>
      <br />
      <MaterialButton onClick={handleUpload}>Upload</MaterialButton>
    </div>
  );
}

export default FileUpload;