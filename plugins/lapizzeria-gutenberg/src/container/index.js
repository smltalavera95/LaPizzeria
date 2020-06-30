const { registerBlockType } = wp.blocks;
//Import the components
const { MediaUpload, InnerBlocks } = wp.blockEditor;
const { Button } = wp.components;

//Logo for the block
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lp/container', {
  title:'Pizzeria Container',
  icon: {src: Logo},
  category: 'lapizzeria',
  attributes: {
    imageBack:{
      type: 'string',
      selector: '.c-block__container'
    }
  },
  edit: props =>{
    const {attributes:{imageBack}, setAttributes } = props;
    const onSelectImage = newImage =>{
      setAttributes({ imageBack : newImage.sizes.full.url });
    }
    return(
      <div className="c-block__container" style={{backgroundImage : `url(${imageBack})`}}>
        <div className="c-block__content">
          <div className="c-block__image">
            <MediaUpload
              onSelect={onSelectImage}
              type="image"
              render= {({ open }) =>(
                  <Button
                    className="pizzeria-add-image"
                    onClick={open}
                    icon="format-image"
                    showTooltip="true"
                    label="Add or Change Image"
                  />
                )
              }
            />
          </div>
          <div className="c-blocks__inner">
            <InnerBlocks />
          </div>
        </div>
      </div>
    );
  },
  save: props =>{
    const {attributes:{imageBack} } = props;
    return(
      <div className="c-block__container" style={{backgroundImage: `url(${imageBack})`}}>
        <div className="c-block__content">
          <div className="c-block__image">

          </div>
          <div className="c-blocks__inner">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    );
  }
});
