const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;
const { IconButton } = wp.components;

import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lp/gallery', {
  title: 'La Pizzeria Gallery',
  icon: {src: Logo},
  category: 'lapizzeria',
  attributes:{
    images:{
      type: 'array'
    }
  },
  edit: props =>{
    const {attributes: { images =[] }, setAttributes} = props;

    console.log(images);

    const deleteImage = imageIndex => {
      const newImages = images.filter((image, index) =>index !== imageIndex);

      setAttributes({images: newImages});
    }

    const onSelectNewImage = newImage=>{
      const image = {
        thumb: newImage.sizes.medium.url,
        full: newImage.sizes.full.url,
        id: newImage.id
      }
      setAttributes({images : [...images, image]})
    }

    return(
      <div className="gallery-pizzeria">
        <MediaUpload
          onSelect= {onSelectNewImage}
          type= "image"
          render={ ({open}) =>(
            <IconButton
              className= "pizzeria-add-image"
              onClick={open}
              icon="format-image"
              showTooltip="true"
              label="Add Image"
            />
          )}
        />
        <h2 className="txt-primary">Gallery</h2>
        <ul className="list-images">
          {images.map((image, index)=>(
            <li className="image">
              <div className="delete-image" onClick={ () => deleteImage(index)}>
                <span className="dashicons dashicons-trash"></span>
              </div>
              <img src={image.thumb}/>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  save: props =>{
    const {attributes: { images =[] }} = props;
    if(images.length === 0){
      return(
        <p>You have not selected any images</p>
      )
    }

    return (
      <div className="gallery-pizzeria">
      <h2 className="txt-primary">Gallery</h2>
      <ul className="list-images">
        {images.map(image=>(
          <li className="image">
            <a href={image.full} data-lightbox="gallery">
              <img src={image.thumb}/>
            </a>
          </li>
        ))}
      </ul>
      </div>
    )
  }
})
