import { RootState } from 'core/store';
import { getCategoriesThunk } from 'core/store/categories/categories.thunk';
import {
  createProductThunk,
  deleteAllProductsThunk,
  getProductsThunk,
  searchProductsThunk,
  updateProductThunk,
} from 'core/store/products/products.thunk';
import Validators from 'core/validators';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'shared';
import { useSelectedItems } from 'shared/Table/shared/context/SelectedItemsContext';

const Products = () => {
  const productsSlice = useSelector((state: RootState) => state.products);
  const categoriesSlice = useSelector((state: RootState) => state.categoires);
  const { state, dispatch: dispatchSelectedItems } = useSelectedItems();
  const { items } = state;
  const dispatch = useDispatch();
  const handleAddetionDispatch = (data: any) => {
    dispatch(createProductThunk(data));
  };
  const handleUpdateDispatch = (data: any) => {
    dispatch(updateProductThunk(data));
  };
  const handleGetFilterationDispatch = ()=>{
    dispatch(getCategoriesThunk())
  }
  const handleDeleteAll = () => {
    const ids = items.map((item) => item.id);
    dispatch(deleteAllProductsThunk(ids));
    dispatchSelectedItems({
      type: 'reset',
    });
  };
  const handleItemsSearch = (query: string) => {
    dispatch(searchProductsThunk(query));
  };

  const th = [
    { key: 'name', label: 'products.name', id: 1 },
    { key: 'category', label: 'products.category', select: 'name', id: 2 },
    { key: 'quantity', label: 'products.quantity', id: 3 },
    { key: 'brand', label: 'products.brand', select: 'name', id: 4 },
    { key: 'ratingsAverage', label: 'products.average_ratings', id: 6 },
    { key: 'sold', label: 'products.sold', id: 7 },
    { key: 'price', label: 'products.price', id: 8 },
  ];
  // get products from api just when component is mounted
  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
  }, []);
  const formFields = [
    {
      name: 'name',
      label: 'products.name',
      id: 'name',
      type: 'text',
      required: true,
      maxLength: 20,
      minLength: 10,
      validation: [
        {
          isName: (val: string) => {
            if (val === 'name') {
              return 'Enter a different product name';
            }
          },
        },
      ],
    },
    {
      name: 'category',
      label: 'products.category',
      id: 'category',
      type: 'select',
      required: true,
      options: categoriesSlice.items.map((category) => ({
        label: category.name,
        value: category._id,
      })),
      validation: [],
    },
    {
      name: 'brand',
      label: 'products.brand',
      id: 'brand',
      type: 'text',
      required: false,
      validation: [],
    },
    {
      name: 'price',
      label: 'products.price',
      id: 'price',
      type: 'number',
      required: true,
      validation: [
        {
          isNotZero: (val: number) => {
            Validators.isNotZero(val, 'product');
          },
          isNotNegative: (val: number) => {
            Validators.isNotNegative(val, 'product');
          },
        },
      ],
    },
    {
      name: 'quantity',
      label: 'products.quantity',
      id: 'quantity',
      type: 'number',
      required: true,
      validation: [
        {
          isNotZero: (val: number) => {
            Validators.isNotZero(val, 'product');
          },
          isNotNegative: (val: number) => {
            Validators.isNotNegative(val, 'product');
          },
        },
      ],
    },
    {
      name: 'priceDiscount',
      label: 'products.price_discount',
      id: 'priceDiscount',
      required: true,
      type: 'number',
    },
    {
      name: 'colors',
      label: 'products.colors',
      id: 'colors',
      required: false,
      type: 'select',
    },
    {
      name: 'sizes',
      label: 'products.sizes',
      id: 'sizes',
      required: false,
      type: 'select',
    },
    {
      name: 'description',
      label: 'products.description',
      id: 'description',
      required: true,
      type: 'text-area',
    },
    {
      name: 'img',
      label: 'products.img',
      id: 'img',
      type: 'file',
      required: false,
    },
  ];
  const defaultValues = {};
  return (
    <Table
      _config={{
        title: 'Products',
        _head: {
          show: true,
          _actions: {
            show: true,
            addtions: true,
            actions: true,
            filteration: true,
          },
          _search: {
            show: true,
          },
        },
        _body: {
          isTrue: true,
          perPage: 7,
          _th: th,
        },
        _footer: { isTrue: true },
        _multiSelect: true,
        _extenstions: { actionsColumns: true },
      }}
      data={productsSlice}
      filterData={categoriesSlice}
      defaultValues={defaultValues}
      formFields={formFields}
      handleAddetionDispatch={handleAddetionDispatch}
      handleUpdateDispatch={handleUpdateDispatch}
      handleDeleteAllDispatch={handleDeleteAll}
      handleSearchDispatch={handleItemsSearch}
      handleGetFilterationDispatch={handleGetFilterationDispatch}
    />
  );
};

export default Products;
