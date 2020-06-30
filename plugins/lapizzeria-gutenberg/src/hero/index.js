const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, URLInputButton, BlockControls, AlignmentToolbar, InspectorControls } = wp.blockEditor;
const { Button, PanelBody, TextControl } = wp.components;

import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lp/hero',{
  title: 'La Pizzeria Hero',
  icon: {src: Logo},
  category: 'lapizzeria',
  attributes:{
    imageHero: {
      type: 'string',
      selector: '.hero-back'
    },
    titleHero: {
      type: 'string',
      source: 'html',
      selector: '.hero-block h1'
    },
    textHero:{
      type: 'string',
      source: 'html',
      selector: '.hero-block p'
    },
    urlHero:{
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    alignContent:{
      type: 'string',
      default: 'center'
    },
    heightHero:{
      type: 'number'
    }
  },
  supports:{
    align: ['wide', 'full']
  },
  edit: props =>{
    //Extract the data
    const {attributes:{imageHero, titleHero, textHero, urlHero, alignContent, heightHero}, setAttributes } = props;

    const onSelectImage = newImage =>{
      setAttributes({ imageHero : newImage.sizes.full.url })
    }
    const onChangeTitle = newTitle =>{
      setAttributes({titleHero : newTitle})
    }
    const onChangeText = newText => {
      setAttributes({textHero : newText})
    }
    const onChangeURL = newURL =>{
      setAttributes({urlHero : newURL })
    }
    const onChangeAlignContent = newAlign =>{
      setAttributes({alignContent : newAlign })
    }
    const onChangeHeightHero = newHeight =>{
      setAttributes({heightHero : newHeight})
    }
    return (
      <>
        <InspectorControls>
          <PanelBody
            title={'Height Hero'}
            initialOpen={true}
          >
            <div className="components-base-control">
              <div className="components-base-control__field">
                <label className="components-base-control__label">
                  Height Hero
                </label>
                <TextControl
                  label="Add the number in pixels"
                  type="number"
                  max={800}
                  min={300}
                  step={10}
                  onChange={onChangeHeightHero}
                  value={heightHero || 400}
                />
              </div>
            </div>
          </PanelBody>
        </InspectorControls>

        <div
        className="hero-block"
        style= {{backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${imageHero})`, textAlign: alignContent, height: `${heightHero || 400}px`}}
        >
          <BlockControls>
            <AlignmentToolbar
              onChange={onChangeAlignContent}
              value={alignContent}
            />
          </BlockControls>
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
          <div className="content-hero">
            <h1 className="title">
              <RichText
                  placeholder={'Add title Hero'}
                  onChange={onChangeTitle}
                  value={titleHero}
              />
            </h1>
            <p>
              <RichText
                  placeholder={'Add paragraph Hero'}
                  onChange={onChangeText }
                  value= {textHero}
              />
            </p>

            <div>
              <a href={urlHero} className="btn btn-primary">Read More</a>
            </div>
            <URLInputButton
              onChange={onChangeURL}
              url={urlHero}
            />
          </div>

        </div>
      </>
    )
  },

  save: props=>{
    const {attributes:{imageHero, titleHero, textHero, urlHero, alignContent, heightHero} } = props;
    return (
      <div
      className="hero-block"
      style= {{backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${imageHero})`, textAlign:alignContent, height: `${heightHero || 400}px`}}
      >
        <div className="content-hero">
          <h1 className="title">
            <RichText.Content value={titleHero} />
          </h1>
          <p>
            <RichText.Content value= {textHero} />
          </p>

          <div>
            <a href={urlHero} className="btn btn-primary">Read More</a>
          </div>
        </div>

      </div>
    )
  }
})
