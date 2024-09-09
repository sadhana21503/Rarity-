  import React, { useState, useEffect } from 'react';
  import './FilterPage.scss';
  import { FaFilter} from 'react-icons/fa';
  // import { useNavigate } from 'react-router-dom';

import i1 from '../../assets/images/blackcargo.jpg';
import i11 from '../../assets/images/blackcargo2.png'
import i2 from '../../assets/images/browncargo1.png';
import i22 from '../../assets/images/browncargo2.png';
import i3 from '../../assets/images/whiteshirt1.png';
import i33 from '../../assets/images/whiteshirt2.png';
import i4 from '../../assets/images/blueshirt1.png';
import i44 from '../../assets/images/blueshirt2.png';
import i5 from '../../assets/images/printedblack1.png';
import i55 from '../../assets/images/printedblack2.png';
import i6 from '../../assets/images/blackt1.png';
import i66 from '../../assets/images/blackt2.png';
import i7 from '../../assets/images/grayplainsweater1.png';
import i77 from '../../assets/images/grayplainsweater2.png';
import i8 from '../../assets/images/cozysweater1.png';
import i88 from '../../assets/images/cozysweater2.png';
import i9 from '../../assets/images/darkblueslimjean1.png';
import i99 from '../../assets/images/darkblueslimjean2.png';
import i10 from '../../assets/images/blueregularjeans1.png';
import i1010 from '../../assets/images/blueregularjeans2.png';
import ii11 from '../../assets/images/whitesweater1.png';
import i1111 from '../../assets/images/whitesweater2.png';
import i12 from '../../assets/images/darkbluesweater1.png';
import i1212 from '../../assets/images/darkbluesweater2.png';
import i14 from '../../assets/images/whitestripped1.png';
import i1414 from '../../assets/images/whitestripped2.png';
import i15 from '../../assets/images/cargobrown1.png';
import i1515 from '../../assets/images/cargobrown2.png';
import i16 from '../../assets/images/redchexed1.png';
import i1616 from '../../assets/images/redchexed2.png';
import i17 from '../../assets/images/greensweater1.png';
import i1717 from '../../assets/images/greensweater2.png';
import i18 from '../../assets/images/greysweatshirt1.png';
import i1818 from '../../assets/images/greysweatshirt2.png';
import i19 from '../../assets/images/denimblue1.png';
import i1919 from '../../assets/images/denimblue2.png';
import i20 from '../../assets/images/blackbomber1.png';
import i2020 from '../../assets/images/blackbomber2.png';
  const products = [
    { id: 4, name: 'Casual Blue Shirt', price: 1199, size: ['S', 'M', 'L', 'XL'], category: 'Shirts', color: 'Blue', pattern: 'Plain', image:i4 ,hoverImage: i44  },
    { id: 1, name: 'Black Relaxed Fit Cargo Pants', price: 1499, size: [30, 32, 34, 38], category: 'Cargo Pants', color: 'Black', pattern: 'Plain', image:i1, hoverImage: i11 },
    { id: 2, name: 'Nils Loose Fit Khaki Cargo Pants', price: 1699, size: [30, 32, 34, 36, 38], category: 'Cargo Pants', color: 'Khaki', pattern: 'Plain', image: i2, hoverImage: i22  },
    { id: 3, name: 'Classic White Shirt', price: 999, size: ['S', 'M', 'L', 'XL'], category: 'Shirts', color: 'White', pattern: 'Plain', image: i3 ,hoverImage: i33  },
    { id: 5, name: 'Graphic T-Shirt', price: 699, size: ['S', 'M', 'XL'], category: 'T-Shirts', color: 'Black', pattern: 'Printed', image: i5 ,hoverImage: i55  },
    { id: 6, name: 'Plain Black T-Shirt', price: 599, size: ['S', 'M', 'XL'], category: 'T-Shirts', color: 'Black', pattern: 'Plain', image:i6 ,hoverImage: i66  },
    { id: 7, name: 'Warm Woolen Sweater', price: 2499, size: ['M', 'L', 'XL'], category: 'Sweaters', color: 'Grey', pattern: 'Plain', image: i7 ,hoverImage: i77  },
    { id: 8, name: 'Cozy Knit Sweater', price: 2299, size: ['M', 'L', 'XL'], category: 'Sweaters', color: 'Beige', pattern: 'Plain', image: i8 ,hoverImage: i88  },
    { id: 9, name: 'Slim Fit Jeans', price: 1899, size: [28, 30, 32, 34, 36], category: 'Jeans', color: 'Blue', pattern: 'Plain', image: i9 ,hoverImage: i99  },
    { id: 10, name: 'Regular Fit Jeans', price: 1599, size: [28, 30, 32, 34, 36], category: 'Jeans', color: 'Blue', pattern: 'Plain', image: i10 ,hoverImage: i1010  },
    { id: 11, name: 'White Polo T-Shirt', price: 999, size: ['S', 'M', 'L', 'XL'], category: 'T-Shirts', color: 'White', pattern: 'Plain', image: ii11,hoverImage: i1111  },
    { id: 12, name: 'Navy Blue Sweater', price: 2199, size: ['M', 'L', 'XL'], category: 'Sweaters', color: 'Navy', pattern: 'Plain', image: i12,hoverImage: i1212  },
    // { id: 13, name: 'Black Slim Fit Shirt', price: 1299, size: ['S', 'M', 'L', 'XL'], category: 'Shirts', color: 'Black', pattern: 'Plain', image: i13,hoverImage: i1313  },
    { id: 14, name: 'Striped T-Shirt', price: 799, size: ['S', 'M', 'L', 'XL'], category: 'T-Shirts', color: 'White', pattern: 'Printed', image: i14,hoverImage: i1414  },
    { id: 15, name: 'Brown Chinos', price: 1499, size: [30, 34, 36, 38], category: 'Cargo Pants', color: 'Brown', pattern: 'Plain', image: i15 ,hoverImage: i1515  },
    { id: 16, name: 'Plaid Shirt', price: 1099, size: ['S','L', 'XL'], category: 'Shirts', color: 'Red', pattern: 'Printed', image:i16 ,hoverImage: i1616  },
    { id: 17, name: 'V-Neck Sweater', price: 2399, size: ['M', 'L', 'XL'], category: 'Sweaters', color: 'Green', pattern: 'Plain', image: i17 ,hoverImage: i1717  },
    { id: 18, name: 'Grey Sweatshirt', price: 1999, size: ['S', 'M', 'L', 'XL'], category: 'Sweaters', color: 'Grey', pattern: 'Plain', image: i18 ,hoverImage: i1818  },
    { id: 19, name: 'Denim Jacket', price: 3499, size: ['M', 'L', 'XL'], category: 'Jackets', color: 'Blue', pattern: 'Plain', image: i19,hoverImage: i1919  },
    { id: 20, name: 'Black Bomber Jacket', price: 4299, size: ['M', 'L', 'XL'], category: 'Jackets', color: 'Black', pattern: 'Plain', image: i20,hoverImage: i2020 },
  ];

