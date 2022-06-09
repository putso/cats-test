import { NextApiResponse } from 'next/types';
import React from 'react'
type data = {
    url: string;
    id: string;
  };
type props = {
  data: data[];
};

const fetchCats = async (page:number) => {
    let url = `https://api.thecatapi.com/v1/images/search?`;
    let param = new URLSearchParams({
      page: page.toString(), 
      limit: (20).toString(),
      order: "Desc",
    });
    //console.log(url+param);
    const res = await fetch(url + param, {
      headers: new Headers( {
        'x-api-key': '9dd68827-7d08-47b6-b624-cc2596ff6dd4'
      })
    });
    const data: data[] = await res.json();
    return data
}

export default fetchCats