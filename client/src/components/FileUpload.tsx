import React, { FunctionComponent, useState, useCallback } from "react";
import MaterialButton from "./MaterialButton";
import { mdiImage } from '@mdi/js'
import Icon from "@mdi/react";
import { useTheme, ThemeProviderProps, EmotionTheming } from "emotion-theming";
import styled from "./styled";
import dataservice from "../services/dataservice";
import { useDispatch } from "react-redux";
import { ADD_IMAGE } from "../ducks/image";
import { image } from "../ducks";
import LoadingSpinner from "./LoadingSpinner";

interface Props{};

export interface ImageUploadType {
  image?: File,
  isLoading?: boolean | false,
  preview?: string,
  imageBlobName?: string,
};

const FileUpload: FunctionComponent<Props> = props => {
  const theme: any = useTheme();
  const dispatch = useDispatch();

  const addImage = useCallback(
    (image: ImageUploadType) => {
      dispatch({
        type: ADD_IMAGE,
        payload: image,
      });
    },
    [dispatch]
  );

  const [imageDto, setImageDto] = useState<ImageUploadType>();
  // const [imagePreview, setImagePreview] = useState<string>("");

  const handleUpload = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if(imageDto && imageDto.image){
      // console.log("se imagedto image: ", imageDto.image);
      addImage(imageDto);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Hack for typescript null check
    if(e.target && e.target.files) {
      setImageDto({image: e.target.files[0], preview: URL.createObjectURL(e.target.files[0]), isLoading: false });
    } 
  }

  return (
    <div style={{ marginTop: "10%", textAlign: "center" }}>
      <label htmlFor="upload-button">
        {
          imageDto?.preview ? <img src={ imageDto?.preview } width="100%" height="100%" alt="preview" /> : (
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
      {imageDto?.isLoading && <LoadingSpinner />}
      <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleChange}/>
      <br />
      <MaterialButton disabled={!imageDto?.image} onClick={handleUpload}>Upload</MaterialButton>
    </div>
  );
}

export default FileUpload;