const FilterPage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    size: [],
    price: [],
    category: [],
    color: [],
    pattern: []
  });
  const [openSections, setOpenSections] = useState({
    collections: false,
    size: false,
    price: false,
    colors: false,
    pattern: false,
  });
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    const checked = event.target.checked;

    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (checked) {
        updatedFilters[filterType].push(value);
      } else {
        updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value);
      }

      return updatedFilters;
    });
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);
 
  // const handleCardClick = (id) => {
  //   navigate(`/product/${id}`);
  // };

 

  const applyFilters = () => {
    let newFilteredProducts = products;

    if (filters.size.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        product.size.some((size) => filters.size.includes(String(size)))
      );
    }

    if (filters.price.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        filters.price.some((price) => product.price <= parseInt(price))
      );
    }

    if (filters.category.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    if (filters.color.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        filters.color.includes(product.color)
      );
    }

    if (filters.pattern.length > 0) {
      newFilteredProducts = newFilteredProducts.filter((product) =>
        filters.pattern.includes(product.pattern)
      );
    }

    setFilteredProducts(newFilteredProducts);
  };
  
  return (
    <div className="filter-page">
     <div className="filter-icon" onClick={toggleSidebar}>
     <FaFilter />
      </div>
      <div className={`filter-sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <div className="filter-section">
          <h3
            onClick={() => toggleSection('collections')}
            data-open={openSections.collections ? 'true' : 'false'}
          >
            ▼ COLLECTIONS
          </h3>
          {openSections.collections && (
            <ul>
              {['Cargo Pants', 'Jeans', 'Shirts', 'T-Shirts', 'Sweaters', 'Jackets'].map((category) => (
                <li key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    onChange={(e) => handleFilterChange(e, 'category')}
                  />{' '}
                  {category} ({products.filter(product => product.category === category).length})
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="filter-section">
          <h3
            onClick={() => toggleSection('size')}
            data-open={openSections.size ? 'true' : 'false'}
          >
            ▼ SIZE
          </h3>
          {openSections.size && (
            <ul>
              {['S', 'M', 'L', 'XL', 28, 30, 32, 34, 36, 38].map((size) => (
                <li key={size}>
                  <input
                    type="checkbox"
                    value={size}
                    onChange={(e) => handleFilterChange(e, 'size')}
                  />{' '}
                  {size} ({products.filter(product => product.size.includes(size)).length})
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="filter-section">
          <h3
            onClick={() => toggleSection('price')}
            data-open={openSections.price ? 'true' : 'false'}
          >
            ▼ PRICE
          </h3>
          {openSections.price && (
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="999"
                  onChange={(e) => handleFilterChange(e, 'price')}
                />{' '}
                Under ₹999
              </li>
              <li>
                <input
                  type="checkbox"
                  value="1499"
                  onChange={(e) => handleFilterChange(e, 'price')}
                />{' '}
                Under ₹1499
              </li>
              <li>
                <input
                  type="checkbox"
                  value="2499"
                  onChange={(e) => handleFilterChange(e, 'price')}
                />{' '}
                Under ₹2499
              </li>
            </ul>
          )}
        </div>

        <div className="filter-section">
          <h3
            onClick={() => toggleSection('colors')}
            data-open={openSections.colors ? 'true' : 'false'}
          >
            ▼ COLOR
          </h3>
          {openSections.colors && (
            <ul>
              {['Black', 'White', 'Blue', 'Red', 'Khaki', 'Beige', 'Grey', 'Navy', 'Brown', 'Green'].map((color) => (
                <li key={color}>
                  <input
                    type="checkbox"
                    value={color}
                    onChange={(e) => handleFilterChange(e, 'color')}
                  />{' '}
                  {color} ({products.filter(product => product.color === color).length})
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="filter-section">
          <h3
            onClick={() => toggleSection('pattern')}
            data-open={openSections.pattern ? 'true' : 'false'}
          >
            ▼ PATTERN
          </h3>
          {openSections.pattern && (
            <ul>
              {['Plain', 'Printed'].map((pattern) => (
                <li key={pattern}>
                  <input
                    type="checkbox"
                    value={pattern}
                    onChange={(e) => handleFilterChange(e, 'pattern')}
                  />{' '}
                  {pattern} ({products.filter(product => product.pattern === pattern).length})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="filtered-products">
  <div className="filter-text">Filtered Products</div>
  {filteredProducts.length === 0 ? (
    <div className="no-products-found">No products found based on your needs</div>
  ) : (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card" onClick={() => (window.location.href = "/product")}>
          <div className="product-image">
            <img src={product.image} alt={product.name} className="default-image" />
            <img src={product.hoverImage} alt={`${product.name} Hover`} className="hover-image" />
          </div>
          <div className="productt-text">
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p>Available Sizes: {product.size.join(', ')}</p>
          <p>Color: {product.color}</p>
          <p>Pattern: {product.pattern}</p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
    </div>
  );
};

export default FilterPage;