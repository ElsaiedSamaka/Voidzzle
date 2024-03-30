import { RootState } from 'core/store';
import { getBrandsThunk } from 'core/store/brands/brands.thunk';
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
  const brandsSlice = useSelector((state: RootState) => state.brands);
  const { state, dispatch: dispatchSelectedItems } = useSelectedItems();
  const { items } = state;
  const dispatch = useDispatch();
  const handleAddetionDispatch = (data:any) => {
    dispatch(createProductThunk(data));
  };
  const handleUpdateDispatch = (data:any) => {
    dispatch(updateProductThunk(data));
  };
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
  const handleGetBrandsDispatch = () => {
    dispatch(getBrandsThunk());
  };
  const th = [
    { label: 'name', id: 1 },
    { label: 'category', select: 'name', id: 2 },
    { label: 'quantity', id: 3 },
    { label: 'brand', id: 4 },
    { label: 'Sales/Month', id: 5 },
    { label: 'ratingsAverage', id: 6 },
    { label: 'sold', id: 7 },
    { label: 'price', id: 8 },
    { label: 'updatedAt', id: 9 },
  ];
  // get products from api just when component is mounted
  useEffect(() => {
    dispatch(getProductsThunk());
  },[]);
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
      validation: [],
    },
    {
      name: 'brand',
      label: 'products.brand',
      id: 'brand',
      type: 'text',
      required: true,
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
      name: 'stock',
      label: 'products.stock',
      id: 'stock',
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
      name: 'weight',
      label: 'products.weight',
      id: 'weight',
      type: 'number',
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
      name: 'length',
      label: 'products.length',
      id: 'length',
      type: 'number',
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
      name: 'breadth',
      label: 'products.breadth',
      id: 'breadth',
      type: 'number',
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
      name: 'width',
      label: 'products.width',
      id: 'width',
      type: 'number',
      // required: true,
      // maxLength: 20,
      // minLength: 10,
      // validation: [],
    },
    {
      name: 'description',
      label: 'products.description',
      id: 'description',
      type: 'text-area',
      required: true,
      maxLength: 2000,
      minLength: 10,
      validation: [],
    },
    {
      name: 'product_imgs',
      label: 'products.product_imgs',
      id: 'product_imgs',
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
      filterData={brandsSlice}
      defaultValues={defaultValues}
      formFields={formFields}
      handleAddetionDispatch={handleAddetionDispatch}
      handleUpdateDispatch={handleUpdateDispatch}
      handleDeleteAllDispatch={handleDeleteAll}
      handleSearchDispatch={handleItemsSearch}
      handleGetFilterationDispatch={handleGetBrandsDispatch}
    />
  );
};

export default Products;
