import PropertyModel from "../models/PropertyModel.js";

export const getAddProperty = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'post-property.html'));
  console.log('Property Added Successfully');
  res.render('property/post-property', { pageTitle: 'Add Property', currentPage: 'property-added' });
};

export const getMyListing = (req, res, next) => {
  PropertyModel.fetchAll((propertyList) => {
    console.log('My Listing Page: ', propertyList);
    res.render('property/my-listing', { properties: propertyList, pageTitle: 'My Listing', currentPage: 'my-listing' });
  });
};

export const postAddProperty = (req, res, next) => {
  console.log('Property Added Page: ', req.body);

  const { pname, price, location, nearby, image } = req.body;
  const newProperty = new PropertyModel(pname, price, location, nearby, image);
  newProperty.save();

  res.render('property/property-added', { pageTitle: 'Property Added Successfully', currentPage: 'post-property', property: req.body });
};



export const getIndex = (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../views/home.html'));
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));

  PropertyModel.fetchAll((propertyList) => {
    console.log('Index Page: ', propertyList);
    res.render('store/index', { properties: propertyList, pageTitle: 'Index Page', currentPage: 'index' });
  });
};

export const getProperty = (req, res, next) => {
  PropertyModel.fetchAll((propertyList) => {
    console.log('Home Page: ', propertyList);
    res.render('store/property-list', { properties: propertyList, pageTitle: 'Property List', currentPage: 'home' });
  });
};

export const getPropertyDetails = (req, res, next) => {
  let propertyId = req.params.propertyId;

  PropertyModel.findById(propertyId, (property) => {
    if (!property) {
      console.log('Property Not Found');
      // res.redirect('/');

      return res.status(404).render('404', { pageTitle: 'Property Not Found', currentPage: '404' });
    }
    console.log('Property Details Page: ', property);
    res.render('store/property-details', { property, pageTitle: 'Property Details', currentPage: 'property-details' });
  });
};


export const getBookings = (req, res, next) => {
    res.render('store/bookings', {pageTitle: 'Bookings', currentPage: 'bookings' });
};

export const getFavouriteList = (req, res, next) => {
  PropertyModel.fetchAll((propertyList) => {
    const favouriteProperties = propertyList.filter(property => property.isFavourite);
    console.log('Favourite List Page: ', favouriteProperties);
    res.render('store/favourite-list', { favouriteProperties, pageTitle: 'Favourite Properties', currentPage: 'favourite-list' });
  });
};
