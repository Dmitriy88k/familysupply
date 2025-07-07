import { useState } from 'react';
import { Heart } from "lucide-react";


const LikeProduct = () => {
    const [liked, setLiked] = useState(false);
    
    return(
        <div>
            <button onClick={()=> setLiked(!liked)} className="p-2">
                <Heart
                    size={24}
                    className={liked ? "text-[#E9452D] fill-[#E9452D]" : "text-gray-400"}
                />
            </button>
        </div>
    )
}

export default LikeProduct