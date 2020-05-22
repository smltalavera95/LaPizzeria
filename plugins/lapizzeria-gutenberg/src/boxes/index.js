const { registerBlockType } = wp.blocks;
//Import the components
const { RichText } = wp.editor;

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
      }
    },
    edit: () => {

      //safest place to enter JS code

      //Function to read the user writes
      const onChangeHeadingBox = newHeading =>{
        console.log(newHeading);
      }
      return(
        <div className="box">
          <h2>

            <RichText
             placeholder="Add your title"
             onChange ={onChangeHeadingBox}
            />
          </h2>
        </div>
      )
    },
    save: () =>{
      return (
        <h2>

        </h2>
      )
    }

});
