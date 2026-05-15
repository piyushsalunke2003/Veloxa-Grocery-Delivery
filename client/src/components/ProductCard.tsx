import type { Product } from "../types"
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react"

interface Props {
    product: Product

}
const ProductCard = ({ product }: Props) => {

    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

    const { addToCart } = {addToCart: (_data: any) => {}}
    const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
      {/* Image*/}
      <div className="relative aspect-square overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover p-4 group-hover:p-2 tranition-all duration-300" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {product.discount > 0 && <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-app-orange text-white rounded-full">{product.discount}% OFF</span>}
            </div>
      </div>
      {/* Info */}
      <div className="p-3.5 text-zinc-700">
            <h3 className="text-sm leading-snug mb-1.5 line-clamp-2">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
                <Star className="size-3 text-app-warning fill-app-warning" />
                <span className="text-xs text-zinc-500">{product.rating}</span>
                <span className="text-xs text-app-green font-medium">
                    ({product.reviewCount})
                </span>
            </div>
      </div>
    </div>
  )
}

export default ProductCard
