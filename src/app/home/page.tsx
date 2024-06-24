"use client";
import React from "react";
import { getAllroducts_server_actions } from "../../../actions/fetch_products_action";
import { productEndPoint } from "phi/config/endPoint";
import { RootState, useAppDispatch, useAppSelector } from "phi/lib/store";
import { get_products_fun } from "phi/lib/feature/mainFeatureSlice";
import { Product } from "phi/types/product_type";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.primary_store_state.product
  );

  const { isError, isLoading } = useQuery({
    queryKey: [productEndPoint],
    queryFn: ({ queryKey }) =>
      getAllroducts_server_actions(queryKey[0]).then((res) =>
        dispatch(get_products_fun(res))
      ),
    retry: 3,
    retryDelay: 3000, // If the request fails, wait for 3 seconds before trying again
  });

  if (isError) {
    return <h2>Error found!</h2>;
  }

  if (isLoading) {
    return (
      <div>
        {[...Array(20)].map((_: any, index: number) => (
          <div
            className="w-1/2 h-7 bg-gray-300 m-2 rounded-sm shadow-sm"
            key={index}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Product Lists</h1>
      <ul>
        {products.map((data: Product, index: number) => (
          <li key={index} className="m-1 bg-emerald-500">
            <Link href={`home/${data.id}`} scroll={false}>
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
