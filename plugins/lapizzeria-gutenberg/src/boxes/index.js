const { registerBlockType } = wp.blocks;
//Import the components
const { RichText, InspectorControls, ColorPalette, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody } = wp.components;

//Logo for the block
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lp/boxes', {
    title:'Pizzeria Boxes',
    icon: {src: Logo},
    category: 'lapizzeria',
    attributes: {
      headingBox:{
        type: 'string',
        source: 'html',
        selector: ".box h2"
      },
      textBox:{
        type: 'string',
        source: 'html',
        selector: ".box p"
      },
      bgColor:{
        type:'string'
      },
      textColor:{
        type:'string'
      },
      contentAlign:{
        type:'string',
        default: 'center'
      }
    },
    edit: (props) => {

      //Extract the content from props
      const {attributes: {headingBox, textBox, bgColor, textColor, contentAlign}, setAttributes} = props;

      //safest place to enter JS code

      //Function to read the user writes
      const onChangeHeadingBox = newHeading =>{
        setAttributes({headingBox : newHeading });
      }
      const onChangeTextBox = newText =>{
        setAttributes({textBox : newText });
      }
      const onChangeBackgroundColor = newBgColor =>{
        setAttributes({bgColor : newBgColor });
      }
      const onChangeTextColor = newTextColor =>{
        setAttributes({textColor : newTextColor });
      }
      const onChangeContentAlign = newAlign =>{
        setAttributes({contentAlign : newAlign });
      }
      return(
        <>
          <InspectorControls>
            <PanelBody
              title={'Color de Fondo'}
              initialOpen={true}
            >
              <div className="components-base-control">
                <div className="components-base-control__field">
                  <label className="components-base-control__label">
                    Color de Fondo
                  </label>
                  <ColorPalette
                    onChange={onChangeBackgroundColor}
                  />
                </div>
              </div>
            </PanelBody>
            <PanelBody
              title={'Color del texto'}
              initialOpen={false}
            >
              <div className="components-base-control">
                <div className="components-base-control__field">
                  <label className="components-base-control__label">
                    Color del Texto
                  </label>
                  <ColorPalette
                    onChange={onChangeTextColor}
                    value={textColor}
                  />
                </div>
              </div>
            </PanelBody>
          </InspectorControls>

          <BlockControls>
            <AlignmentToolbar
              onChange={onChangeContentAlign}
            />
          </BlockControls>

          <div className="box" style={{backgroundColor : bgColor, textAlign: contentAlign}}>
            <h2 style={{color : textColor}}>

              <RichText
               placeholder="Add your title"
               onChange ={onChangeHeadingBox}
               value={headingBox}
              />
            </h2>
            <p style={{color : textColor}}>
              <RichText
                placeholder="Add a description"
                onChange ={onChangeTextBox}
                value={textBox}
              />
            </p>
          </div>
        </>
      )
    },
    save:  (props) => {

      //Extract the content from props
      const {attributes: {headingBox, textBox, bgColor, textColor, contentAlign}} = props;


      return(

        <div className="box" style={{backgroundColor : bgColor, textAlign: contentAlign}}>
          <h2 style={{color : textColor}}>

            <RichText.Content value={headingBox} />
          </h2>
          <p style={{color : textColor}}>
            <RichText.Content value={textBox}/>
          </p>
        </div>

      )
    }

});
