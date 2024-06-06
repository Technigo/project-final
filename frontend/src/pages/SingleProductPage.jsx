import { useProductsStore } from "../store/useProductsStore"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "../components/Loading";

export const SingleProductPage = () => {
  const { id } = useParams();
  const { fetchSingleProduct, loadingProduct, singleProduct } = useProductsStore();

  useEffect(() => {
    fetchSingleProduct(id)
  }, [])


  return (
    <section className="bg-main-red h-full min-h-screen w-full pt-12 laptop:pt-28">
  {loadingProduct ? (
    <Loading />
  ) : (
    <div className="w-full">
      <img src={singleProduct.image.url} alt={singleProduct.description} className="w-full object-cover object-center aspect-square"/>
      <div className="w-9/12 m-auto py-6 text-text-light font-heading">
        <h2>{singleProduct.brand}</h2>
        <h3>{singleProduct.title}</h3>
        <p>{singleProduct.description}</p>
        <p>starsection</p>
        <h3>{singleProduct.price} €</h3>
      </div>
    </div>
  )}
    </section>
  )
};
