import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { useState } from 'react';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setgoodsList] = useState<Good[]>([]);

  const loadAllgoodsList = () => {
    goodsAPI
      .getAll()
      .catch()
      .then(data => setgoodsList(data));
  };

  const loadFiveFirtsgoodsList = () => {
    goodsAPI
      .get5First()
      .catch()
      .then(data => setgoodsList(data));
  };

  const loadRedgoodsList = () => {
    goodsAPI
      .getRedGoods()
      .catch()
      .then(data => setgoodsList(data));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadAllgoodsList()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadFiveFirtsgoodsList()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadRedgoodsList()}
      >
        Load red goods
      </button>
      <h1></h1>
      <GoodsList goods={goodsList} />
    </div>
  );
};
