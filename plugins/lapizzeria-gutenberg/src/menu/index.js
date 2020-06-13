const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;//Same function of the WP_Query
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, RangeControl, SelectControl, TextControl } = wp.components;

import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lp/menu', {
  title: 'La Pizzeria Menu',
  icon: {src: Logo},
  category: 'lapizzeria',
  attributes:{
    quantityShow:{
      type: 'number'
    },
    categoriesMenu:{
      type: 'number'
    },
    blockTitle:{
      type: 'string',
      default: 'Our Speacialties'
    }
  },
  //Los props ayudan a pasar los atributos
  edit: withSelect( (select, props) => {
    const {attributes: { quantityShow, categoriesMenu }, setAttributes }= props;

    const onChangeQuantityShow = newQuantity =>{
      setAttributes({ quantityShow : parseInt(newQuantity) })
    }
    const onChangeCategoriesMenu = newCategories =>{
      setAttributes({ categoriesMenu : newCategories })
    }
    const onChangeBlockTitle = newTitle =>{
        setAttributes({ blockTitle : newTitle })
    }
    return {
      categories: select("core").getEntityRecords('taxonomy', 'category-menu'),
      specialties: select("core").getEntityRecords('postType', 'specialties', {
        'category-menu' : categoriesMenu,
        per_page: quantityShow || -1
      }),
      onChangeQuantityShow,
      onChangeCategoriesMenu,
      onChangeBlockTitle,
      props
    };
  })
  ( ({ categories, specialties, onChangeQuantityShow, onChangeCategoriesMenu, onChangeBlockTitle, props }) =>{

    const {attributes: { quantityShow, categoriesMenu, blockTitle } }= props;

    //Checking specialties
    if(!specialties){
      return 'Loading...';
    }

    //If there is not specialties
    if(specialties && specialties.length === 0){
      return 'Menu did not found any results';
    }
    //Checking the categories
    if(!categories){
      console.log('Loading...');
    }

    //If there is not categories
    if(categories && categories.length === 0){
      console.log('Category did not found any results');
    }

    categories.forEach( category=>{
      category['label'] =category.name;
      category['value'] = category.id;
    })



    //Array default values
    const defaultOptions=[{ value:'', label:'-- All --'}];
    const categoriesList = [...defaultOptions, ...categories];
    return (
      <>
      <InspectorControls>
        <PanelBody
          title={'Quantity to show'}
          initialOpen={true}
        >
          <div className="components-base-control">
            <div className="components-base-control__field">
              <label className="components-base-control__label">
                Quantity to show
              </label>
              <RangeControl
                onChange= {onChangeQuantityShow}
                min={2}
                max={10}
                value={quantityShow || 0}
              />
            </div>
          </div>
        </PanelBody>

        <PanelBody
          title={'Specialties Category'}
          initialOpen={false}
        >
          <div className="components-base-control">
            <div className="components-base-control__field">
              <label className="components-base-control__label">
                Specialties Category
              </label>
              <SelectControl
                options= { categoriesList }
                onChange= {onChangeCategoriesMenu}
                value = { categoriesMenu }

              />
            </div>
          </div>
        </PanelBody>

        <PanelBody
          title={'Block Title'}
          initialOpen={false}
        >
          <div className="components-base-control">
            <div className="components-base-control__field">
              <label className="components-base-control__label">
                Block Title
              </label>
              <TextControl
                onChange= {onChangeBlockTitle}
                value={ blockTitle }
              />
            </div>
          </div>
        </PanelBody>

      </InspectorControls>
      <h2 className="menu-title">{blockTitle}</h2>
      <ul className="our-menu">
        {specialties.map(specialty =>(
          <li>
            <img src={specialty.featured_image_url} />
            <div className="dish">
              <div className="price-title">
                <h3>{specialty.title.rendered}</h3>
                <p>${specialty.price}</p>
              </div>
              <div className="dish-content">
                <p>
                  <RichText.Content value={specialty.content.rendered.substring(0, 150)} />
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </>
    );
  }),
  //Como no se va retomar nada desde el editor del gutenberg, sino la informacion va venir del callback
  save: ()=>{
    return null;
  }
})
