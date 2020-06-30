const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, URLInputButton, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { Button } = wp.components;


import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lp/textimage', {
  title: 'La Pizzeria Text and Image',
  icon: {src: Logo},
  category: 'lapizzeria',
  attributes:{
    imageBack:{
      type: 'string',
      selector: '.ingredients'
    },
    titleIngredients:{
      type: 'string',
      source: 'html',
      selector: '.ingredients__title'

    },
    textIngredients:{
      type: 'string',
      source: 'html',
      selector: '.ingredients__paragraph'

    },
    urlIngredients:{
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    imageRight:{
      type: 'string',
      source: 'attribute',
      selector: '.ingredients__image img',
      attribute: 'src',
      default: Logo
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  edit: props =>{
    //Extract the data
    const {attributes:{imageBack, titleIngredients, textIngredients, urlIngredients, imageRight}, setAttributes } = props;

    const onSelectImage = newImage =>{
      setAttributes({ imageBack : newImage.sizes.full.url })
    }
    const onChangeTitleIngredients = newTitleIngredients =>{
      setAttributes({titleIngredients : newTitleIngredients })
    }
    const onChangeTextIngredients = newTextIngredients=>{
      setAttributes({textIngredients : newTextIngredients})
    }
    const onChangeURL = newUrlIngredients=>{
      setAttributes({urlIngredients : newUrlIngredients})
    }
    const onSelectImageRight = newImageRight =>{
      setAttributes({ imageRight : newImageRight.sizes.full.url })
    }
    return(
        <div className="ingredients" style={{backgroundImage: `url(${imageBack})`}}>
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
          <div className="ingredients__content">
            <div className="ingredients__text">
              <h2 className="ingredients__title">
                <RichText
                    placeholder={'Add title Section'}
                    onChange={onChangeTitleIngredients}
                    value={titleIngredients}
                />
              </h2>
              <p className="ingredients__paragraph">
                <RichText
                    placeholder={'Add text for the section'}
                    onChange={onChangeTextIngredients}
                    value={textIngredients}
                />
              </p>
              <div>
                <a href={urlIngredients} className="btn btn-secondary">Read More</a>
              </div>
              <URLInputButton
                onChange={onChangeURL}
                url={urlIngredients}
              />
            </div>
            <div className="ingredients__image">
              <img src={imageRight}/>
            <MediaUpload
              onSelect={onSelectImageRight}
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
          </div>
        </div>

    )
  },
  save: props =>{
      const {attributes:{imageBack, titleIngredients, textIngredients, urlIngredients, imageRight} } = props;
    return(

        <div className="ingredients" style={{backgroundImage: `url(${imageBack})`}}>
          <div className="ingredients__content">
            <div className="ingredients__text">
              <h2 className="ingredients__title">
                <RichText.Content value={titleIngredients} />
              </h2>
              <p className="ingredients__paragraph">
                <RichText.Content value={textIngredients} />
              </p>
              <div>
                <a href={urlIngredients} className="btn btn-secondary">Read More</a>
              </div>
            </div>
            <div className="ingredients__image">
              <img src={imageRight} />

            </div>
          </div>
        </div>

    )
  }
});
