import { Star } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    return(
        <div className="flex gap-1 mx-auto mb-1 md:mx-0 xl:mx-auto">
            {Array.from({ length: totalStars }, (_, index) => (
                <Star
                    key={index}
                    size={20}
                    className={index < rating ? "text-[#FF9900] fill-[#FF9900]" : "text-gray-300"}
                />
            ))}
        </div>
    )
}

export default StarRating;